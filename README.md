# cjs-ts-training

CodeceptJS + Playwright with TypeScript

Prerequisites:
node & npm are global installed

Clone this repository to start:

```
git clone https://github.com/codeceptjs/cjs-ts-training
```

Install dependencies:

```
npm i
```

Run a test:

```
npx codeceptjs run --grep "@linksAndPages" --steps --verbose

npx codeceptjs run --grep "@data" --steps --verbose

npx codeceptjs run --grep "@noResult" --steps --verbose
```

## Contents

- `codecept.conf.js` - main configuration file
- `steps.d.ts` - typescript definitions for objects
