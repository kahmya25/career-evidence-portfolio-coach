# Data model (initial milestone)

- **User**: email (unique), Argon2id password hash (not selected by default), display name, role, email verification flag, timestamps.
- **Session**: stored by `connect-mongo`, opaque session ID held in an HttpOnly cookie.
- **Evidence**: owner ID, title, description, evidence type, tags, source URL, contribution, verification status, timestamps. Index: owner ID + updated time.

Planned collections include verification/reset tokens, resumes, documents, chunks, job targets, confirmed requirements, practice plans, mentor invitations/grants, reviews, portfolio projections, conversations, agent runs, abuse reports, and audit logs. These are not represented as implemented models yet.
