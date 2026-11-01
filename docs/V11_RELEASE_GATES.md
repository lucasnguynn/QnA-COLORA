# V11.5 competency pilot | Release gates

**Status: Technical candidate, not an approved employee certification.**

## Implemented
- The original 303-question bank is unchanged. 86 Essentials, 17 lessons, 12 Applied Cases and five excluded pending-approval questions remain.
- Final test retains 48 items: 24 Essentials across all 17 chapters, 8 Applied (2 per pillar), 16 Role items with fixed competency quotas.
- Existing three CORE critical gates and role-specific critical gates must all be met along with 80% overall and 70% per pillar.
- Nine fictional work samples (three per role) provide weighted rubrics. Answers are stored only in browser; no automated grading or staff certificates.
- Assessment fingerprint is computed from exam-relevant content and matrix. FNV-1a is a stale-score indicator, **not cryptographic integrity protection**.
- The V10.2-to-V11 transition preserves valid previous practice responses; old exam results remain historical.

## Before a production certification release
1. Founder approval for mission, vision, values, price range and other claims.
2. Product technical approval for metal substrate, finishing per SKU, nickel-free scope, gem treatment evidence and accepted QC standards.
3. Care and privacy owner approval for return/warranty rules, order lookup and permission-based outreach.
4. Independent item review with citation/version for each scored question. The existing 86 Essentials are **still pending human review**.
5. Pilot employees: pre/post/delayed assessment, review by managers, per-item distractor diagnostics, accessibility and real mobile-browser QA.
6. Information governance: GitHub Pages serves publicly readable answer keys; no identity verification or secure audit log. Do not store actual client conversations or confidential supplier/employee information on public GitHub.

## Explicit limitations
- Passing this pilot measures only self-study performance.
- GitHub Actions passing proves structural/test invariants, not claim truth or valid psychometrics.
- Work samples are not marked as manager-approved until a separate authorized process exists.


## V11.1 technical validation & unresolved limits
- Skill-specific minimum correct counts are defined per role in `data/competency-matrix.json`. A single-role competency cannot be compensated by other topics in the 48-item exam.
- High-total negative cases, changed-answer practice entries and content review status changes are tested in CI.
- All 86 Essentials remain **PENDING_HUMAN_REVIEW**. Five disallowed questions remain excluded; the other 81 are used only in self-study pilot exams, not approved staff certification.
- Legacy rows without item revisions can be carried over only from recognized 10.1, 10.2 or 11.0 versions after established V10.1 exceptions are archived. Unrecognized and changed rows remain as local historical data, not current mastery.
- Browser E2E, independent subject-matter review, item difficulty/pilot results and employee identity proof are not delivered by this update.
- Release gates stay pending: founder, technical, policies/privacy, independent item review, and a real employee usability/assessment pilot.


## V11.3 additions and release blockers
- All 303 items now have review metadata, proposed owners, source status and risk-based priorities. None has received a new approval from this change.
- 9 structured manager-review pilot worksheets allow 27 anchored criterion ratings, observable evidence notes and blocking critical-failure flags. The 75/100 pilot bar is provisional, not validated.
- Reviews are editable in local browser data; CSV is self-entered and unverified. Never treat exports as employment certification.
- Only four reference images are present and their public-use rights remain awaiting owner confirmation; none is proven to be an approved finished jewelry SKU.
- Before release, review product/process claims and every Essential, obtain approved real visual assets and license checks, and test actual browsers with staff. Approval cannot be assumed from passing CI.


## V11.4: evidence review and data-collection gate
- Public research confirms only limited general/policy scope for 10 P0 dossiers / 20 linked items. No additional 86 Essentials were human approved and no actual SKU was validated.
- SKU claims need signed, scoped evidence; do not publish lab reports, supplier lots or confidential CAD into public GitHub.
- Opt-in pilot JSON export excludes identifiers and free text but **not guaranteed anonymous**; only manually authorized offline collection and analysis, with small-cohort re-identification caution.
- Offline analytics are descriptive and self-reported, reject mixed banks and unknown fields; employee scoring and psychometric validation require stronger supervised, permissioned infrastructure.
- Required before release: real staff usability trial, real product/QC approval, independent question reviews, permissioned image releases, real mobile/desktop E2E QA, and explicit founder/technical/policy signoff.


## V11.5: real Chromium and reviewer packet prerequisites
- Two-viewport Chromium smoke suite in CI is implemented and passed in a branch run: navigation, nine work-sample infrastructure, four visual labs, manual rubric scoring, evidence board, 48-question exam, voluntary pilot export, reload persistence, mobile no-horizontal-overflow.
- It is a simulated browser environment, not Safari iOS/Android physical-device QA, visual brand approval or real staff pilot evidence.
- Review packet output remains local (never auto-approves or commits CSV), with 98 P0s by owner and content.
- Nine P0 distractor drafts were changed. Seven remain flagged for extreme-word-answer cues. Every changed item and all 86 Essentials still requires human signoff.
