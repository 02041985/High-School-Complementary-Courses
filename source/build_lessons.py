"""Build built-in lesson JSON from lesson source text, in place in a planbook repo.
Usage: python3 lb.py <repo> <src.txt> [...]   (writes api/_lessons/<code>.json and regenerates all.js)
Same format as source/parse.py; mc lines list the correct option first (shuffled deterministically)."""
import json, sys, pathlib, subprocess, random, hashlib
REPO = pathlib.Path(sys.argv[1])
rows = json.loads(subprocess.check_output(["node", "-e", (REPO / "js/data.js").read_text() + "\nconsole.log(JSON.stringify(SO_ROWS))"]))
ROW = {r[0]: r for r in rows}
LV = {"B": "Basic", "I": "Intermediate", "C": "Challenge"}
lc = lambda s: s[0].lower() + s[1:]
def split(s, sep): return [x.strip() for x in s.split(sep)]

def parse_file(path):
    out, cur, errs = {}, None, []
    for n, line in enumerate(path.read_text().split("\n"), 1):
        line = line.rstrip()
        if not line.strip() or line.startswith("#"): continue
        if line.startswith("=== "):
            code, i = line[4:].split(); i = int(i)
            cur = {"code": code, "i": i, "v": [], "ex": [], "p": [], "mc": [], "sa": []}
            out[(code, i)] = cur; continue
        k, _, val = line.partition(": "); k = k.strip(); val = val.strip()
        if cur is None: errs.append(f"{path.name}:{n} outside lesson"); continue
        try:
            if k in ("hook", "src", "pr"): cur[k] = val
            elif k == "tx": cur["tx"] = val.replace(" ¶ ", "\n").replace("¶", "\n")
            elif k in ("sc", "st", "org", "an", "mis", "et"): cur[k] = split(val, " | ")
            elif k == "ts": t, ty, q = split(val, " || "); cur["ts"] = (t, ty, q)
            elif k == "v": t, d = split(val, " :: "); cur["v"].append({"term": t, "definition": d})
            elif k == "ex":
                t, p, st, a, e = split(val, " || "); cur["ex"].append({"title": t, "problem": p, "steps": split(st, " | "), "answer": a, "explore": e})
            elif k == "p": l, q, a = split(val, " || "); cur["p"].append({"q": q, "a": a, "level": LV[l]})
            elif k == "mc":
                l, q, opts = split(val, " || "); o = split(opts, " | ")
                if len(o) != 4 or len(set(o)) != 4: raise ValueError("mc needs 4 distinct options")
                right = o[0]; random.Random(hashlib.md5((cur["code"] + q).encode()).hexdigest()).shuffle(o)
                labs = [f"{'ABCD'[j]}) {x}" for j, x in enumerate(o)]
                cur["mc"].append({"type": "mc", "q": q, "options": labs, "answer": labs[o.index(right)], "level": LV[l]})
            elif k == "sa": l, q, a = split(val, " || "); cur["sa"].append({"type": "short", "q": q, "answer": a, "level": LV[l]})
            else: errs.append(f"{path.name}:{n} unknown key {k!r}")
        except Exception as e: errs.append(f"{path.name}:{n} {k}: {e}")
    return out, errs

def build(L):
    code, i = L["code"], L["i"]; title = ROW[code][3][i]; errs = []
    lv = [p["level"] for p in L["p"]]
    for k in ["hook", "sc", "ts", "tx", "src", "st", "org", "an", "pr", "mis", "et"]:
        if k not in L: errs.append(f"missing {k}")
    if len(L["ex"]) != 4: errs.append(f"{len(L['ex'])} examples")
    if len(L["p"]) != 15 or lv.count("Basic") != 5 or lv.count("Intermediate") != 6 or lv.count("Challenge") != 4:
        errs.append(f"practice {len(L['p'])} B{lv.count('Basic')} I{lv.count('Intermediate')} C{lv.count('Challenge')}")
    if len(L["mc"]) != 12 or len(L["sa"]) != 8: errs.append(f"test mc{len(L['mc'])} sa{len(L['sa'])}")
    if not 4 <= len(L["v"]) <= 8: errs.append(f"{len(L['v'])} vocab")
    if errs: return None, errs
    t, ty, q = L["ts"]
    return {"kind": "lesson", "key": f"{code}_{i}", "code": code, "i": i, "builtin": True,
        "body": {"objective": f"Students will be able to {lc(title)}.", "iCan": f"I can {lc(title)}.", "successCriteria": L["sc"], "hook": L["hook"],
            "vocabulary": L["v"], "study": {"title": t, "type": ty, "question": q, "passage": L["tx"], "source": L["src"], "steps": L["st"], "organizer": L["org"], "discussion": L["an"], "product": L["pr"]},
            "examples": L["ex"], "practice": L["p"], "misconceptions": L["mis"], "exitTicket": L["et"]},
        "test": {"title": f"Practice test: {title}", "items": L["mc"] + L["sa"]}}, []

allL, errs = {}, []
for f in sys.argv[2:]:
    o, e = parse_file(pathlib.Path(f)); allL.update(o); errs += e
outdir = REPO / "api/_lessons"; wrote = []
for (code, i), L in sorted(allL.items()):
    if code not in ROW: errs.append(f"unknown code {code}"); continue
    rec, e = build(L)
    if e: errs.append(f"{code}: " + "; ".join(e)); continue
    fp = outdir / f"{code}.json"
    cur = json.loads(fp.read_text()) if fp.exists() else {"code": code, "lessons": []}
    cur["lessons"] = sorted([l for l in cur["lessons"] if l["i"] != i] + [rec], key=lambda l: l["i"])
    fp.write_text(json.dumps(cur, ensure_ascii=False, separators=(",", ":")))
    wrote.append(f"{code}_{i}")
have = {p.stem for p in outdir.glob("*.json")}
order = [r[0] for r in rows if r[0] in have]
head = (outdir / "all.js").read_text().split("\n")[0]
(outdir / "all.js").write_text(head + "\nmodule.exports = {\n" + ",\n".join(f'  "{c}": require("./{c}.json")' for c in order) + "\n};\n")
nl = sum(len(json.loads((outdir / f"{c}.json").read_text())["lessons"]) for c in order)
print(f"wrote {len(wrote)}: {' '.join(wrote)}  | outcomes {len(order)}/{len(rows)} | lessons {nl}/{sum(len(r[3]) for r in rows)}")
for e in errs: print("ERR", e)
