# Career Evidence and Portfolio Coach

**Your projects. Your evidence. Your career.**

A full-stack capstone application for connecting a student's real project evidence to internship requirements. The product principle is evidence-first: the application must distinguish documented support from missing or unverified evidence and must never invent a student's achievements.

> **Current status: foundation milestone, not a complete implementation.** The responsive React workspace, evidence-entry UI, basic Express/Mongoose API, Argon2id password hashing, MongoDB-backed sessions, and owner-filtered evidence CRUD are scaffolded. Email verification, password recovery, CSRF token flow, resume processing, AI/RAG, mentor grants, portfolio publishing, and administrator workflows are not yet complete. The UI labels AI and saving workflows honestly rather than simulating successful model calls.

## Stack

- Frontend: React 18, Vite, React Router, Tailwind CSS, Lucide React, Recharts dependency
- Backend: Node.js ES modules, Express, Mongoose, MongoDB
- Security foundation: Argon2id, server-side MongoDB sessions, HttpOnly cookies, Helmet, explicit CORS origin, login rate limit, Zod validation
- Tests: Vitest, Supertest
- Planned AI: Ollama, LangChain JS, MongoDB Atlas Vector Search

## Requirements

- Node.js 20 or newer (LTS recommended)
- npm 10 or newer
- MongoDB running locally or a MongoDB Atlas connection string
- Optional later: Ollama and configured local models

## Local setup

1. Copy `.env.example` to `.env` in the repository root.
2. Set `MONGODB_URI` and replace `SESSION_SECRET` with a random secret of at least 32 characters.
3. Install dependencies from the repository root:

   ```bash
   npm install
   ```

4. Start MongoDB and run both apps:

   ```bash
   npm run dev
   ```

5. Open `http://localhost:5173`. The API is at `http://localhost:4000/api`; health check: `GET /api/health`.

The server intentionally fails to start if it cannot connect to MongoDB. The client currently has a clearly labeled local workspace view and does not pretend its local starter entries have been synchronized to the database.

## Environment variables

| Variable | Purpose |
|---|---|
| `NODE_ENV` | `development`, `test`, or `production` |
| `PORT` | API port; defaults to 4000 |
| `CLIENT_ORIGIN` | Single allowed browser origin |
| `MONGODB_URI` | MongoDB connection string |
| `SESSION_SECRET` | Secret used to sign opaque session IDs |
| `OLLAMA_BASE_URL` | Planned local model endpoint; never expose to browser |
| `OLLAMA_CHAT_MODEL` | Planned chat model name |
| `OLLAMA_EMBEDDING_MODEL` | Planned embedding model name |
| `MAX_UPLOAD_MB` | Planned upload size limit |

## Implemented API foundation

- `GET /api/health`
- `POST /api/auth/register` — creates student-role accounts and hashes passwords using Argon2id
- `POST /api/auth/login` — rate-limited; requires `emailVerified=true`
- `GET /api/auth/me`
- `POST /api/auth/logout`
- `GET /api/evidence` — authenticated, paginated, owner-filtered
- `POST /api/evidence` — authenticated, schema-validated
- `GET /api/evidence/:id` — owner-filtered
- `PATCH /api/evidence/:id` — owner-filtered
- `DELETE /api/evidence/:id` — owner-filtered

Email verification and password reset endpoints currently return an explicit not-configured result; they are not production-ready. The session cookie is HttpOnly and uses Secure in production. A full CSRF token issuance/validation mechanism is still required before production deployment; cookie SameSite alone is not a replacement for CSRF protection.

## Tests

```bash
npm test
```

The current tests cover health, 404 response shape, and rejecting unauthenticated evidence access. They do **not** establish that all security requirements are satisfied. Tests that create database records require a dedicated test database and should be added with isolated fixtures.

## Planned stages

1. Finish authentication: email verification tokens, recovery, session rotation/revocation, CSRF, security tests.
2. Add evidence CRUD to the UI, private resume upload, PDF/TXT extraction, processing states, and job target persistence.
3. Add confirmed requirement extraction and deterministic evidence mapping.
4. Add Ollama embeddings, source-linked chunks, Atlas Vector Search index configuration, access-filtered retrieval, and citations.
5. Add grounded career chat and bounded preparation agent with explicit plan approval.
6. Add invitation grants, mentor reviews, immediate revocation, and public portfolio projections.
7. Add administrator workflows, audit events, seed scripts, evaluation queries, Postman collection, Playwright E2E tests, and architecture documentation.

## Security and privacy notes

- Never trust role or owner IDs from client requests or model output.
- Every database query for private evidence must include the authenticated owner's scope or a verified sharing grant.
- Public portfolio responses must be built from an explicit allowlisted projection, never from a complete user or evidence document.
- Uploaded documents and retrieved text are untrusted input; never execute embedded instructions.
- Do not commit `.env`, real credentials, private source documents, or real student personal data.
- This starter is not production-ready and has not been externally audited.
