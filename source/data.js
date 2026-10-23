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
// ---------- Art 10–20–30 ----------
addUnits({
  A:["Drawings",["How does drawing help me see and record?","How do I develop observation and technique?"],"graphite and charcoal, sketchbooks, still-life and figure references, viewfinders"],
  B:["Compositions",["How do artists organize visual elements?","How do media and technique shape meaning?"],"acrylic and watercolour paint, printmaking supplies, clay, digital tools"],
  C:["Encounters",["How does art reflect culture and history?","How do I respond critically to art?"],"images from galleries (including Canadian and Indigenous artists), art history texts, critique guides"],
  D:["Personal Expression and Portfolio",["What do I want to say through art?","How do I present my work?"],"sketchbooks, mixed media, portfolio folders or digital portfolios, artist statements"]
},{
  ART10:{A:["contour and gesture","value and shading","observational drawing"],B:["colour theory","painting techniques","principles of design"],C:["describe, analyze, interpret, judge","art from many cultures"],D:["sketchbook practice","artist statement"]},
  ART20:{A:["perspective","figure drawing","expressive drawing"],B:["printmaking","sculpture","digital art"],C:["art movements","Impressionism to Modernism"],D:["personal theme","series"]},
  ART30:{A:["independent drawing practice","mixed-media drawing"],B:["advanced media","installation","concept development"],C:["contemporary art","Canadian and Indigenous artists"],D:["portfolio","exhibition","post-secondary applications"]}
});
SO_ROWS.push(
["ART10.A1","Observational drawing","Record and investigate forms from observation using line, value and proportion.",["Draw with contour and gesture","Measure proportion by sight","Render form with value"],["How does drawing help me really see?","How do artists make flat drawings look 3-D?"],["contour","gesture","sighting","proportion","value scale","rendering"],["A.1"]],
["ART10.B1","Colour theory and painting","Apply colour theory and painting techniques in a composition using principles of design.",["Mix colours and build a value scale in paint","Use colour schemes","Paint a composition using design principles"],["How do colours interact?","How do artists use colour to create mood?"],["hue","tint","shade","complementary","analogous","composition"],["A.2"]],
["ART10.C1","Responding to art","Analyze and interpret artworks from many cultures using a critique process.",["Use the four-step critique","Compare art across cultures","Write a critical response"],["How do I understand art from other cultures?","What makes art meaningful?"],["critique","context","culture","interpretation","symbolism","aesthetic"],["A.3"]],
["ART10.D1","Sketchbook and expression","Develop ideas in a sketchbook and create an expressive artwork with an artist statement.",["Develop ideas in a sketchbook","Create an expressive artwork","Write an artist statement"],["Where do artists get ideas?","How do I explain my work?"],["sketchbook","ideation","expression","concept","artist statement","reflection"],["A.4"]],
["ART20.A1","Perspective and the figure","Use perspective and figure-drawing techniques to depict space and the human form.",["Draw in two-point perspective","Draw the figure with gesture and proportion","Combine figures and space in a drawing"],["How do artists show space convincingly?","How do I draw people with energy and accuracy?"],["two-point perspective","vanishing point","gesture","proportion","foreshortening","contrapposto"],["A.1"]],
["ART20.B1","Printmaking, sculpture and digital media","Explore printmaking, sculpture and digital media and how each shapes an artwork.",["Create a relief or monoprint","Build a sculpture","Create a digital artwork"],["How does the medium change the message?","Why do artists choose certain materials?"],["relief print","edition","additive sculpture","subtractive sculpture","digital layers","medium"],["A.2"]],
["ART20.C1","Art movements","Analyze major art movements and how they responded to their times.",["Analyze Impressionism and Post-Impressionism","Analyze Cubism and Expressionism","Create a work inspired by a movement"],["Why do art styles change?","How do artists respond to their world?"],["movement","Impressionism","Cubism","Expressionism","Modernism","context"],["A.3"]],
["ART20.D1","Developing a personal theme","Develop a series of related works around a personal theme.",["Choose and research a theme","Plan a series of works","Create and reflect on a series"],["What ideas matter to me?","How do artists build a body of work?"],["theme","series","visual research","iteration","cohesion","reflection"],["A.4"]],
["ART30.A1","Independent drawing practice","Develop an independent drawing practice that explores mixed media and expressive mark-making.",["Set goals for an independent drawing practice","Explore mixed-media drawing","Assess growth in a drawing series"],["How do I direct my own practice?","How has my drawing developed?"],["independent practice","mark-making","mixed media","experimentation","self-assessment","growth"],["A.1"]],
["ART30.B1","Concept and advanced media","Develop a concept and realize it with advanced media, including installation or digital work.",["Develop a concept","Choose and master an advanced medium","Realize a concept-driven work"],["How does an idea become an artwork?","How does contemporary art push boundaries?"],["concept","installation","site-specific","conceptual art","mixed media","technique"],["A.2"]],
["ART30.C1","Contemporary and Canadian art","Analyze contemporary Canadian and Indigenous art and the issues it explores.",["Analyze contemporary art practices","Study contemporary Indigenous artists","Write a critical essay"],["What does art say about today?","How do Indigenous artists shape Canadian art?"],["contemporary","Indigenous art","identity","critique","curator","issue"],["A.3"]],
["ART30.D1","Portfolio and exhibition","Curate a portfolio and exhibit work with artist statements.",["Select and curate a portfolio","Write artist statements","Plan and install an exhibition"],["How do I present my best work?","What does a portfolio need for post-secondary?"],["portfolio","curate","exhibition","artist statement","documentation","presentation"],["A.4"]]
);
// ---------- Drama 10–20–30 ----------
addUnits({
  A:["Ensemble, Movement and Voice",["How do actors prepare body and voice?","How does an ensemble work?"],"open floor space, warm-up routines, scripts for voice work"],
  B:["Acting",["How do I build a truthful character?","How do actors make choices?"],"scripts and monologues (public domain or licensed), character worksheets"],
  C:["Directing and Playwriting",["How do directors shape a production?","How do playwrights build a story?"],"short scripts, blocking sheets, playwriting templates"],
  D:["Theatre Studies and Production",["How has theatre changed over time?","How do design and production support a story?"],"theatre history texts, lighting and sound equipment, design sketches"]
},{
  DR10:{A:["ensemble","physical warm-up","vocal warm-up"],B:["improvisation","character basics","objectives"],C:["staging basics","short scenes"],D:["technical theatre basics","theatre etiquette"]},
  DR20:{A:["physical theatre","voice and text"],B:["Stanislavski","scene study","subtext"],C:["directing a scene","blocking"],D:["theatre history: Greek to Elizabethan","production roles"]},
  DR30:{A:["advanced movement","vocal range"],B:["acting styles","monologue and audition"],C:["directing a one-act","playwriting"],D:["design concepts","theatre criticism"]}
});
SO_ROWS.push(
["DR10.A1","Ensemble, body and voice","Build ensemble trust and prepare the body and voice for performance.",["Lead physical and vocal warm-ups","Build ensemble trust and focus","Use breath, projection and articulation"],["Why do actors warm up?","How does an ensemble support each performer?"],["ensemble","warm-up","projection","articulation","resonance","focus"],["D.1","D.2","D.3"]],
["DR10.B1","Improvisation and character","Use improvisation to develop characters with clear objectives.",["Accept and build offers","Create a character with an objective","Sustain a character in a scene"],["What makes improvisation work?","What does my character want?"],["improvisation","offer","objective","obstacle","status","commitment"],["D.4"]],
["DR10.C1","Staging short scenes","Stage a short scene using basic blocking and stage directions.",["Use stage areas and directions","Block a short scene","Rehearse and present a scene"],["How do actors move on stage?","How does staging tell a story?"],["blocking","upstage","downstage","stage left","cheat out","sightline"],["D.5"]],
["DR10.D1","Introduction to technical theatre","Describe technical theatre roles and use basic lighting and sound.",["Identify production roles","Operate basic lighting and sound","Run a technical rehearsal"],["Who makes a show happen?","How do lights and sound support a scene?"],["stage manager","cue","lighting","sound","crew","technical rehearsal"],["D.6"]],
["DR20.A1","Physical theatre and text","Use physical theatre and voice to interpret text.",["Create physical theatre images","Explore text through voice","Combine movement and text"],["How can bodies tell stories?","How does voice reveal meaning in text?"],["physical theatre","tableau","choral speech","stress","inflection","text"],["D.2","D.3"]],
["DR20.B1","Stanislavski and scene study","Apply Stanislavski's system to develop a scene with subtext.",["Analyze given circumstances","Find objectives and subtext","Perform a scene truthfully"],["What makes acting truthful?","What is a character not saying?"],["Stanislavski","given circumstances","objective","subtext","beat","magic if"],["D.4"]],
["DR20.C1","Directing a scene","Direct peers in a scene, making choices about blocking, pace and meaning.",["Analyze a scene as a director","Block and rehearse actors","Give clear direction"],["What does a director do?","How do I communicate a vision?"],["director","vision","blocking","pace","note","rehearsal"],["D.5"]],
["DR20.D1","Theatre history: Greek to Elizabethan","Examine Greek, medieval and Elizabethan theatre and their influence.",["Explore Greek theatre","Explore Elizabethan theatre","Perform in a historical style"],["How did theatre begin?","How does old theatre influence modern plays?"],["Greek chorus","tragedy","comedy","Globe Theatre","soliloquy","convention"],["D.7"]],
["DR30.A1","Advanced movement and voice","Extend physical and vocal range for demanding roles.",["Develop physical character work","Extend vocal range and control","Apply movement and voice to a role"],["How do actors transform physically?","How do I keep my voice healthy and flexible?"],["physicality","Laban efforts","vocal range","breath control","dialect","transformation"],["D.2","D.3"]],
["DR30.B1","Acting styles and auditions","Compare acting styles and prepare an audition monologue.",["Compare realism and non-realism","Prepare a contrasting monologue","Audition with confidence"],["How do acting styles differ?","How do I prepare a strong audition?"],["realism","Brechtian","absurdism","monologue","audition","slate"],["D.4"]],
["DR30.C1","Directing and playwriting","Write or direct an original one-act play.",["Develop a play idea","Write or adapt a one-act","Direct the one-act"],["How do playwrights structure a story?","How do I lead a production?"],["playwright","structure","conflict","climax","one-act","production meeting"],["D.5"]],
["DR30.D1","Design and theatre criticism","Develop a design concept and write theatre criticism.",["Create a design concept","Present set, lighting or costume designs","Write a theatre review"],["How does design create meaning?","How do critics judge theatre?"],["design concept","rendering","colour palette","review","criticism","production values"],["D.6","D.7"]]
);
// ---------- General Music 10–20–30 ----------
addUnits({
  A:["Theory and Notation",["How is music written and organized?","How do theory concepts help me play and create?"],"staff paper, keyboards, theory apps"],
  B:["Listening and History",["How has music changed over time?","How does music reflect culture?"],"recordings across eras and genres, including Canadian and Indigenous musicians, listening guides"],
  C:["Performing",["How do I perform with skill and expression?","How do I work in an ensemble?"],"guitars, keyboards, ukuleles, percussion, vocal warm-ups"],
  D:["Creating and Technology",["How do I compose and arrange music?","How has technology changed music-making?"],"digital audio workstations, microphones, notation software"]
},{
  MU10:{A:["note values","treble and bass clef","major scales"],B:["genres","elements of music"],C:["guitar or keyboard chords","ensemble playing"],D:["loops and beats","digital audio workstation basics"]},
  MU20:{A:["chord progressions","minor keys","intervals"],B:["Baroque to Romantic","20th-century music"],C:["arranging for an ensemble","performing"],D:["arranging","MIDI"]},
  MU30:{A:["harmonic analysis","form"],B:["music in society","the music industry"],C:["solo and ensemble performance"],D:["songwriting","recording and mixing"]}
});
SO_ROWS.push(
["MU10.A1","Reading music","Read and write rhythms and pitches in treble and bass clef and build major scales.",["Read rhythms in simple time","Read pitches in treble and bass clef","Build major scales"],["How is music written down?","Why learn to read music?"],["staff","clef","note value","time signature","major scale","key signature"],["M.1"]],
["MU10.B1","Elements and genres","Describe music using its elements and compare genres.",["Identify the elements of music","Compare genres","Analyze a song's elements"],["What makes genres sound different?","How do I describe what I hear?"],["melody","harmony","rhythm","timbre","texture","genre"],["M.2"]],
["MU10.C1","Chords and ensemble playing","Play chords on guitar or keyboard and perform in a small ensemble.",["Play basic chords","Change chords in time","Perform a song in an ensemble"],["How do chords support a song?","How do musicians stay together?"],["chord","strum pattern","progression","tempo","ensemble","cue"],["M.3"]],
["MU10.D1","Beats and digital audio","Create a short track using loops and a digital audio workstation.",["Explore a digital audio workstation","Build a beat with loops","Arrange and export a short track"],["How is music made digitally?","What makes a track interesting?"],["DAW","loop","track","tempo","arrangement","export"],["M.4","M.5"]],
["MU20.A1","Harmony and progressions","Analyze intervals, minor keys and chord progressions.",["Identify intervals","Compare major and minor keys","Analyze chord progressions"],["Why do some chords sound happy or sad?","Why do songs share progressions?"],["interval","minor key","relative minor","Roman numerals","cadence","progression"],["M.1"]],
["MU20.B1","Music history","Trace Western music history from the Baroque era to the 20th century and connect it to today.",["Describe Baroque and Classical music","Describe Romantic and 20th-century music","Connect historical styles to modern music"],["How has music changed over time?","How do older styles influence today's music?"],["Baroque","Classical","Romantic","20th century","composer","style period"],["M.2","M.6"]],
["MU20.C1","Arranging and performing","Arrange a song for an ensemble and perform it.",["Choose parts for an arrangement","Write and rehearse an arrangement","Perform the arrangement"],["What does an arranger do?","How do parts fit together?"],["arrangement","melody line","accompaniment","bass line","voicing","rehearsal"],["M.3","M.4"]],
["MU20.D1","MIDI and production","Use MIDI and virtual instruments to produce an arrangement.",["Record MIDI parts","Edit with quantize and velocity","Mix a MIDI arrangement"],["How does MIDI work?","How do producers shape a sound?"],["MIDI","virtual instrument","quantize","velocity","mix","panning"],["M.5"]],
["MU30.A1","Harmonic analysis and form","Analyze harmony and form in a range of pieces.",["Analyze harmony with Roman numerals","Identify musical forms","Analyze a full song or piece"],["How is a piece built?","What makes a structure effective?"],["harmonic analysis","form","sonata","verse-chorus","modulation","motif"],["M.1","M.2"]],
["MU30.B1","Music and society","Analyze the role of music in society and the music industry, including Canadian content.",["Analyze music's role in social movements","Explore the music industry and careers","Examine Canadian content rules"],["How does music shape society?","How does the music industry work?"],["Canadian content","royalty","streaming","copyright","protest song","industry"],["M.6"]],
["MU30.C1","Performance project","Prepare and perform a solo or ensemble piece with expression.",["Choose and prepare repertoire","Rehearse with goals","Perform and self-assess"],["How do I prepare a performance?","How do I judge my own performance?"],["repertoire","interpretation","stage presence","practice plan","self-assessment","performance"],["M.3"]],
["MU30.D1","Songwriting and recording","Write, record and mix an original song.",["Write lyrics and melody","Record tracks","Mix and master a song"],["How do songwriters craft a song?","How is a professional recording made?"],["hook","lyrics","tracking","mixing","mastering","EQ"],["M.4","M.5"]]
);
// ---------- Instrumental Music 10–20–30 ----------
addUnits({
  A:["Tone and Technique",["How do I improve my sound and technique?","How do I practise effectively?"],"band instruments, tuner, metronome, method and technique books"],
  B:["Reading and Rhythm",["How do I read complex music?","How do I sight-read with confidence?"],"sight-reading books, rhythm sheets"],
  C:["Ensemble, Style and Jazz",["How does an ensemble achieve balance and blend?","How do styles change how I play?"],"concert and jazz band repertoire, recordings of professional ensembles"],
  D:["Interpretation and Performance",["How do I perform with expression?","How do I prepare for auditions and concerts?"],"solo repertoire, audition excerpts, recording devices"]
},{
  IM10:{A:["breath support","scales","articulation"],B:["syncopation","sight-reading"],C:["balance and blend","swing basics"],D:["dynamics and phrasing","concert performance"]},
  IM20:{A:["extended range","advanced scales"],B:["compound and mixed metres"],C:["jazz styles","improvisation basics"],D:["section leadership","small ensembles"]},
  IM30:{A:["advanced technique","tone colour"],B:["advanced sight-reading"],C:["advanced repertoire","improvisation"],D:["interpretation","solo and audition preparation"]}
});
SO_ROWS.push(
["IM10.A1","Tone, scales and articulation","Produce a characteristic tone and play concert scales with varied articulation.",["Improve tone with breath support","Play concert scales","Use varied articulations"],["What makes a good tone?","Why are scales the foundation of technique?"],["tone","breath support","concert scale","legato","staccato","accent"],["I.1"]],
["IM10.B1","Syncopation and sight-reading","Read syncopated rhythms and use a sight-reading routine.",["Count syncopated rhythms","Use a sight-reading checklist","Sight-read in the ensemble"],["How do I read tricky rhythms?","How do I play new music well the first time?"],["syncopation","tie","sight-reading","key signature","road map","subdivision"],["I.2"]],
["IM10.C1","Balance, blend and swing","Balance and blend with the ensemble and play with a basic swing feel.",["Balance within the ensemble pyramid","Blend with my section","Play swing eighth notes"],["How does a band sound like one instrument?","How is swing different from straight time?"],["balance","blend","ensemble pyramid","swing","straight eighths","intonation"],["I.3","I.5","I.4"]],
["IM10.D1","Phrasing and performance","Shape phrases with dynamics and perform in concert.",["Shape phrases with dynamics","Mark breaths and phrasing","Perform in concert"],["How do musicians make a phrase sing?","How do I perform under pressure?"],["phrase","dynamics","breath mark","rubato","stage presence","concert etiquette"],["I.4"]],
["IM20.A1","Extended range and advanced scales","Extend range and play advanced scales with control.",["Extend my upper and lower range","Play major scales in more keys","Play the chromatic scale fluently"],["How do I extend my range safely?","Why practise many keys?"],["range","flexibility","chromatic scale","key","lip slurs","finger technique"],["I.1"]],
["IM20.B1","Compound and mixed metres","Read and perform music in compound and mixed metres.",["Count 6/8 and 9/8","Perform mixed metres","Sight-read in compound metre"],["How is compound metre felt?","How do musicians handle changing metres?"],["compound metre","6/8","mixed metre","5/4","dotted quarter beat","conducting pattern"],["I.2"]],
["IM20.C1","Jazz styles and improvisation","Play in jazz styles and begin improvising with a blues scale.",["Play in swing, Latin and rock styles","Learn the blues scale","Improvise over a 12-bar blues"],["What makes jazz jazz?","How do musicians improvise?"],["swing","Latin","12-bar blues","blues scale","improvisation","comping"],["I.4","I.6"]],
["IM20.D1","Leadership and small ensembles","Lead a section and perform in a small ensemble.",["Lead a sectional rehearsal","Rehearse a small ensemble","Perform with independence"],["What makes a good section leader?","How do small groups rehearse?"],["section leader","sectional","chamber ensemble","cue","rehearsal plan","independence"],["I.5"]],
["IM30.A1","Advanced technique and tone colour","Refine advanced technique and vary tone colour for expression.",["Refine technical passages","Vary tone colour","Use efficient practice strategies"],["How do professionals practise?","How can tone colour express emotion?"],["tone colour","vibrato","technical passage","slow practice","chunking","efficiency"],["I.1"]],
["IM30.B1","Advanced sight-reading","Sight-read complex music accurately.",["Scan for key, metre and road map","Read complex rhythms at sight","Recover from mistakes while reading"],["How do professionals read so quickly?","How do I keep going after a mistake?"],["scan","road map","D.S. al coda","complex rhythm","pattern recognition","recovery"],["I.2"]],
["IM30.C1","Advanced repertoire","Perform advanced concert and jazz repertoire with stylistic accuracy.",["Research a work's style and history","Prepare advanced repertoire","Perform with stylistic accuracy"],["How does knowing a piece's history change how I play it?","What makes a performance stylistically accurate?"],["repertoire","style","programme note","period","articulation","ensemble"],["I.4","I.5"]],
["IM30.D1","Interpretation and auditions","Interpret a solo with expression and prepare for auditions.",["Make interpretive choices in a solo","Prepare audition excerpts and scales","Perform a mock audition"],["How do I make a piece my own?","How do I prepare for a post-secondary or honour band audition?"],["interpretation","solo","audition","excerpt","performance anxiety","self-assessment"],["I.4"]]
);
// ---------- Career and Technology Studies (CTS) ----------
// CTS courses are 1-credit courses at introductory (10), intermediate (20) and advanced (30) levels in clusters
// such as foods, construction, computing science, design and communication. Outcomes here are the shared CTS
// expectations; teachers pair them with the specific CTS courses their school offers.
addUnits({
  A:["Core Skills and Safety",["How do I work safely and skilfully?","What tools and techniques does this area use?"],"area-specific tools and materials, safety checklists, demonstration videos"],
  B:["Design and Production",["How do I plan and make a quality product?","How do I solve problems during production?"],"design briefs, planning templates, materials and equipment"],
  C:["Quality and Evaluation",["How do I know my work meets the standard?","How do I improve it?"],"rubrics, industry standards, testing equipment, peer-review forms"],
  D:["Careers and Pathways",["Where can these skills take me?","What credentials and programs lead there?"],"alis.alberta.ca, Registered Apprenticeship Program (RAP) information, post-secondary program pages, guest speakers"]
},{
  CTS10:{A:["lab and shop safety","basic tools and techniques"],B:["following a plan","basic project"],C:["criteria","self-evaluation"],D:["career clusters","CTS pathways"]},
  CTS20:{A:["intermediate techniques","equipment maintenance"],B:["designing a project","time and cost planning"],C:["quality standards","peer review"],D:["workplace skills","RAP and work experience"]},
  CTS30:{A:["advanced techniques","industry practices"],B:["client project","complex production"],C:["industry standards","portfolio"],D:["credentials and certifications","post-secondary pathways"]}
});
SO_ROWS.push(
["CTS10.A1","Safety and core skills","Work safely in a CTS lab or shop and use basic tools and techniques correctly.",["Identify hazards and follow safety procedures","Use basic tools and techniques","Keep a clean, organized workspace"],["Why is safety the first skill?","How do I use tools correctly?"],["hazard","personal protective equipment","safety data sheet","technique","sign-off","workspace"],["C.1"]],
["CTS10.B1","Completing a first project","Follow a plan to complete a basic project in a CTS area.",["Read and follow a project plan","Measure and prepare materials","Complete a basic project"],["How do plans help me work efficiently?","What makes a project successful?"],["project plan","materials list","measurement","procedure","tolerance","finish"],["C.2"]],
["CTS10.C1","Evaluating my work","Evaluate a product against criteria and plan improvements.",["Use criteria to evaluate work","Give and receive feedback","Plan improvements"],["How do I know if my work is good?","How does feedback help?"],["criteria","rubric","self-evaluation","feedback","quality","improvement"],["C.3"]],
["CTS10.D1","Exploring CTS pathways","Explore career clusters and CTS course pathways.",["Explore the CTS clusters","Connect courses to careers","Plan my CTS pathway"],["Which careers use CTS skills?","Which CTS courses should I take?"],["cluster","pathway","credit","occupation","prerequisite","interest"],["C.5"]],
["CTS20.A1","Intermediate techniques","Apply intermediate techniques and maintain equipment.",["Learn intermediate techniques","Maintain tools and equipment","Troubleshoot problems"],["How do skills build on each other?","Why does equipment maintenance matter?"],["technique","maintenance","calibration","troubleshoot","efficiency","precision"],["C.1"]],
["CTS20.B1","Designing a project","Design a project, planning time, materials and cost.",["Write a design brief","Plan time, materials and cost","Build and adjust the project"],["How do designers balance quality, time and cost?","How do I adapt when plans change?"],["design brief","budget","timeline","constraint","prototype","iteration"],["C.2"]],
["CTS20.C1","Quality standards and peer review","Apply quality standards and use peer review to improve work.",["Compare work to quality standards","Conduct a peer review","Revise to meet the standard"],["Who sets quality standards?","How can peers help me improve?"],["standard","specification","peer review","inspection","defect","revision"],["C.3","C.4"]],
["CTS20.D1","Workplace skills and RAP","Describe workplace skills and options such as the Registered Apprenticeship Program and work experience.",["Identify employability skills","Explore RAP and work experience","Prepare a résumé for a CTS area"],["What do employers look for?","How can I start a career in high school?"],["employability skills","Registered Apprenticeship Program","work experience","journeyperson","résumé","reference"],["C.5","C.4"]],
["CTS30.A1","Advanced techniques and industry practice","Apply advanced techniques and industry practices.",["Use advanced techniques","Follow industry practices","Mentor a newer student"],["How do professionals work?","How can I share my skills?"],["advanced technique","industry practice","workflow","mentor","specialization","efficiency"],["C.1","C.4"]],
["CTS30.B1","Client project","Plan and complete a project for a real or simulated client.",["Interview a client and set requirements","Plan and produce the project","Present to the client"],["How do I meet a client's needs?","How do I manage a complex project?"],["client","requirements","proposal","deadline","deliverable","presentation"],["C.2","C.4"]],
["CTS30.C1","Industry standards and portfolio","Evaluate work against industry standards and build a portfolio.",["Compare work to industry standards","Document work for a portfolio","Reflect on growth"],["Is my work industry-ready?","How do I show what I can do?"],["industry standard","portfolio","documentation","reflection","benchmark","quality assurance"],["C.3"]],
["CTS30.D1","Credentials and post-secondary pathways","Research credentials, certifications and post-secondary programs in a CTS area.",["Research certifications in my area","Compare post-secondary programs","Write a career action plan"],["What credentials do I need?","Which program fits my goals?"],["certification","credential","diploma","degree","apprenticeship","career action plan"],["C.5"]]
);
// ---------- Psychology and Sociology ----------
addUnits({
  A:["Psychology as a Science",["What is psychology?","How do psychologists study behaviour?"],"textbook and authorized resources, case studies, demonstration activities"],
  B:["Brain, Senses and Mind",["How does the brain shape behaviour?","How do we perceive and remember?"],"brain models and diagrams, perception demonstrations, memory tasks"],
  C:["Learning, Development and Personality",["How do people learn and develop?","What shapes personality?"],"case studies, classroom experiments, personality frameworks"],
  D:["Social Behaviour and Mental Health",["How do others influence us?","How can we understand and support mental health?"],"case studies, Alberta Health Services and Kids Help Phone resources"]
},{
  PSY20:{A:["perspectives","scientific method"],B:["neurons and the brain","sensation and perception"],C:["classical and operant conditioning","memory"],D:["personality","stress and coping"]},
  PSY30:{A:["research methods","ethics in research"],B:["designing experiments","statistics"],C:["developmental psychology","cognitive development"],D:["social psychology","mental health literacy"]}
});
addUnits({
  A:["The Sociological Perspective",["What is sociology?","How do social forces shape our lives?"],"textbook and authorized resources, current events, data from Statistics Canada"],
  B:["Culture and Socialization",["What is culture?","How do we learn to be members of society?"],"case studies, media samples, cultural artifacts"],
  C:["Groups and Institutions",["How do groups and institutions work?","How do they shape people?"],"case studies, organizational charts, news articles"],
  D:["Deviance and Social Change",["Who decides what is normal?","How do societies change?"],"case studies, social movement histories, data sets"]
},{
  SOC20:{A:["sociological imagination","theories"],B:["norms and values","agents of socialization"],C:["groups","family, education and media as institutions"],D:["deviance","social movements","social change"]}
});
SO_ROWS.push(
["PSY20.A1","Psychology as a science","Explain what psychology is, its major perspectives and how it uses the scientific method.",["Define psychology and its perspectives","Apply the scientific method to behaviour","Distinguish science from pop psychology"],["What is psychology?","How is psychology a science?"],["psychology","behaviour","perspective","hypothesis","empirical","pseudoscience"],["P.1","P.4"]],
["PSY20.B1","The brain, sensation and perception","Describe how the nervous system works and how we sense and perceive the world.",["Explain neurons and brain structures","Distinguish sensation and perception","Analyze perceptual illusions"],["How does the brain create experience?","Why do our senses sometimes fool us?"],["neuron","synapse","cerebral cortex","sensation","perception","illusion"],["P.2","P.3"]],
["PSY20.C1","Learning and memory","Explain classical and operant conditioning and how memory works.",["Explain classical conditioning","Explain operant conditioning","Describe how memory is encoded, stored and retrieved"],["How do we learn?","Why do we forget?"],["classical conditioning","operant conditioning","reinforcement","encoding","short-term memory","long-term memory"],["P.3"]],
["PSY20.D1","Personality, stress and coping","Compare theories of personality and describe stress and healthy coping.",["Compare personality theories","Explain the stress response","Apply healthy coping strategies"],["What shapes who we are?","How can people cope with stress?"],["personality","trait","Big Five","stressor","coping","resilience"],["P.5","P.6"]],
["PSY30.A1","Research methods and ethics","Compare research methods and apply ethical guidelines for research with people.",["Compare experiments, surveys and case studies","Apply research ethics","Evaluate a famous study"],["How do psychologists know what they know?","What makes research ethical?"],["experiment","correlation","case study","informed consent","debriefing","ethics board"],["P.4"]],
["PSY30.B1","Designing experiments and using statistics","Design an experiment with variables and controls, and analyze results with basic statistics.",["Identify variables and write hypotheses","Design a controlled experiment","Analyze data with mean, median and correlation"],["How do I test a hypothesis fairly?","What do the numbers really show?"],["independent variable","dependent variable","control group","random assignment","mean","correlation"],["P.4"]],
["PSY30.C1","Development across the lifespan","Describe physical, cognitive and social development across the lifespan.",["Describe Piaget's stages","Describe social and emotional development","Explain adolescent brain development"],["How do people change as they grow?","What is special about the teenage brain?"],["development","Piaget","stage","attachment","adolescence","prefrontal cortex"],["P.5"]],
["PSY30.D1","Social psychology and mental health","Analyze social influence and describe mental health and illness with accurate, respectful language.",["Analyze conformity and obedience","Describe attitudes and bias","Explain mental health literacy and help-seeking"],["How do others influence our behaviour?","How can we talk about mental health accurately?"],["conformity","obedience","bystander effect","bias","stigma","mental health literacy"],["P.5","P.6"]],
["SOC20.A1","The sociological perspective","Use the sociological imagination and major theories to explain social life.",["Apply the sociological imagination","Compare functionalism, conflict theory and symbolic interactionism","Analyze a social issue with a theory"],["How do social forces shape individual lives?","How do sociologists explain society?"],["sociology","sociological imagination","functionalism","conflict theory","symbolic interactionism","social issue"],["O.1"]],
["SOC20.B1","Culture and socialization","Explain culture, norms and values and how people are socialized.",["Define culture, norms and values","Identify agents of socialization","Analyze media as an agent of socialization"],["What is culture?","How do we learn how to behave?"],["culture","norm","value","socialization","agent of socialization","subculture"],["O.2"]],
["SOC20.C1","Groups and institutions","Analyze how groups and social institutions such as family, education and media shape people.",["Distinguish primary and secondary groups","Analyze institutions","Examine group dynamics"],["Why do people form groups?","How do institutions shape our lives?"],["primary group","secondary group","institution","role","status","group dynamics"],["O.3"]],
["SOC20.D1","Deviance and social change","Analyze deviance, social control and how societies change, including social movements.",["Explain deviance and social control","Analyze a social movement","Predict future social change"],["Who decides what is normal?","How do people change society?"],["deviance","social control","sanction","social movement","social change","activism"],["O.4"]]
);
// ---------- Languages (nine-year programs, senior high levels) ----------
const LANG_MAT = {
  FSL:"authorized FSL resources, articles, songs and videos from francophone creators in Canada and the world, online dictionaries",
  SPA:"authorized Spanish resources, articles, songs, films and videos from Spanish-speaking countries, online dictionaries",
  CHI:"authorized Chinese resources, graded readers, character practice, songs and videos, dictionary apps"
};
function langUnits(code, lvl, themes){
  const meta = {}, kc = {}; kc[code + lvl] = {};
  Object.entries(themes).forEach(([L, [title, q, k]]) => { meta[L] = [title, q, LANG_MAT[code]]; kc[code + lvl][L] = k; });
  addUnits(meta, kc);
}
langUnits("FSL", 10, {
  A:["La vie quotidienne (Daily Life)",["How do I describe my routine?","How do routines compare across cultures?"],["reflexive verbs","time expressions"]],
  B:["Les souvenirs (Memories)",["How do I talk about the past?","How do I tell a story?"],["passé composé","imparfait"]],
  C:["La santé et l'alimentation (Health and Food)",["How do I talk about healthy living?","How do I give advice?"],["food and health vocabulary","il faut / devoir"]],
  D:["Les médias francophones (Francophone Media)",["What do francophone teens watch and listen to?","How do I share opinions?"],["opinions","comparisons","francophone media"]]
});
langUnits("FSL", 20, {
  A:["Le voyage (Travel)",["How do I plan and talk about a trip?","How do I handle travel situations?"],["travel vocabulary","prepositions with places"]],
  B:["Le monde francophone (The Francophone World)",["Where is French spoken, and how is it different?","What connects the francophonie?"],["la Francophonie","regional French","culture"]],
  C:["L'environnement (The Environment)",["How do I discuss environmental issues?","What can young people do?"],["environment vocabulary","futur simple"]],
  D:["Mes opinions (My Opinions)",["How do I agree, disagree and persuade?","How do I support an opinion?"],["opinion expressions","connectors"]]
});
langUnits("FSL", 30, {
  A:["Les études et les carrières (Education and Careers)",["How do I talk about my future?","Why is French valuable in Canada?"],["careers","conditionnel"]],
  B:["Les enjeux sociaux (Social Issues)",["How do I discuss social issues in French?","How do I present an argument?"],["argument","subjonctif (introduction)"]],
  C:["La littérature et le cinéma (Literature and Film)",["How do I respond to francophone stories?","What do they tell us about culture?"],["literary vocabulary","summary and response"]],
  D:["La communication avancée (Advanced Communication)",["How do I speak and write more naturally?","How do I prepare a formal presentation?"],["register","presentation skills"]]
});
langUnits("SPA", 10, {
  A:["Mi identidad (My Identity)",["How do I describe myself and my background?","How does culture shape identity?"],["ser and estar","descriptions"]],
  B:["La escuela y el tiempo libre (School and Leisure)",["How do I talk about school and free time?","How do teens spend their time in Spanish-speaking countries?"],["reflexive verbs","frequency"]],
  C:["Mis experiencias (My Experiences)",["How do I narrate past events?","How do I tell a story?"],["pretérito","time expressions"]],
  D:["El mundo hispanohablante (The Spanish-Speaking World)",["Where is Spanish spoken?","How do Spanish-speaking cultures differ?"],["countries and regions","cultural comparison"]]
});
langUnits("SPA", 20, {
  A:["Viajes y cultura (Travel and Culture)",["How do I plan and describe a trip?","What can I learn from travel?"],["travel vocabulary","pretérito vs imperfecto"]],
  B:["La salud y el bienestar (Health and Well-Being)",["How do I talk about health?","How do I give advice?"],["health vocabulary","commands"]],
  C:["Los medios de comunicación (Media)",["How do media shape our views?","How do I discuss media in Spanish?"],["media vocabulary","opinions"]],
  D:["El futuro (The Future)",["What will my future be like?","How do I make predictions?"],["futuro simple","plans"]]
});
langUnits("SPA", 30, {
  A:["Temas globales (Global Issues)",["How do I discuss global issues?","What is my role as a global citizen?"],["global issues","subjuntivo"]],
  B:["El trabajo y los estudios (Work and Study)",["How do I talk about careers and studies?","How do I prepare for an interview in Spanish?"],["careers","formal register"]],
  C:["Literatura y arte (Literature and Art)",["How do I respond to Spanish-language literature and art?","What do they reveal about culture?"],["literary vocabulary","art and artists"]],
  D:["Comunicación avanzada (Advanced Communication)",["How do I express hopes and doubts?","How do I give a formal presentation?"],["subjuntivo with emotion and doubt","presentation"]]
});
langUnits("CHI", 10, {
  A:["日常生活 Daily Life",["How do I describe my daily routine?","How do routines in China compare with mine?"],["time words","sequence: 先…然后…"]],
  B:["学校生活 School Life",["How do I describe my school?","How is school in China different?"],["school vocabulary","comparisons with 比"]],
  C:["健康和饮食 Health and Food Culture",["How do I talk about health and food?","What is special about Chinese food culture?"],["food and health","了 for completed actions"]],
  D:["阅读短文 Reading Short Texts",["How do I read short texts in characters?","How do I use context to understand new words?"],["reading strategies","radicals"]]
});
langUnits("CHI", 20, {
  A:["旅行和交通 Travel and Transportation",["How do I plan a trip?","How do I get around in a Chinese city?"],["transportation","directions","过 for experience"]],
  B:["科技 Technology",["How do I talk about technology?","How is technology used in China?"],["technology vocabulary","opinions"]],
  C:["节日和传统 Festivals and Traditions",["How are traditions passed on?","What do traditions mean?"],["festivals","customs","because/therefore"]],
  D:["表达意见 Expressing Opinions",["How do I agree and disagree politely?","How do I support my opinion?"],["opinion phrases","虽然…但是…"]]
});
langUnits("CHI", 30, {
  A:["教育和职业 Education and Careers",["How do I talk about my plans after high school?","Why is Mandarin useful?"],["careers","future plans"]],
  B:["环境和社会 Environment and Society",["How do I discuss social and environmental issues?","What solutions can I suggest?"],["environment vocabulary","如果…就…"]],
  C:["文学和成语 Literature and Idioms",["What can Chinese stories and idioms teach?","How do I use idioms correctly?"],["成语 chéngyǔ","classic stories"]],
  D:["演讲 Presentations",["How do I give a formal presentation in Mandarin?","How do I organize my ideas?"],["formal language","structure"]]
});
SO_ROWS.push(
["FSL10.A1","Daily routines","Describe daily routines using reflexive verbs and time expressions.",["Use reflexive verbs","Describe my routine with time expressions","Compare routines"],["How do I describe my day?","How do routines differ across cultures?"],["se réveiller","se lever","s'habiller","d'abord","ensuite","enfin"],["F.2","F.4"]],
["FSL10.B1","Telling stories about the past","Narrate past events using the passé composé and imparfait.",["Form the passé composé with avoir and être","Use the imparfait for description","Tell a story using both tenses"],["How do I talk about what happened?","When do I use each past tense?"],["passé composé","imparfait","hier","l'été dernier","quand j'étais petit(e)","souvenir"],["F.2","F.4"]],
["FSL10.C1","Health and food","Discuss healthy living and give advice.",["Talk about healthy and unhealthy habits","Give advice with il faut and devoir","Plan a healthy menu"],["What does healthy living mean?","How do I give advice politely?"],["la santé","il faut","tu devrais","manger équilibré","le sommeil","l'exercice"],["F.2","F.3"]],
["FSL10.D1","Francophone media","Explore francophone media and express opinions about it.",["Explore francophone music and shows","Express and compare opinions","Present a francophone artist"],["What do francophone teens enjoy?","How do I explain my tastes?"],["les médias","la chanson","l'émission","je trouve que","plus … que","francophone"],["F.1","F.5"]],
["FSL20.A1","Travel","Plan a trip and handle travel situations in French.",["Use prepositions with places","Plan an itinerary","Role-play travel situations"],["How do I plan a trip in French?","How do I solve problems while travelling?"],["en France","au Québec","à Montréal","l'itinéraire","la réservation","le billet"],["F.2","F.3","F.4"]],
["FSL20.B1","The francophone world","Explore the francophonie, regional differences in French and cultural connections.",["Locate francophone regions","Compare regional expressions","Present a francophone region"],["How is French different around the world?","What connects francophone communities?"],["la Francophonie","l'accent","l'expression régionale","Acadie","Afrique francophone","patrimoine"],["F.1","F.5"]],
["FSL20.C1","The environment and the future","Discuss environmental issues and future actions using the futur simple.",["Describe environmental problems","Form the futur simple","Propose future solutions"],["What environmental issues matter to me?","What will we do to help?"],["l'environnement","le réchauffement climatique","recycler","futur simple","nous ferons","il faudra"],["F.2","F.4"]],
["FSL20.D1","Opinions and debate","Express, support and challenge opinions using connectors.",["Use opinion expressions","Use connectors to support arguments","Take part in a debate"],["How do I persuade someone in French?","How do I disagree politely?"],["à mon avis","je suis d'accord","par contre","cependant","donc","en conclusion"],["F.2","F.3"]],
["FSL30.A1","Education and careers","Talk about future studies and careers using the conditional.",["Describe careers and studies","Use the conditionnel for possibilities","Explain the value of French in Canada"],["What would I like to do in the future?","How can French help my career?"],["le métier","les études","je voudrais","j'aimerais","conditionnel","bilingue"],["F.2","F.4","F.5"]],
["FSL30.B1","Social issues","Discuss social issues and build arguments, using an introduction to the subjunctive.",["Discuss a social issue","Build a structured argument","Use il faut que + subjonctif"],["How do I discuss serious issues in French?","How do I present an argument?"],["l'enjeu","la société","il faut que","subjonctif","l'argument","la solution"],["F.2","F.3","F.4"]],
["FSL30.C1","Literature and film","Respond to francophone literature and film.",["Read a short francophone text","Analyze a francophone film or song","Write a response"],["What do francophone stories tell us?","How do I respond to a text in French?"],["le roman","le personnage","l'intrigue","le thème","le film","la critique"],["F.1","F.5"]],
["FSL30.D1","Advanced communication","Use appropriate register and deliver a formal presentation.",["Compare formal and informal register","Prepare a formal presentation","Present and answer questions"],["How do I sound natural and appropriate?","How do I present formally in French?"],["le registre","formel","familier","la présentation","la conclusion","répondre aux questions"],["F.2","F.6"]],
["SPA10.A1","My identity","Describe identity, background and personality using ser and estar.",["Use ser for identity and traits","Use estar for states and location","Present my identity"],["How do I describe who I am?","When do I use ser and estar?"],["ser","estar","la personalidad","el origen","la nacionalidad","describir"],["S.1","S.2"]],
["SPA10.B1","School and free time","Describe school life and free time using reflexive verbs and frequency.",["Use reflexive verbs for routines","Describe free time with frequency","Compare teen life across cultures"],["How do teens spend their days?","How do routines compare across cultures?"],["levantarse","ducharse","el tiempo libre","a menudo","nunca","el horario"],["S.1","S.3"]],
["SPA10.C1","Narrating experiences","Narrate past events using the preterite.",["Form regular preterite verbs","Use irregular preterite verbs","Tell a story about a past event"],["How do I talk about what happened?","How do I make a story interesting?"],["pretérito","ayer","el fin de semana pasado","fui","hice","luego"],["S.1","S.2"]],
["SPA10.D1","The Spanish-speaking world","Explore regions, countries and cultures of the Spanish-speaking world.",["Locate Spanish-speaking countries and regions","Compare cultural practices","Present a country"],["Where is Spanish spoken?","How diverse is the Spanish-speaking world?"],["hispanohablante","la región","la costumbre","indígena","la diversidad","comparar"],["S.3"]],
["SPA20.A1","Travel and culture","Describe trips and experiences using the preterite and imperfect.",["Contrast preterite and imperfect","Describe a past trip","Plan a cultural trip"],["How do I tell travel stories?","What can travel teach me?"],["pretérito","imperfecto","el viaje","el paisaje","conocer","la cultura"],["S.1","S.2","S.3"]],
["SPA20.B1","Health and well-being","Discuss health and give advice using commands.",["Describe health and habits","Give advice with commands","Create a well-being campaign"],["What keeps people healthy?","How do I give advice in Spanish?"],["la salud","el bienestar","el mandato","come","duerme","deberías"],["S.1","S.2"]],
["SPA20.C1","Media","Discuss media and express opinions about it.",["Discuss media habits","Analyze a news story or ad","Express and support opinions"],["How do media shape our views?","How do I evaluate media?"],["los medios","las noticias","la publicidad","creo que","no creo que","fiable"],["S.1","S.3"]],
["SPA20.D1","The future","Make predictions and plans using the future tense.",["Form the future tense","Make predictions","Describe future plans"],["What will my future be like?","How do I talk about plans and predictions?"],["futuro","seré","tendré","el año que viene","algún día","el plan"],["S.1","S.2"]],
["SPA30.A1","Global issues","Discuss global issues and express wishes and recommendations using the subjunctive.",["Discuss global issues","Use the subjunctive after recommendations","Propose solutions"],["What global issues matter to me?","How do I recommend change?"],["el tema global","la pobreza","el cambio climático","recomiendo que","es importante que","subjuntivo"],["S.1","S.2","S.3"]],
["SPA30.B1","Work and study","Talk about careers and studies and prepare a job interview in Spanish.",["Describe careers and studies","Use formal register","Role-play a job interview"],["What career interests me?","How do I speak formally?"],["el trabajo","la entrevista","usted","la experiencia","las habilidades","el currículum"],["S.1","S.2"]],
["SPA30.C1","Literature and art","Respond to Spanish-language literature and art.",["Read a short story or poem","Analyze a Spanish-speaking artist","Write a response"],["What do stories and art reveal about culture?","How do I respond to literature?"],["el cuento","el poema","el autor","el pintor","el tema","la interpretación"],["S.1","S.3"]],
["SPA30.D1","Expressing hopes and doubts","Express emotions, hopes and doubts using the subjunctive and present formally.",["Use the subjunctive with emotion","Use the subjunctive with doubt","Give a formal presentation"],["How do I express feelings about events?","How do I speak with nuance?"],["ojalá","espero que","dudo que","me alegra que","subjuntivo","la presentación"],["S.2","S.4"]],
["CHI10.A1","Daily routine","Describe daily routines using time words and sequence expressions.",["Use time words","Describe a sequence with 先…然后…","Compare daily routines"],["How do I describe my day?","How do routines in China compare?"],["起床 qǐchuáng","早上 zǎoshang","先 xiān","然后 ránhòu","最后 zuìhòu","每天 měitiān"],["Z.1","Z.2"]],
["CHI10.B1","School life and comparisons","Describe school life and make comparisons using 比.",["Describe my school","Compare with 比","Compare schools in China and Canada"],["What is my school like?","How do schools compare?"],["学校 xuéxiào","比 bǐ","考试 kǎoshì","作业 zuòyè","更 gèng","一样 yíyàng"],["Z.1","Z.2","Z.3"]],
["CHI10.C1","Health and food culture","Talk about health and Chinese food culture using 了.",["Talk about healthy habits","Use 了 for completed actions","Explore Chinese food culture"],["How do I talk about health?","What is special about Chinese food culture?"],["健康 jiànkāng","吃了 chī le","筷子 kuàizi","蔬菜 shūcài","喝茶 hē chá","菜 cài"],["Z.1","Z.2","Z.3"]],
["CHI10.D1","Reading short texts","Read short texts in characters using radicals and context.",["Use radicals to guess meaning","Read a short text","Summarize a text in Mandarin"],["How can I read new characters?","How does context help?"],["部首 bùshǒu","偏旁 piānpáng","上下文 shàngxiàwén","读 dú","生词 shēngcí","意思 yìsi"],["Z.2","Z.4"]],
["CHI20.A1","Travel and transportation","Plan trips, give directions and talk about experiences using 过.",["Describe transportation and directions","Use 过 for past experience","Plan a trip in China"],["How do I get around?","Where have I been?"],["坐 zuò","火车 huǒchē","飞机 fēijī","去过 qù guo","往 wǎng","旅行 lǚxíng"],["Z.1","Z.2"]],
["CHI20.B1","Technology","Talk about technology and its use in China and Canada.",["Describe technology habits","Compare technology use","Give opinions about technology"],["How do I use technology?","How is technology used in China?"],["手机 shǒujī","上网 shàng wǎng","电脑 diànnǎo","应用 yìngyòng","方便 fāngbiàn","我觉得 wǒ juéde"],["Z.1","Z.3"]],
["CHI20.C1","Festivals and traditions","Explain festivals and traditions using cause and effect.",["Describe festival customs","Use 因为…所以…","Compare traditions"],["Why are traditions important?","What do customs mean?"],["传统 chuántǒng","习俗 xísú","因为 yīnwèi","所以 suǒyǐ","庆祝 qìngzhù","家人 jiārén"],["Z.1","Z.3"]],
["CHI20.D1","Expressing opinions","Express and support opinions, agreeing and disagreeing politely.",["Use opinion phrases","Use 虽然…但是…","Debate a topic politely"],["How do I share my opinion politely?","How do I support my ideas?"],["我认为 wǒ rènwéi","同意 tóngyì","不同意 bù tóngyì","虽然 suīrán","但是 dànshì","理由 lǐyóu"],["Z.1","Z.2"]],
["CHI30.A1","Education and careers","Talk about plans after high school and the value of Mandarin.",["Describe future plans","Explore careers using Mandarin","Present my plan"],["What will I do after high school?","How can Mandarin help my career?"],["大学 dàxué","工作 gōngzuò","职业 zhíyè","将来 jiānglái","打算 dǎsuan","机会 jīhuì"],["Z.1","Z.3"]],
["CHI30.B1","Environment and society","Discuss social and environmental issues using conditional sentences.",["Discuss environmental issues","Use 如果…就…","Propose solutions"],["What issues face society?","What can we do?"],["环境 huánjìng","污染 wūrǎn","保护 bǎohù","如果 rúguǒ","就 jiù","社会 shèhuì"],["Z.1","Z.2","Z.3"]],
["CHI30.C1","Literature and idioms","Explore classic stories and use chéngyǔ (idioms) correctly.",["Learn chéngyǔ and their stories","Use idioms in sentences","Retell a classic story"],["What do idioms teach?","How do I use them correctly?"],["成语 chéngyǔ","故事 gùshi","画蛇添足 huà shé tiān zú","守株待兔 shǒu zhū dài tù","寓意 yùyì","典故 diǎngù"],["Z.2","Z.3"]],
["CHI30.D1","Formal presentations","Prepare and deliver a structured formal presentation.",["Organize a presentation","Use formal expressions","Present and answer questions"],["How do I present formally in Mandarin?","How do I organize ideas clearly?"],["演讲 yǎnjiǎng","首先 shǒuxiān","其次 qícì","总之 zǒngzhī","观点 guāndiǎn","谢谢大家 xièxie dàjiā"],["Z.1","Z.2","Z.4"]]
);
