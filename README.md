# javascript-ci

A simple TypeScript Node.js demo project with automated CI testing.

## Features

- Written in **TypeScript** with strict type checking
- **Jest** unit tests with full coverage of utility functions
- **ESLint** with TypeScript support for code quality
- Clean project structure with `src/` source files and `dist/` build output

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 9

### Installation

```bash
npm install
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run build` | Compile TypeScript to JavaScript in `dist/` |
| `npm start` | Run the compiled application |
| `npm run dev` | Run directly with `ts-node` (no build step) |
| `npm test` | Run the Jest test suite |
| `npm run lint` | Lint source files with ESLint |

### Example Output

```
=== TypeScript Node.js Demo ===

Math operations:
  add(5, 3)       = 8
  subtract(10, 4) = 6
  multiply(6, 7)  = 42
  divide(15, 3)   = 5

Greeting:
  Hello, World!
```

## Project Structure

```
src/
├── index.ts          # Application entry point
├── utils.ts          # Utility functions (math, greet)
└── __tests__/
    └── utils.test.ts # Jest unit tests
```
