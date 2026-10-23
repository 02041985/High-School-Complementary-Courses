"""Build the High School Complementary Courses page (index.html) from the Middle School Complementary Courses page.
Same multi-subject engine; Art, Drama, Music, Band, CTS, Psychology, Sociology, French, Spanish and Mandarin, 10–20–30."""
import sys, pathlib
SRC = pathlib.Path("/home/claude/mscomp/index.html").read_text()
DATA = pathlib.Path("/home/claude/hscomp/data.js").read_text()
H = SRC

def R(old, new, n=1):
    global H
    c = H.count(old)
    if c != n: print("COUNT MISMATCH", c, "expected", n, "for:\n", old[:200]); sys.exit(1)
    H = H.replace(old, new)

# ---------- shell and colours (deep teal-blue) ----------
R('<div class="logo"><div class="mark">7·9</div><div><b>Middle School Complementary</b><span>Alberta Curriculum</span></div></div>',
  '<div class="logo"><div class="mark">10·12</div><div><b>High School Complementary</b><span>Alberta Curriculum</span></div></div>', 2)
R("<div>Arts · CTF · Outdoor Ed · Ethics<br>French · Spanish · Mandarin</div>", "<div>Arts · CTS · Psychology · Sociology<br>French · Spanish · Mandarin</div>")
R("<title>Middle School Complementary Courses - Alberta Curriculum</title>", "<title>High School Complementary Courses - Alberta Curriculum</title>")
R("--bg:#efe6f3;", "--bg:#f5e9e1;")
R("--accent:#8a3b9c; --accent-ink:#ffffff; --accent-soft:#f3e4f6; --accent-2:#64296f;", "--accent:#b0482b; --accent-ink:#ffffff; --accent-soft:#f8e6df; --accent-2:#80321d;")
R("--side:#2a1530;", "--side:#2e1a12;")
R("--accent:#d39ae0; --accent-ink:#1e0a23; --accent-soft:#36203d; --accent-2:#e7c3ee;", "--accent:#f0a385; --accent-ink:#260d05; --accent-soft:#3d2219; --accent-2:#f6c6b2;", 2)
i = H.index(":root{--bg-glow1:rgba(205,160,225,.46)"); j = H.index("}", i) + 1
H = H[:i] + ":root{--bg-glow1:rgba(235,170,140,.44);--bg-glow2:rgba(245,215,160,.38);--bg-glow3:rgba(235,210,200,.42);--bg-glow4:rgba(185,205,235,.30);--hero1:#ffffff;--hero2:#ffffff;--hero3:#fbf3ee}" + H[j:]

# ---------- data block ----------
start = H.index("// Alberta junior high complementary (optional) courses")
end = H.index("const SOS = SO_ROWS.map")
H = H[:start] + DATA.rstrip() + "\n" + H[end:]

# ---------- state defaults and pickers ----------
R('curGrade: "ART7", curSel: "ART7.A1"', 'curGrade: "ART10", curSel: "ART10.A1"')
R('plan: {grade:"ART7", sos:["ART7.A1","ART7.B1"]', 'plan: {grade:"ART10", sos:["ART10.A1","ART10.B1"]')
R('lesson: {code:"ART7.A1", i:0}', 'lesson: {code:"ART10.A1", i:0}')
R("[7,8,9].map(gr =>", "[10,11,12].map(gr =>")
R('S.tb = {course:"ART7"', 'S.tb = {course:"ART10"')
R('courseOpts("ART7")', 'courseOpts("ART10")')
H = H.replace('courseOpts(S.newAssess ? SO[S.newAssess.sos[0]]?.grade : "ART7")', 'courseOpts(S.newAssess ? SO[S.newAssess.sos[0]]?.grade : "ART10")')
H = H.replace('placeholder="e.g. Art 8 Block C"', 'placeholder="e.g. Art 20 Block C"')
R('name:"Art 7 example class", grade:"ART7"', 'name:"Art 10 example class", grade:"ART10"')
R('weak = {3:"ART7.B1",5:"ART7.C1",7:"ART7.A1",8:"ART7.B1",10:"ART7.C1"}', 'weak = {3:"ART10.B1",5:"ART10.C1",7:"ART10.A1",8:"ART10.B1",10:"ART10.C1"}')
R("""    mk("Artwork critique (example)","2026-09-15","Written response",["ART7.A1"]),
    mk("Natural forms drawing (example)","2026-09-24","Performance task",["ART7.B1"]),
    mk("Colour wheel check-in (example)","2026-10-06","Quiz",["ART7.C1"]),
    mk("Term 1 portfolio check (example)","2026-10-14","Unit test",["ART7.A1","ART7.B1","ART7.C1"])""",
  """    mk("Observational drawing (example)","2026-09-15","Performance task",["ART10.A1"]),
    mk("Colour scheme painting (example)","2026-09-24","Performance task",["ART10.B1"]),
    mk("Artwork critique (example)","2026-10-06","Written response",["ART10.C1"]),
    mk("Term 1 portfolio check (example)","2026-10-14","Unit test",["ART10.A1","ART10.B1","ART10.C1"])""")

# ---------- lesson-writing prompt ----------
R("You are an experienced Alberta junior high ${SUBJ(so).name} teacher writing classroom materials.",
  "You are an experienced Alberta senior high ${SUBJ(so).name} teacher writing classroom materials.")
R("Alberta ${SUBJ(so).name} program of studies, a junior high complementary course", "Alberta ${SUBJ(so).name} program of studies, a senior high option course")
R("(about 12 to 15 years old): clear, engaging and practical.", "(about 15 to 18 years old): rigorous, engaging and practical.")
R("This is a beginner second-language course: give target-language words and sentences with English meanings, keep the language at this grade's level,",
  "This is a nine-year second-language program at the senior high level: use mostly target-language text with English support for new vocabulary and grammar, keep the language at this level,")
R('"type":"Studio, Performance, Rehearsal, Listening, Design challenge, Field activity, Case study, Dialogue or Discussion"',
  '"type":"Studio, Performance, Rehearsal, Listening, Design challenge, Lab or shop task, Experiment, Case study, Dialogue or Discussion"')
R("a design brief for CTF, a field task for Outdoor Ed, a case or dilemma for Ethics,", "a design brief or shop task for CTS, a study, experiment or case for Psychology or Sociology,")
R("a learning activity (a studio task, scene, listening or playing task, design challenge, field activity, dilemma or dialogue)",
  "a learning activity (a studio task, scene, listening or playing task, design challenge, experiment, case study or dialogue)")
R("For hands-on, studio, kitchen, shop or outdoor work, include clear safety steps.",
  "For hands-on, studio, kitchen or shop work, include clear safety steps. For psychology and sociology, use accurate research, describe studies fairly and use respectful, non-stigmatizing language about mental health.")

pathlib.Path("/home/claude/hscomp/index.html").write_text(H)
for w in ["Middle School", "7·9", "junior high", "\"ART7", "CTF", "Outdoor Ed", "Ethics", "12 to 15"]:
    hits = [(i + 1, l.strip()[:150]) for i, l in enumerate(H.split("\n")) if w in l]
    if hits: print(w, len(hits)); [print("   ", h) for h in hits[:4]]
print("OK", len(H))
