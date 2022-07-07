# 🚀 `frontend-app` app 🚀

Our frontend app, containing a signup form.

## ⚡ CLI

| Description                              | Command                                    |
| ---------------------------------------- | ------------------------------------------ |
| 🛠️ Build                                 | `pnpm exec nx run frontend-app:build`      |
| 🚀 Launching frontend-append (port 3000) | `pnpm exec nx run frontend-app:serve`      |
| ⚠️ Linting the app                       | `pnpm exec nx run frontend-app:lint`       |
| ✔️ Type checking using tsc               | `pnpm exec nx run frontend-app:type-check` |
| ✅ Launching tests                       | `pnpm exec nx run frontend-app:test`       |
| 🕵️ Run sonarcloud command                | `pnpm exec nx run frontend-app:sonar`      |

### 🔶 Useful flags

| flag                 | Description                                        |
| -------------------- | -------------------------------------------------- |
| ⬛ `--skip-nx-cache` | disables nx caching; the command will be ran fully |
| ⬛ `--verbose`       | prints additional error stack trace on failure     |
