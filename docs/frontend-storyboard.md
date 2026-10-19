# Xaadir frontend storyboard

Awwwards sources:
- https://www.awwwards.com/inspiration/sign-up-envato — clear form hierarchy and generous separation of tasks.
- https://www.awwwards.com/inspiration/form-fill-eduard-bodak-portfolio — immediate form feedback, short state transitions.
- https://www.awwwards.com/inspiration/navigation-micro-animation-eduard-bodak-portfolio — restrained navigation feedback.

Desktop: retain the green school workspace. Keep chrome stable; reveal only the route content. Add clear admin/teacher context and a keyboard skip link. Improve directory readability, teacher setup progression and form feedback.

Mobile: retain the drawer, large touch targets and sticky attendance actions; respect safe areas and the visible keyboard height. Keep selected students and statuses visible while filtering.

Attendance: show marked/total progress without animating numeric values. Support arrow-key selection within each student status group. Show saving state, keep the confirmation open on failure, and prevent repeated submissions while a save is pending.

No authentication, repository model, persistence or permissions changes. Existing open PRs concern README and public login information; those files are excluded from the presentation pass. The lockfile needs an indirect dependency repair for npm ci.
