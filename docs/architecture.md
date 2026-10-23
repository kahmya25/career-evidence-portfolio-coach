# Architecture (initial milestone)

```mermaid
flowchart LR
  Browser[React + Vite UI] -->|HTTPS / JSON + HttpOnly cookie| API[Express API]
  API --> Auth[Authentication middleware]
  Auth --> Evidence[Evidence routes and ownership filters]
  API --> Mongo[(MongoDB)]
  Mongo --> Users[Users]
  Mongo --> Sessions[Server-side sessions]
  Mongo --> Records[Evidence records]
  API -. planned .-> Ollama[Ollama chat + embeddings]
  API -. planned .-> Atlas[Atlas Vector Search]
```

The browser is not trusted for identity, role, owner IDs, or access grants. The API derives the current user from the server-side session. The initial evidence routes always scope queries to `req.user._id`. AI retrieval, grants, and public projections are planned and must preserve these access boundaries.
