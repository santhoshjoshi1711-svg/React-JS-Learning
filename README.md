# React.js Learning – Day 01

My first practical React.js learning repository.

## Topics covered
- What React.js is
- JSX and JSX rules
- Functional components
- Reusable components
- Passing data with props

## Requirements
- Node.js (LTS)
- npm

## Run the project
1. Extract or clone this repository.
2. Open this folder in VS Code.
3. Open the terminal in this folder.
4. Run:

```bash
npm install
npm run dev
```

5. Open the local URL shown in the terminal (usually http://localhost:5173).

## Project structure
```text
React-JS-Learning-Day-01/
├── index.html
├── package.json
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── components/
    │   ├── Greeting.jsx
    │   └── ProfileCard.jsx
    └── examples/
        └── JSXExamples.jsx
```

## Learning notes

### What is React?
React is a JavaScript library for building user interfaces. It helps developers create interfaces using reusable components.

### What is JSX?
JSX is a syntax extension that lets us write HTML-like markup inside JavaScript. JSX is transformed into JavaScript by the build tooling.

### JSX rules
- Return one parent element (or use a Fragment).
- Use `className` instead of `class`.
- Close all tags, including input and image tags.
- Use `{}` to embed JavaScript expressions.
- Component names should start with an uppercase letter.

### What is a component?
A component is a reusable piece of UI. In this project, `Greeting` and `ProfileCard` are functional components.

### What are props?
Props are read-only inputs passed from a parent component to a child component.

## Next steps
- Practise creating components.
- Change the sample profile details.
- Add your own component and push the update to GitHub.
