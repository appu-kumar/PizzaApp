# npm init -y intialize the package with npm to manage the dependencies.

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

# what does npm do?

# npm is the package manager for Node.js that allows installation of packages from the npm registry, manages project dependencies, and enables commands like npm run and npm install
