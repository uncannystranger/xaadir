# Frontend review verification

- Build, TypeScript, ESLint and diff checks pass (2026-10-19).
- Real local demo UI: administrator dashboard and teacher register inspected.
- Saturday 17 October register: Mark All Present, ArrowRight changed first student to Absent, Save Draft, confirmation, and submit produced 5 Present / 1 Absent. No messages sent to Admin.
- Actual register screenshots and document overflow measurements at 320, 390, 768, 1024, 1440 and 1920px: scrollWidth equals viewport width.
- Mobile drawer recorded as a sequence of real browser screenshots. Reduced-motion styles inspected in source; OS emulation and Safari/Firefox not verified.
- Lockfile repaired after npm ci rejected stale transitive resolutions; package.json unchanged. npm reports 11 pre-existing audit findings; dependency security remediation is separate.
- Local demo data only; external integrations and real school accounts not exercised. No backend, authentication contract or stored-data schema changes.
- Existing login/README pull requests are outside this diff. Production publication remains separate.

Final screenshot inspection found clipped phone attendance choices in the pre-existing wide register. At <=700px, the register now stacks student identity above four visible status choices; filters wrap. The skip link uses clipping until focused to avoid a full-page capture/compositor artifact from an offscreen transform. Screenshots and checks were refreshed after this correction.

20 October: draft success feedback is set only after localStorage confirms a write; storage failures retain marks and show an alert. Pending submissions also retain the confirmation dialog on Escape. Hosted admin demo sign-in and dashboard inspected.

The final register review also found empty weekday record objects showing completion ticks. The week strip now requires at least one actual mark before showing a tick. Local draft success was rechecked after the storage-feedback correction.
