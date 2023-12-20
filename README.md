# NEST JS + NEXT JS in a monorepo with a shared library

This is a monorepo with a NestJS API and a NextJS frontend. It uses PNPM workspaces to manage the dependencies. It also uses PNPM to run the scripts.

Turbo is used to manage the monorepo and the build/dev pipelines.

## Getting Started

### Install dependencies

```bash
pnpm install
```

### Run the app

```bash
pnpm dev
```

### Build the app

```bash
pnpm build
```

## Interesting stuff

To avoid CORS issues, the NextJS has a proxy to the NestJS API. This is configured in the `next.config.mjs` file as a rewrites rule.

## Good to remember

- The `pnpm` command is used to run the scripts. This is configured in the root `package.json` file.
- Each affected package/app has to have a script with the same name as the one in the root `turbo.json` file.
