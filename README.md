# COLORA Learning Studio

Internal training website for **COLORA - COLOR YOUR AURA**. The app supports practice and a final assessment for three employee paths:

- General / Designer / Editor: **79 questions** (39 core + 40 specialized)
- Customer Care / Advisor: **86 questions** (39 core + 47 specialized)
- Marketing / Content: **89 questions** (39 core + 50 specialized)

The shared bank has 176 questions, including multiple-select questions. The final assessment randomly selects 12 core + 18 role-specific questions, gives 35 minutes, and shows an explanation-based review only after submission.

## Run locally

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080/`. This is a static site and requires no build or backend. Open the site through HTTP, not `file://`, because it loads `data/questions.json` using `fetch()`.

## GitHub Pages

In repository Settings > Pages, choose **Deploy from a branch**, select `main` and `/ (root)`, then save. If deploying from a pull request, merge it first. Site URL is generally `https://lucasnguynn.github.io/QnA-COLORA/`, but only treat it as live after Pages reports successful publication.

## Learning and assessments

- Practice: answer one question, receive feedback, see the reason and an application note. Wrong answers go into the review list.
- Final test: 30 questions, 35 minutes, no answer feedback until the end, export results as CSV.
- Progress: saved in this browser's localStorage only. Different browsers/devices do **not** share progress.
- Pass level: 80% is a **provisional training suggestion**, not a validated staff certification threshold.

## Privacy & security

This repository and GitHub Pages website are public. **Questions, answer keys, and explanations can be inspected in the JSON file and JavaScript**. The exam is therefore a learning assessment, **not a secure/proctored certification**. Do not publish customer data, staff sensitive information, internal confidential sourcing documents, or account credentials here.

There is no employee login, server-side storage, or centralized management dashboard. Name fields and quiz results remain on the user's own browser. CSV result exports can be shared manually with a manager, but they are not tamper-proof.

For a secure official exam with verified identities and central reporting, use a protected backend with authentication, server-side question selection/grading, role-based access, audit logs, rate limiting and consent/retention controls. GitHub Pages alone cannot provide that architecture.

## Content governance

Training question sources were adapted from the COLORA V6 workbook and company positioning. Some product specifications, sourcing claims and policies are pending SKU-level approval. Verify all live claims and policies against COLORA's current approved records before customer-facing use.

Brand presentation: ivory `#F4EDE1`, navy `#002451`, accent bronze `#B08A5B`; heading Cormorant Garamond and body Open Sans. Web fonts are linked via Google Fonts and are not distributed in the repository.