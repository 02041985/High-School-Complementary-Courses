// Alberta senior high complementary (option) courses. Each course is one subject at one level (10, 20, 30).
// Programs of study: Art 10–20–30, Drama 10–20–30, General Music 10–20–30, Instrumental Music 10–20–30,
// Career and Technology Studies (CTS, introductory, intermediate and advanced levels), Social Sciences 20–30
// (General Psychology 20, Experimental Psychology 30, Sociology 20), French as a Second Language 10–20–30 (nine-year),
// and Spanish and Chinese Language and Culture 10–20–30 (nine-year). Outcomes are paraphrased; check the program
// of studies on alberta.ca for the full wording.
const SUBJECTS = {
  ART: {name:"Art", short:"Art", go:"A"},
  DR: {name:"Drama", short:"Drama", go:"D"},
  MU: {name:"General Music", short:"Music", go:"M"},
  IM: {name:"Instrumental Music", short:"Band", go:"I"},
  CTS: {name:"Career and Technology Studies", short:"CTS", go:"C"},
  PSY: {name:"Psychology", short:"Psychology", go:"P"},
  SOC: {name:"Sociology", short:"Sociology", go:"O"},
  FSL: {name:"French as a Second Language", short:"French", go:"F"},
  SPA: {name:"Spanish Language and Culture", short:"Spanish", go:"S"},
  CHI: {name:"Chinese (Mandarin) Language and Culture", short:"Mandarin", go:"Z"}
};
const COURSES = {
  ART10:{name:"Art 10", short:"Art 10", grade:10, subj:"ART", blurb:"Drawing from observation, the elements and principles of design, painting and colour theory, and responding to art from many cultures."},
  ART20:{name:"Art 20", short:"Art 20", grade:11, subj:"ART", blurb:"Exploring media in depth (printmaking, sculpture, digital art), art history movements, and developing a personal theme."},
  ART30:{name:"Art 30", short:"Art 30", grade:12, subj:"ART", blurb:"Independent studio work, contemporary and Canadian art, critique and a portfolio for exhibition or post-secondary application."},
  DR10:{name:"Drama 10", short:"Drama 10", grade:10, subj:"DR", blurb:"Ensemble skills, movement and voice, improvisation, character work and an introduction to technical theatre."},
  DR20:{name:"Drama 20", short:"Drama 20", grade:11, subj:"DR", blurb:"Scene study and script analysis, acting methods, directing basics, theatre history and production roles."},
  DR30:{name:"Drama 30", short:"Drama 30", grade:12, subj:"DR", blurb:"Advanced acting, directing a one-act, playwriting, design and production, and critical response to theatre."},
  MU10:{name:"General Music 10", short:"Music 10", grade:10, subj:"MU", blurb:"Music theory foundations, guitar or keyboard skills, listening across genres and creating with music technology."},
  MU20:{name:"General Music 20", short:"Music 20", grade:11, subj:"MU", blurb:"Harmony and chord progressions, music history from the Baroque to today, arranging and ensemble performance."},
  MU30:{name:"General Music 30", short:"Music 30", grade:12, subj:"MU", blurb:"Composition and songwriting, recording and production, music in society and the music industry, and a final project."},
  IM10:{name:"Instrumental Music 10", short:"Band 10", grade:10, subj:"IM", blurb:"Concert band or jazz band: tone, technique and scales, rhythm reading, ensemble skills and performance."},
  IM20:{name:"Instrumental Music 20", short:"Band 20", grade:11, subj:"IM", blurb:"Expanded range and keys, jazz styles and improvisation, intonation and balance, and leadership in sections."},
  IM30:{name:"Instrumental Music 30", short:"Band 30", grade:12, subj:"IM", blurb:"Advanced repertoire, interpretation and style, solo and small-ensemble work, and preparing auditions."},
  CTS10:{name:"CTS 10 (Introductory)", short:"CTS 10", grade:10, subj:"CTS", blurb:"Introductory CTS courses (1 credit each) in clusters such as foods, construction, computing and design: safety, skills and the design process."},
  CTS20:{name:"CTS 20 (Intermediate)", short:"CTS 20", grade:11, subj:"CTS", blurb:"Intermediate CTS courses: building on core skills, planning larger projects, quality standards and workplace practices."},
  CTS30:{name:"CTS 30 (Advanced)", short:"CTS 30", grade:12, subj:"CTS", blurb:"Advanced CTS courses: complex projects, client work, credentials and certifications, and pathways to post-secondary and careers."},
  PSY20:{name:"General Psychology 20", short:"Psychology 20", grade:11, subj:"PSY", blurb:"What psychology is, the brain and behaviour, sensation and perception, learning and memory, and personality."},
  PSY30:{name:"Experimental Psychology 30", short:"Psychology 30", grade:12, subj:"PSY", blurb:"Research methods and ethics, designing experiments, statistics, development, social psychology and mental health."},
  SOC20:{name:"Sociology 20", short:"Sociology 20", grade:11, subj:"SOC", blurb:"Culture and socialization, groups and institutions, deviance and social control, and social change."},
  FSL10:{name:"French 10-9Y", short:"French 10", grade:10, subj:"FSL", blurb:"Nine-year FSL program: daily life and relationships, past events, food and health, and francophone media."},
  FSL20:{name:"French 20-9Y", short:"French 20", grade:11, subj:"FSL", blurb:"Nine-year FSL program: travel and the francophone world, the environment, opinions and the future tense."},
  FSL30:{name:"French 30-9Y", short:"French 30", grade:12, subj:"FSL", blurb:"Nine-year FSL program: careers and education, social issues, literature and film, and the conditional."},
  SPA10:{name:"Spanish Language and Culture 10-9Y", short:"Spanish 10", grade:10, subj:"SPA", blurb:"Nine-year program: personal identity, school and leisure, narrating the past, and the Spanish-speaking world."},
  SPA20:{name:"Spanish Language and Culture 20-9Y", short:"Spanish 20", grade:11, subj:"SPA", blurb:"Nine-year program: travel and culture, health and well-being, media, and the imperfect and future tenses."},
  SPA30:{name:"Spanish Language and Culture 30-9Y", short:"Spanish 30", grade:12, subj:"SPA", blurb:"Nine-year program: global issues, work and the future, literature and the arts, and the subjunctive."},
  CHI10:{name:"Chinese Language and Culture 10-9Y", short:"Mandarin 10", grade:10, subj:"CHI", blurb:"Nine-year program: daily routines, school life, health and food culture, and reading short texts in characters."},
  CHI20:{name:"Chinese Language and Culture 20-9Y", short:"Mandarin 20", grade:11, subj:"CHI", blurb:"Nine-year program: travel and transportation, technology, festivals and traditions, and expressing opinions."},
  CHI30:{name:"Chinese Language and Culture 30-9Y", short:"Mandarin 30", grade:12, subj:"CHI", blurb:"Nine-year program: education and careers, environment and society, Chinese literature and idioms, and presentations."}
};
const GOS = {
  "A":"Art: drawings, compositions and encounters; making and responding to art.",
  "D":"Drama: orientation, movement, voice, acting, directing and theatre studies.",
  "M":"General Music: theory, listening, performing, creating and music in society.",
  "I":"Instrumental Music: tone and technique, rhythm, melody and harmony, style and ensemble performance.",
  "C":"Career and Technology Studies: core skills, safety, the design process, quality and career pathways.",
  "P":"Psychology: the science of behaviour and mental processes, research methods and application.",
  "O":"Sociology: how society, culture, groups and institutions shape people and change over time.",
  "F":"French as a Second Language: communication, language concepts, culture and language-learning strategies.",
  "S":"Spanish Language and Culture: applications, language competence, global citizenship and strategies.",
  "Z":"Chinese Language and Culture: applications, language competence, global citizenship and strategies."
};
const GOSHORT = {"A":"Art","D":"Drama","M":"General Music","I":"Instrumental Music","C":"CTS","P":"Psychology","O":"Sociology","F":"French","S":"Spanish","Z":"Mandarin"};
const POS = {
  "A.1":"Drawings (recording and investigating)","A.2":"Compositions (elements, principles and media)","A.3":"Encounters (art, culture and context)","A.4":"Personal expression and portfolio",
  "D.1":"Orientation and ensemble","D.2":"Movement","D.3":"Voice and speech","D.4":"Acting","D.5":"Directing and playwriting","D.6":"Technical theatre and design","D.7":"Theatre studies",
  "M.1":"Theory and notation","M.2":"Listening and analysis","M.3":"Performing","M.4":"Creating and composing","M.5":"Music technology","M.6":"Music in society",
  "I.1":"Tone and technique","I.2":"Rhythm and reading","I.3":"Melody, harmony and intonation","I.4":"Style and interpretation","I.5":"Ensemble skills","I.6":"Improvisation",
  "C.1":"Core skills and safety","C.2":"Design process","C.3":"Quality and standards","C.4":"Communication and teamwork","C.5":"Career and post-secondary pathways",
  "P.1":"Psychology as a science","P.2":"Biological bases of behaviour","P.3":"Cognition, learning and memory","P.4":"Research methods and ethics","P.5":"Development, personality and social behaviour","P.6":"Mental health",
  "O.1":"The sociological perspective","O.2":"Culture and socialization","O.3":"Groups and institutions","O.4":"Deviance and social change",
  "F.1":"Communication: comprehension","F.2":"Communication: production","F.3":"Communication: interaction","F.4":"Language concepts","F.5":"Culture","F.6":"Language-learning strategies",
  "S.1":"Applications","S.2":"Language competence","S.3":"Global citizenship","S.4":"Strategies",
  "Z.1":"Applications","Z.2":"Language competence","Z.3":"Global citizenship","Z.4":"Strategies"
};
const REF_BY_SUBJ = {
  ART:[["Elements of art","Line · shape · form · space · texture · value · colour"],["Principles of design","Balance · contrast · emphasis · movement · pattern · rhythm · unity · proportion"],["Colour schemes","Complementary · analogous · monochromatic · triadic · warm and cool"],["Critique steps","Describe → analyze → interpret → judge"]],
  DR:[["Stage areas","Upstage · downstage · stage left and stage right (the actor's, facing the audience) · centre stage"],["Stanislavski basics","Given circumstances · objective · obstacle · action · subtext"],["Voice","Projection · articulation · pace · pitch · pause · tone"],["Production roles","Director · stage manager · designers (set, lights, sound, costume) · crew"]],
  MU:[["Note values (4/4)","Whole = 4 · half = 2 · quarter = 1 · eighth = ½ · dotted quarter = 1½"],["Major scale pattern","W W H W W W H"],["Chords","Triad = root, 3rd, 5th · I, IV, V and vi are the most common chords in major keys"],["Song form","Intro · verse · pre-chorus · chorus · bridge · outro"]],
  IM:[["Concert scales","B♭ · E♭ · F · A♭ · C major (concert pitch) and the chromatic scale"],["Swing feel","Eighth notes played long-short, accents on beats 2 and 4"],["Dynamics and tempo","pp → ff · crescendo · decrescendo · largo · andante · moderato · allegro · presto"],["Rehearsal habits","Posture · breath support · watch the conductor · listen for balance and intonation"]],
  CTS:[["Design process","Investigate → plan → create → evaluate → communicate"],["CTS structure","1-credit courses at introductory (10), intermediate (20) and advanced (30) levels, grouped in clusters"],["Safety first","Teacher demonstration and sign-off · protective equipment · clean, clear work area · report hazards"],["Career clusters","Business, administration, finance and IT · health, recreation and human services · media, design and communication arts · natural resources · trades, manufacturing and transportation"]],
  PSY:[["Scientific method","Question → hypothesis → method → data → analysis → conclusion → share"],["Variables","Independent (changed) · dependent (measured) · controlled (kept the same)"],["Research ethics","Informed consent · right to withdraw · confidentiality · no harm · debriefing"],["Perspectives","Biological · behavioural · cognitive · humanistic · psychodynamic · sociocultural"]],
  SOC:[["Sociological imagination","Connecting personal experience to larger social forces"],["Agents of socialization","Family · peers · school · media · religion · workplace"],["Theories","Functionalism · conflict theory · symbolic interactionism · feminist perspectives"],["Research methods","Surveys · interviews · observation · content analysis"]],
  FSL:[["Passé composé","avoir/être + past participle: j'ai mangé · je suis allé(e)"],["Imparfait","Stem from nous form + -ais, -ais, -ait, -ions, -iez, -aient"],["Futur simple","Infinitive + -ai, -as, -a, -ons, -ez, -ont: je parlerai"],["Conditionnel","Future stem + imparfait endings: je voudrais, j'aimerais"]],
  SPA:[["Pretérito","hablé, hablaste, habló · comí, comiste, comió"],["Imperfecto","hablaba, hablabas, hablaba · comía, comías, comía"],["Futuro","Infinitive + -é, -ás, -á, -emos, -éis, -án: hablaré"],["Subjuntivo (presente)","Que yo hable, que tú comas · after ojalá, quiero que, es importante que"]],
  CHI:[["Aspect markers","了 le (completed) · 过 guo (experienced) · 着 zhe (ongoing state) · 在 zài (in progress)"],["Comparisons","A 比 B + adjective: 今天比昨天冷。"],["Complements","Result: 看完 kàn wán · degree: 说得很好 shuō de hěn hǎo"],["Connectors","因为…所以… yīnwèi…suǒyǐ… · 虽然…但是… suīrán…dànshì… · 如果…就… rúguǒ…jiù…"]]
};
const REF = {};
Object.keys(COURSES).forEach(k => { REF[k] = REF_BY_SUBJ[COURSES[k].subj]; });
const WSFORM_BY_SUBJ = {
  ART:{task:"A finished artwork with planning sketches and an artist statement", cats:"Skill and technique · Use of elements and principles · Concept and expression · Reflection and critique"},
  DR:{task:"A rehearsed scene, monologue or production task with a written reflection", cats:"Character and intention · Voice · Movement · Collaboration · Analysis"},
  MU:{task:"A performance, composition, arrangement or listening analysis", cats:"Accuracy · Musical understanding · Expression · Creativity · Analysis"},
  IM:{task:"A playing test (scales, excerpt or solo) or ensemble performance with self-assessment", cats:"Tone · Notes and rhythm · Technique · Style and expression · Ensemble skills"},
  CTS:{task:"A product, project or service created through the design process, with an evaluation", cats:"Planning · Skills and quality · Safety · Evaluation · Communication"},
  PSY:{task:"A research report, case analysis or experiment proposal", cats:"Understanding of concepts · Use of evidence · Research skills · Ethics · Communication"},
  SOC:{task:"A research report, analysis of a social issue or presentation", cats:"Understanding of concepts · Use of evidence · Sociological perspective · Communication"},
  FSL:{task:"An oral or written task in French, such as a discussion, presentation or composition", cats:"Comprehension · Production · Interaction · Accuracy · Cultural understanding"},
  SPA:{task:"An oral or written task in Spanish, such as a discussion, presentation or composition", cats:"Comprehension · Production · Interaction · Accuracy · Cultural understanding"},
  CHI:{task:"An oral or written task in Mandarin, in characters with pinyin as needed", cats:"Comprehension · Production (tones and characters) · Interaction · Accuracy · Cultural understanding"}
};
const WSFORM = {};
Object.keys(COURSES).forEach(k => { WSFORM[k] = WSFORM_BY_SUBJ[COURSES[k].subj]; });
const UNITS = {};
const SO_ROWS = [];
function addUnits(meta, kc){
  Object.entries(kc).forEach(([c, units]) => Object.entries(units).forEach(([L, k]) => {
    UNITS[`${c}.${L}`] = {title: meta[L][0], fq: meta[L][1], kc: k, mat: meta[L][2]};
  }));
}
