# React Starter Template

A modern React starter template with the latest technologies and best practices.

## 🚀 Tech Stack

- **React 19** - Latest version of React
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS v4** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible React components
- **Create React App** - Bootstrapped with CRA (no Vite)
- **CRACO** - Create React App Configuration Override for custom webpack config

## ✨ Features

- ✅ Modern React with TypeScript
- ✅ Tailwind CSS v4 with custom design system
- ✅ shadcn/ui components ready to use
- ✅ Path aliases configured (`@/` → `src/`)
- ✅ Dark mode support ready
- ✅ ESLint configuration
- ✅ Production-ready build setup
- ✅ Hello World page with shadcn button examples

## 🛠️ Getting Started

### Prerequisites

- Node.js 16+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## 📝 Available Scripts

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## 🎨 Adding shadcn/ui Components

To add new shadcn/ui components:

```bash
npx shadcn@latest add <component-name>
```

For example:
```bash
npx shadcn@latest add card
npx shadcn@latest add input
npx shadcn@latest add dialog
```

## 🏗️ Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   └── HelloPage.tsx    # Example page component
├── lib/                 # Utility functions
│   └── utils.ts         # shadcn/ui utilities
├── App.tsx              # Main App component
├── index.tsx            # React entry point
└── index.css            # Global styles with Tailwind
```

## 🎯 Path Aliases

The project is configured with path aliases:

- `@/components` → `src/components`
- `@/lib` → `src/lib`
- `@/*` → `src/*`

## 🌙 Dark Mode

Dark mode is configured and ready to use. Toggle it by adding the `dark` class to your HTML element:

```javascript
document.documentElement.classList.toggle('dark')
```

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
