# csv_upload

This web application runs on a [React](https://react.dev/) frontend using the [Next.js](https://nextjs.org/) framework and [Typescript](https://www.typescriptlang.org/), and a [Node.js](https://nodejs.org/en) backend. It also uses [Material UI](https://mui.com/), a React component library as a base for the frontend UI design.

The display of data from the CSV and pagination are also handled via Material UI's [MUI X Data Grid](https://mui.com/x/react-data-grid/getting-started/) component.

For handling the CSV file, [react-dropzone](https://react-dropzone.js.org/) is used as a simple drag-and-drop input for files, while [Papa Parse](https://www.papaparse.com/) is used to parse the rows of the CSV file into a more accessible JSON format.

Lastly, the unit tests are facilitated via [ts-jest](https://kulshekhar.github.io/ts-jest/), while builds on [Jest](https://jestjs.io/) and adds more compatibility with TypeScript.

## Getting Started

Before we begin, please ensure the repository is downloaded and you have either [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed. It is strongly recommended to use the yarn package manager for the following steps, or the npm equivalent should you prefer.

Note: This application was developed and tested on the macOS operating system. If there are any issues running it on Windows, it is possible that you may have to run the project in [Windows Subsystem for Linux (WSL)](https://learn.microsoft.com/en-us/windows/wsl/install).

# Installing dependencies for the project

```bash
yarn install
```

# Building the project

```bash
yarn build
```

# Running the server

```bash
# Production server
yarn start

# Dev server
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Unit testing

<img width="840" alt="Screenshot 2024-12-14 at 4 35 27 AM" src="https://github.com/user-attachments/assets/ddfba24a-c729-4bb3-adb2-ac6e89804a6d" />

The unit tests can be run with the following command, while in the root project folder.

```bash
yarn test
```
