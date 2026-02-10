# npm init -y intialize the package with npm to manage the dependencies.

# what does npm do?

- npm is the package manager for Node.js that allows installation of packages from the npm registry, manages project dependencies, and enables commands like npm run and npm install

- Install Prettier as a dev dependency using npm install --save-dev prettier so formatting is consistent across the entire project. This ensures all developers follow the same formatting rules, whereas the VS Code Prettier extension only applies locally on your machine.

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

- A .gitignore file is added at the root level to exclude unnecessary and generated files from being committed to GitHub.

# Vite: Vite is a fast tool that helps developers run and build React apps quickly.

- npm install -D vite@5.4.2 @vitejs/plugin-react@4.3.1
- why -D becasue it devDependency not production okay
- ✅ Starts the project instantly
- ✅ Shows changes immediately
- ✅ Saves developer time
- eg. Like vite
- Webpack
- Parcel
- Add type = module.
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

- Official Rule of Hooks (Interview Gold ⭐)
- ✅ Call hooks only at the top level
- ❌ Don’t call hooks inside:
- loops
- conditions
- nested functions
- ✅ Call hooks only from React components or custom hooks
- React.js identify the hooks by position not name okay,if we write the hooks conditionally then in second/third... render may forget the position and cause the issue “This is the 1st hook, this is the 2nd hook, this is the 3rd hook…”

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

- Q16. What does a ternary expression in React allow developers to do?
  Ans. A ternary expression lets you choose between two UI outputs based on a condition, directly inside JSX.

- Q17. What does a ternary expression in React allow developers to do?
  Ans. The effect runs on every render.

- Q18. When should state variables be added to a useEffect dependency array?
  Ans. Any state (or prop) that is read inside useEffect and affects its logic or output must be included in the dependency array.

- Q19. What is the key difference between an expression and a statement in JavaScript?
  Ans. An expression evaluates to a value(ternary operator), whereas a statement(if and while loop) performs an action or controls program flow and does not return a value.

- Q20. What is the primary purpose of the 'key' prop in React when rendering lists of components?
  Ans. The key prop allows React to track which list items have changed, been added, or removed, enabling efficient DOM reconciliation.

- Q21. Why is using the array index as a key considered problematic?
  Ans. Because array index is not associated with listing objects. Array indexes are unstable keys; when list order changes, React may reuse the wrong component instances, leading to bugs and poor performance.

- Q22. What does React do when components are rearranged without a unique key?
  Ans. When React components are rearranged without a unique key, React’s reconciliation (diffing) algorithm cannot correctly identify which item is which. As a result, React may reuse the wrong components, leading to unexpected UI bugs.

- Q23. In which scenario might using the array index as a key be acceptable?
  Ans. When list is static and won't be reordered.

- Q24. What is an ideal identifier for a 'key' prop when rendering lists?
  Ans. A Unique Id associated with object.

- Q25. What does NODE_ENV typically indicate in web development?
  Ans. Whether the app is in production or development mode.

- Q26. What is the primary purpose of React's Strict Mode?
  Ans. To provide extra(One more times it checks the <StrictMode><App /></StrictMode>) check and warn about the deprecated features.

- Q27. What happens when React components are rendered in Strict Mode?
  Ans. Components are double re-renders to catch potential side effect issue.

- Q28. What is a general recommendation for performance optimization in React?
  Ans. Introduce performance enhancements only when specific problem arise.

- Q29. What happens during the first render when using a custom hook with an asynchronous API call?
  Ans. During the first render, the custom hook runs synchronously, initializes state with its default value, renders the component with that value, and then the asynchronous API call runs after render. When the data arrives, state updates and React triggers a re-render.

- Q30. When should effects be extracted into custom hooks?(Represents a Single Responsibility)
  Ans. Effects should be extracted into custom hooks when the same side-effect logic is reused across components, or when extracting it improves readability, separation of concerns, and testability.
- Q31. What method is used to prevent a form from automatically submitting in React?
  Ans. preventDefault()
- Q32. What JavaScript operator is used to add a new item to an existing array while creating a new array?
  Ans. spread operator {...}
- Q33. Why is onSubmit preferred over onClick for form handling?
  Ans. onSubmit is preferred over onClick for form handling because it correctly handles all ways a form can be submitted, supports browser validation and accessibility, and represents the semantic intent of submitting a form.
  - onSubmit catches all of these
  - onClick catches only button clicks

- Q34. What problem does React Context solve in component communication?
  Ans. Props drilling across multiple nested components.

- Q35. What is the primary focus of TanStack Router?
  Ans. Client Side routing.

- Q36. What does the <Outlet/> component do in TanStack Router?
  Ans. Renders the matched route's component in a parent layout.

- Q37. What naming convention is used for lazy-loaded routes in TanStack Router?
  Ans. Use lowercase filename with 'lazy.jsx' eg. cart.lazy.jsx

- Q38. What is the purpose of the \_root.jsx file in TanStack Router?
  Ans. Define shared layout and components for all routes.

- Q39. How does TanStack Router handle versioning across its ecosystem?
  Ans. Synchronize versions across all packages.

# Custom hook

- A custom hook is a reusable function that encapsulates React hook logic.
  It helps in code reuse, separation of concerns, and cleaner components.
  State inside a custom hook belongs to the component using it, so when it changes, the component re-renders.
  Basically separating the stateful logic in another function that is it.

# Design Patterns.

- Extract Effects(Custom hooks) When They Represent a Single Responsibility

# useContext

- Create context eg. export const cartContext = createContext();
- const cartHook = useState([]);
- Wrap the required set of components or <App /> like <cartContext.provider value = {cartHook}> </cartContext.provider>
- Now time to use with the help of the const [cart, setCart] = useContext(cartContext); in children components.
-

`createContext()
     ↓
Provider created (Wrap root component means <App /> or any )
     ↓
State stored in Provider
     ↓
value passed down
     ↓
useContext reads value
     ↓
setState updates value
     ↓
Consumers re-render`

# Tanstack query

- It is like receptionist
- npm install -D @tanstack/router-plugin@1.65.0 @tanstack/router-devtools@1.65.0

- Route structure.
  - created root route in the \_\_root.jsx
  - created two lazy routes you can see in the routes folder.
  - App.jsx always talk to routeTree.gen.ts for th routes
  - routes given to react.js in the App.jsx.
