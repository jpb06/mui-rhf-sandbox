# ✨ nx-front-poc

[![Open in Visual Studio Code](https://img.shields.io/static/v1?logo=visualstudiocode&label=&message=Open%20in%20Visual%20Studio%20Code&labelColor=2c2c32&color=007acc&logoColor=007acc)](https://github.dev/jpb06/nx-front-poc)
[![Front deployment](https://img.shields.io/github/deployments/jpb06/nx-front-poc/production?label=front%20deploy&logo=vercel&logoColor=white)](https://nx-front-poc.vercel.app/)
[![Storybook deployment](https://img.shields.io/github/deployments/jpb06/nx-front-poc/production%20–%20mui-rhf-sandbox-storybook?label=storybook%20deploy&logo=vercel&logoColor=white)](https://nx-front-poc-storybook.vercel.app/)
[![Back deployment](https://img.shields.io/github/deployments/jpb06/nx-front-poc/rhf-mui-nx-sandbox-back?label=back%20deploy&logo=heroku&logoColor=dodgerblue)](https://rhf-mui-nx-sandbox-back.herokuapp.com/)
![Github workflow](https://img.shields.io/github/workflow/status/jpb06/nx-front-poc/tests%20and%20sonarcloud%20scan?label=last%20workflow&logo=github-actions)
[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=coverage)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=bugs)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
[![Duplicated Lines (%)](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=duplicated_lines_density)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
[![Lines of Code](https://sonarcloud.io/api/project_badges/measure?project=jpb06_mui-rhf-sandbox&metric=ncloc)](https://sonarcloud.io/summary/new_code?id=jpb06_mui-rhf-sandbox)
![Last commit](https://img.shields.io/github/last-commit/jpb06/nx-front-poc?logo=git)

Here is a little POC to help our team move forward with our stack! ✨

## 🚀 [Main frontend app](https://nx-front-poc.vercel.app) | [Storybook](https://nx-front-poc-storybook.vercel.app)

## ⚡ Getting started

```bash
# using fnm to set node version - https://github.com/Schniz/fnm
fnm use

# Installing dependencies
pnpm i

# starting backend and frontend in parallel
pnpm dev frontend-app,backend-app
# on windows
pnpm dev "frontend-app,backend-app"

# run all tests
pnpm test-all

# launch cypress tests in watch mode
pnpm nx e2e front-e2e-app --watch

# launch storybook in dev mode
pnpm nx serve front-storybook-app
```

## ⚡ Documentation

Seriously, read these please 🥲

### 🔶 [`nx`](./docs/nx.md)

### 🔶 [`Frontend architecture`](./docs/frontend-architecture.md)

### 🔶 [`Multi languages support`](./docs/translations.md)

### 🔶 [`Forms handling`](./docs/react-hook-form.md)

### 🔶 [`Tests`](./docs/tests.md)

### 🔶 [`Storybook`](./docs/storybook.md)

### 🔶 [`Cypress`](./docs/cypress.md)

## ⚡ Projects

| Project                                                                | Description                                                                  |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 🚀 [`frontend-app`](./apps/front/README.md) app                        | Our frontend app, containing a signup form                                   |
| 🚀 [`front-e2e-app`](./apps/front-e2e/README.md) app                   | Our end to end testing code using cypress                                    |
| 🚀 [`front-storybook-app`](./apps/storybook/README.md) app             | A next app used to serve storybook                                           |
| 🚀 [`backend-app`](./apps/back/README.md) app                          | Our backend app, relying on an in-memory dataset                             |
| 🧩 [`front-api-lib`](./libs/front/api/README.md) lib                   | Our api types, extracted from the backend swagger                            |
| 🧩 [`front-components-lib`](./libs/front/components/README.md) lib     | Our generic components and the MUI theme shared by all our frontend apps     |
| 🧩 [`front-logic-lib`](./libs/front/logic/README.md) lib               | Shared logic code                                                            |
| 🧩 [`front-translations-lib`](./libs/front/translations/README.md) lib | Stub implementation for the translation of our UI.                           |
| 🧩 [`front-storybook-lib`](./libs/front/storybook/README.md) lib       | Library centralizing the configuration necessary to build and run storybook. |

## ⚡ cli

### 🔶 Running actions

| Description                                          | Command                                                                    |
| ---------------------------------------------------- | -------------------------------------------------------------------------- |
| ▶️ Run an action on one project                      | `pnpm exec nx run <project>:<action>`                                      |
| ▶️ Run an action on all projects                     | `pnpm exec nx run-many --target=<action> --all`                            |
| ▶️ Run an action on a set of projects                | `pnpm exec nx run-many --target=<action> --projects=<project1>,<project2>` |
| ▶️ Run an action only on projects containing changes | `pnpm exec nx affected:<action>`                                           |

#### 🧿 Typical actions

Actions are defined by project in `project.json` files. Here are a few standard actions:

| Action        | Description                                                  |
| ------------- | ------------------------------------------------------------ |
| 🛠️ build      | Builds the app/lib. Use `--prod` flag for a production build |
| 🚀 serve      | Runs the app                                                 |
| ⚠️ lint       | Run the linter against project files                         |
| ✔️ type-check | Uses `tsc --noEmit` to validate types against project files  |
| ✅ test       | Runs tests                                                   |
| ☑️ e2e        | Runs end to end tests                                        |

#### 🧿 Useful flags

| flag                 | Description                                                    |
| -------------------- | -------------------------------------------------------------- |
| ⬛ `--target=x`      | specifies which action to run                                  |
| ⬛ `--skip-nx-cache` | disables nx caching; the command will be ran fully             |
| ⬛ `--verbose`       | prints additional error stack trace on failure                 |
| ⬛ `--projects=x,x`  | `run-many`: specifies which projects to run the action against |
| ⬛ `--parallel=x`    | `run-many`: allows x tasks to be ran in parallel               |

### 🔶 Running tests

| Description                               | Command                                                                          |
| ----------------------------------------- | -------------------------------------------------------------------------------- |
| ✅ Run tests for a project (watch)        | `pnpm test-changes <project>` or `pnpm exec nx test --project=<project> --watch` |
| ✅ Run all tests for a project (watchAll) | `pnpm test-dev <project>` or `pnpm exec nx test --project=<project> --watchAll`  |
| ✅ Run all tests in parallel              | `pnpm test-all` or `pnpm exec nx run-many --target=test --parallel --all`        |

### 🔶 Creating applications or libraries

| Description                        | Command                                                                                  |
| ---------------------------------- | ---------------------------------------------------------------------------------------- |
| 🗃️ Create a new front app or lib   | `pnpm exec nx g @nrwl/react:app <appname>` or `pnpm exec nx g @nrwl/react:lib <appname>` |
| 🗃️ Create a new backend app or lib | `pnpm exec nx g @nrwl/nest:app <appname>` or `pnpm exec nx g @nrwl/nest:lib <appname>`   |
| 🗃️ Create a vanilla node lib       | `pnpm exec nx g @nrwl/node:lib <libname>`                                                |
