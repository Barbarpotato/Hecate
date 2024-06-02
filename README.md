# basic_bun

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.js
```

This project was created using `bun init` in bun v1.1.10. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

# JSX
Bun support the JSX syntax style to write the HTML element inside the run time code. You need to install:
```bash
bun add react @types/react --dev
```

# environment variables

To use different env file for the example we have .env file & .env.production file. if we want to use the production environment. we can just type in the terminal:
```bash
export NODE_ENV=production
```

# Watchmode

Bun support to read a file repeatedly with automatically. For example:
```bash
bun --watch run index.tsx
``` 

# Package Manager

In Node.js we know something about NPM. but in the bun Environment. 
We automatically have the package manager, so we dont need to install manually.
To use Bun package manager it really similiar with NPM or Yarn

# Test Runner
Bun already compatible with Jest unit test.
to run test with watchmode:
```bash
bun test --watch
```

# Package Runner
in NPM. we have npx file as a package runner. to run the instruction from the dependency. example we usually use : `npx prisma generate`
in Bun. we can replace this usage to `bunx`

# Workspace
This is used to manage the project file. For example if we are already create the project. 
and we are willing to create the sub-project in a form of another module again, then we can use the workspace feature.
To telling this to the main project. we can added workspace in package.json
```json
{
  "name": "basic_bun",
  "module": "index.js",
  "type": "module",
  "workspaces": [
    "packages/*"
  ],
  "devDependencies": {
    "@types/bun": "latest",
    "@types/react": "^18.3.3"
  },
  "peerDependencies": {
    "typescript": "^5.0.0"
  },
  "dependencies": {
    "react": "^18.3.1"
  }
}
```