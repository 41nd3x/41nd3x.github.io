# git-naming agent

OpenCode subagent that enforces conventional branch naming and commit message conventions.

## Branch naming format

```
type/short-description
```

| Type       | Use case                  |
|------------|---------------------------|
| `feature/` | New features              |
| `bugfix/`  | Bug fixes                 |
| `hotfix/`  | Urgent production fixes   |
| `release/` | Release preparation       |
| `docs/`    | Documentation             |
| `refactor/`| Code restructuring        |
| `test/`    | Adding/fixing tests       |
| `chore/`   | Maintenance               |

## Commit message format

```
type(optional-scope): short-summary
```

Types: `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `perf`, `revert`, `build`, `ci`

Rules:
- Imperative mood ("add", "fix" — not "added", "fixed")
- Subject ≤ 50 characters
- One logical change per commit (atomic)
- Blank line + body only when the change needs explanation