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
