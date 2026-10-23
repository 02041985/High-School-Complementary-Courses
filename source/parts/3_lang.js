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
