# npm init -y intialize the package with npm to manage the dependencies.

# what does npm do?

- npm is the package manager for Node.js that allows installation of packages from the npm registry, manages project dependencies, and enables commands like npm run and npm install

# Install Prettier as a dev dependency using npm install --save-dev prettier so formatting is consistent across the entire project. This ensures all developers follow the same formatting rules, whereas the VS Code Prettier extension only applies locally on your machine.

- npm install --save-dev prettier
- .prettierrc file is to define the prettier rules.

# Prettier only cares about appearance.

- ✔️ Fixed spacing
- ✔️ Fixed quotes
- ✔️ Fixed indentation
- ❌ Did NOT check logic

# Linting analyzes your code logic and patterns.

- npm install -D eslint@9.9.1 eslint-config-prettier@9.1.0 globals@15.9.0
- eslint.config.mjs (Create file name with this)
- const name = 'Appu';
  function hello() {
  console.log(nam);
  }
- ESLint error:
- ❌ nam is not defined
- ❌ hello function is never used
- ❌ console.log is not allowed

# A .gitignore file is added at the root level to exclude unnecessary and generated files from being committed to GitHub.

# Vite: Vite is a fast tool that helps developers run and build React apps quickly.

- npm install -D vite@5.4.2 @vitejs/plugin-react@4.3.1
- why -D becasue it devDependency not production okay
- ✅ Starts the project instantly
- ✅ Shows changes immediately
- ✅ Saves developer time

# eg. Like vite

- Webpack
- Parcel

# Add type = module.

- <script type="module" src="./src/main.js"></script>
- We use type="module" so the browser understands that this JavaScript file uses modern JavaScript features like import and export.
- remove cdn links of react and react-dom
- npm install react@18.3.1 react-dom@18.3.1
- Add following command in package.json
  - "dev": "vite",
  - "build": "vite build",
  - "preview": "vite preview",
- Now run react project use---> npm run dev

# Proxy server

- In vite.config.js, the proxy server is used to forward frontend requests to the backend URL.
- How frontend forwards requests to backend using a proxy (Vite example)
- The frontend does not directly talk to the backend.
  It sends the request to Vite, and Vite forwards it to the backend on behalf of the frontend.
- Frontend → Vite Proxy → Backend
- Backend → Vite Proxy → Frontend
- Frontend: localhost:5173
- Backend: localhost:3000
- Different origins → CORS error

```Browser
↓ fetch("/api/users")
Vite Dev Server (5173)
↓ proxy forwards
Backend Server (3000)
↓ response
Vite Dev Server
↓
Browser
```

# Important Notes

- Proxy works only in development
- In production, frontend calls backend directly
- Vite proxy is not deployed

# useState()

- Even when a component re-renders(on state change component(function) re-runs and create new jsx and compare with old jsx only change dom element is taken care in new jsx), React still updates only the DOM nodes that changed.

# Question Section

- Q1. What is the purpose of having both React and ReactDOM packages?
  Ans. React is responsible for creating components and managing their state and lifecycle, while ReactDOM is responsible for rendering those components to the actual DOM in web applications.

- Q2. What method is used to render a React application to the DOM?
  Ans. The method used to render a React application to the DOM is root.render(), where root is created using ReactDOM.createRoot().

- Q3. How can you create a basic React component without using JSX?
  Ans. A basic React component can be created without using JSX by using React.createElement() to create elements. For example:
  const MyComponent = () => {
  return React.createElement('div', null, 'Hello World');
  };

- Q4. What is the primary purpose of ReactDOM.createRoot()?
  Ans. The primary purpose of ReactDOM.createRoot() is to create a root container that manages the rendering of React components into a specified DOM node, enabling React's internal systems to handle updates and rendering efficiently.

- Q5. What is the primary purpose of adding a proxy configuration in the Vite configuration?
  Ans. The primary purpose of adding a proxy configuration in the Vite configuration is to enable the development server to forward API requests to a backend server, allowing for seamless integration between the frontend and backend during development without encountering CORS issues.

- Q6. What is the purpose of the useState hook in React?
  Ans. To create stateful component and allow dynamic value updates.

- Q7. What is a key rule when using React hooks?
  Ans. Hooks must be called at the top level of a component.

- Q8. What happens when a state is updated using a setter function in React?
  Ans.The component re-renders(component function called) with new state value.

- Q9. What is the typical structure of a useState hook call?
  Ans. const [value, setValue] = useState(defaultvalue);

- Q10. Why does React recommend explicit event handlers on form elements?
  Ans. To improve accessibility of screen readers.

- Q11. What is the primary purpose of the useEffect hook in React?
  Ans. To handle the side effects outside the render cycle.

- Q12. What does the second parameter in useEffect represent?
  Ans. The dependecy array triggers the effect.

- Q13. What happens when an empty array [] is passed as the second argument to useEffect?
  Ans. The effect runs only once when component mounts.

- Q14. Why can't an async function be directly used as a useEffect callback?
  Ans. useEffect callback must return either nothing or a cleanup function, but an async function always returns a Promise.
  React cannot use a Promise as a cleanup function, so an async function cannot be passed directly.

- Q15. What does the map() method do in the context of rendering React components?
  Ans. map() iterates over an array and returns a new array of JSX elements, allowing React to render lists dynamically.
