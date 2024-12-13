# csv_upload

<img width="720" alt="Screenshot 2024-12-14 at 4 45 56 AM" src="https://github.com/user-attachments/assets/292b4c18-838b-40c2-86d9-92b469031442" />

This web application runs on a [React](https://react.dev/) frontend using the [Next.js](https://nextjs.org/) framework and [Typescript](https://www.typescriptlang.org/), and a [Node.js](https://nodejs.org/en) backend. It also uses [Material UI](https://mui.com/), a React component library as a base for the frontend UI design.

The display of data from the CSV and pagination are also handled via Material UI's [MUI X Data Grid](https://mui.com/x/react-data-grid/getting-started/) component.

For handling the CSV file, [react-dropzone](https://react-dropzone.js.org/) is used as a simple drag-and-drop input for files, while [Papa Parse](https://www.papaparse.com/) is used to parse the rows of the CSV file into a more accessible JSON format.

Lastly, the unit tests are facilitated via [ts-jest](https://kulshekhar.github.io/ts-jest/), while builds on [Jest](https://jestjs.io/) and adds more compatibility with TypeScript.

## Getting Started

Before we begin, please ensure the repository is downloaded or cloned, and you have either [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/) installed. It is strongly recommended to use the yarn package manager for the following steps, or the npm equivalent should you prefer.

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

# Using the application

1. Drag and drop a CSV file or use the button to select a CSV file in the file explorer.
2. If the CSV file is empty or contains invalid headers, an appropriate error message will be displayed.
3. If the CSV file contains the valid headers, the CSV will be processed and displayed on the frontend UI after a few seconds.

<img width="720" alt="Screenshot 2024-12-14 at 5 17 33 AM" src="https://github.com/user-attachments/assets/3d797565-efc9-4e9c-9ea3-fbf76bbcfe8a" />

# Unit testing

<img width="720" alt="Screenshot 2024-12-14 at 5 17 21 AM" src="https://github.com/user-attachments/assets/d3b47da6-6070-4d9b-9a7c-0c9403e21a49" />

The unit tests can be run with the following command, while in the root project folder.

```bash
yarn test
```

## More Info

# Assumptions and Decisions

1. While the application was developed with both frontend and backend specifications, there was no clear requirement to **store** the data in a database table of any kind, although SQLite was considered as a lightweight table for further implementation if more time could be spent on this assessment.

2. Given the format of the CSV file, it can be surmised that the table contains data for a forum of some kind, where posts have their own unique ID in the order of which they were made, but are also tied to specific threads with the first recorded post in each unique postId being the opening to the thread. As such, there was consideration to implement a forum page structure for the main page along with the page containing the CSV upload feature with a search function that is done server-side, but this may not have been within the scope of the assessment (see: #1).

3. The requirements provided by the recruiter were to use any familiar tools without restriction, which was why the libraries mentioned in the background section were used, with the exception of Jest as the testing framework instead of Ava.js, as there were technical difficulties getting Ava.js to work well with TypeScript in this environment.
