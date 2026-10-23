# High School Complementary Courses: hand-off note

High School Complementary Courses (Alberta senior high option courses) was built from the High School English project chat on 23 Oct 2026, as the companion to Middle School Complementary Courses.

## Where it lives
- Teacher site: https://highcomplementary.millardmiddleschoolmaths.live/ (students: /student; /teacher goes to the shared portal)
- GitHub: 02041985/High-School-Complementary-Courses (push to main deploys)
- Vercel: project highschool-complementary, team MWIC
- Supabase: engine-crew-planner (shared). App key `complementary_hs`; classes have subject 'complementary_hs', grade 10–12 and the course key in `course`; lesson keys look like FSL20.A1_0; teacher documents use the hcc: prefix. In the portal the courses sit beside the middle school ones under Fine Arts, Career and Technology (CTF and CTS), Outdoor Education, Ethics and Social Sciences, and Languages.

## What's in it
- 27 courses: Art, Drama, General Music, Instrumental Music, CTS (introductory, intermediate, advanced), French 10-20-30 (nine-year), Spanish and Chinese (Mandarin) Language and Culture 10-20-30 (nine-year), General Psychology 20, Experimental Psychology 30 and Sociology 20.
- 108 outcomes (four units per course), paraphrased from the Alberta programs of study and tagged with program components. CTS outcomes are the shared CTS expectations (safety, design process, quality, careers); teachers pair them with the specific 1-credit CTS courses their school offers.
- 27 built-in lessons: the first lesson of every course. Teachers write the rest with "Generate lesson".
- Not included: three-year language programs (for example Spanish 10-3Y for beginners), Personal Psychology 20, Sociology 30, Social and Cultural Anthropology, Religious Studies, Knowledge and Employability and locally developed courses. Any of these can be added the same way.

## Source
`source/parts/*.js` are concatenated into `source/data.js`. Lesson sources are in `source/src/`.

## Still to do by the owner
- Vercel → highschool-complementary → Environment Variables: add ANTHROPIC_API_KEY. GRADER_SECRET is already set.
- Supabase → Authentication → URL Configuration: add https://highcomplementary.millardmiddleschoolmaths.live/** to Redirect URLs.
