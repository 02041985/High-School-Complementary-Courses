# High School Complementary Courses

Planning and assessment app for Alberta senior high option courses: Art, Drama, General Music and Instrumental Music 10-20-30, Career and Technology Studies (CTS) at the introductory, intermediate and advanced levels, General Psychology 20, Experimental Psychology 30, Sociology 20, and French, Spanish and Chinese (Mandarin) Language and Culture 10-20-30 (nine-year programs). Built on the same platform as the other planbooks.

- **Curriculum**: 108 outcomes across 27 courses, each with program components, guiding questions, lesson topics, essential questions, vocabulary, materials, a subject reference card, an assessment plan and proficiency descriptors. Outcomes are paraphrased from the Alberta programs of study.
- **Lessons**: objective, vocabulary, an activity (studio task, scene, listening or playing task, shop or lab task, experiment, case study or dialogue), worked examples, 15 practice questions and a 20-question practice test. The first lesson of every course is built in; teachers write the rest with "Generate lesson".
- **Markbook**, **analysis by subject**, **test builder** and the **student site** at `/student`.

## Stack

| Part | Where |
| --- | --- |
| Static front end | `index.html`, `student.html`, `js/`, `css/` (no build step) |
| Data and sign-in | Supabase project `engine-crew-planner` (shared with the other planbooks) |
| Lesson writing | Vercel function `api/generate.js` → Claude API |
| Hosting | Vercel project `highschool-complementary`, deployed from this repo's `main` branch, at highcomplementary.millardmiddleschoolmaths.live |

Teacher documents use the `hcc:` prefix in `planbook_docs`. Classes have `subject = 'complementary_hs'`, `grade` 10 to 12 and the course key in `course` (ART10–30, DR10–30, MU10–30, IM10–30, CTS10–30, PSY20, PSY30, SOC20, FSL10–30, SPA10–30, CHI10–30); lesson keys look like `FSL20.A1_0`. The teacher-portal app key is `complementary_hs`; teachers tick each course separately.

## Environment variables (Vercel)

| Name | Required | Notes |
| --- | --- | --- |
| `ANTHROPIC_API_KEY` | Yes, for lesson writing | Server-side only. |
| `GRADER_SECRET` | Yes, for the student site | Must match the `grader` row in `pb_secrets`. |

In Supabase → Authentication → URL Configuration, add `https://highcomplementary.millardmiddleschoolmaths.live/**` to **Redirect URLs**. See `docs/` and `source/`.
