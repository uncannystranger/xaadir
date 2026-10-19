# Xaadir frontend storyboard

Awwwards sources:
- https://www.awwwards.com/inspiration/sign-up-envato — clear form hierarchy and generous separation of tasks.
- https://www.awwwards.com/inspiration/form-fill-eduard-bodak-portfolio — immediate form feedback, short state transitions.
- https://www.awwwards.com/inspiration/navigation-micro-animation-eduard-bodak-portfolio — restrained navigation feedback.

Desktop: retain the green school workspace. Keep chrome stable; reveal only the route content. Add clear admin/teacher context and a keyboard skip link. Improve directory readability, teacher setup progression and form feedback.

Mobile: retain the drawer, large touch targets and sticky attendance actions; respect safe areas and the visible keyboard height. Keep selected students and statuses visible while filtering.

Attendance: show marked/total progress without animating numeric values. Support arrow-key selection within each student status group. Show saving state, keep the confirmation open on failure, and prevent repeated submissions while a save is pending.

No authentication, repository model, persistence or permissions changes. Existing open PRs concern README and public login information; those files are excluded from the presentation pass. The lockfile needs an indirect dependency repair for npm ci.

Phone register refinement: student identity sits above four equal status choices, all visible at 320px; filters wrap. Desktop retains the dense row register. This adapts the same Envato form hierarchy and Bodak form-fill references.

## Technology study: Zenarate

Source: https://www.awwwards.com/sites/zenarate
Composition: https://www.awwwards.com/inspiration/desktop-zenarate
Motion study: https://www.awwwards.com/inspiration/zenarate-zenarate-3

Adapt its editorial serif/sans contrast, calm framed surfaces and separation of human context from product modules. Xaadir keeps its school identity: forest navigation, warm paper workspace, school/year masthead, editorial page headings, shared overview strip and legible attendance register. The source's staged composition becomes a 400ms route-content rise/fade; directories lift subtly and button arrows move 3px. No AI capabilities or source assets are imported. Existing Bodak navigation/form references cover state feedback.

Desktop: persistent role navigation, school context above content, four overview cells. Phone: same role context in the drawer, two overview columns, full-width register and all four attendance choices. Reduced motion removes route and interaction animation. Numbers remain stationary. Dashboard date now reflects the actual current date rather than a hardcoded sample date; no attendance calculations changed.
