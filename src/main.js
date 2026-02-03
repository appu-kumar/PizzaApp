// React components return objects, ReactDOM turns them into real HTML.

const pizzaPoint = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  );
};
const App = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h1", null, "Welcome to My App"),
    React.createElement(pizzaPoint, {
      name: "Pizza Point 1",

      description: "The best pizza in town",
    }),
    React.createElement(pizzaPoint, {
      name: "Pizza Point 2",
      description: "The second best pizza in town",
    }),
    React.createElement(pizzaPoint, {
      name: "Pizza Point 3",
      description: "The third best pizza in town",
    }),
  );
  // This creates a plain JavaScript object, NOT HTML.
  /*
   {
     type: "p",
     props: {
       children: "Hello crazy point"
     }
   }
  */
};

// 1 App() is called → returns a React element (object)
const pTag = App();

// 2️ Get the real DOM container
const container = document.getElementById("root");

// 3️ Create a React root (React 18 way)
/*
In very simple words 🧠
This line is React saying:
“From now on, this <div id="root"> is my area.
I will manage whatever comes inside it.”

Registers this DOM node with React
Attaches internal systems (scheduler, updater)
Marks this container as React-managed
*/
const root = ReactDOM.createRoot(container);

// 4️ Render the React element into real DOM
root.render(pTag);
// This line converts the React element object into a real DOM (HTML element)
// and inserts it inside the container

// Note: React --> Helps in creating components and ReactDOM --> Helps in rendering those components to the DOM

// QNA section
/*
Q1. What is the purpose of having both React and ReactDOM packages?
Ans. React is responsible for creating components and managing their state and lifecycle, while ReactDOM is responsible for rendering those components to the actual DOM in web applications.

Q2. What method is used to render a React application to the DOM?
Ans. The method used to render a React application to the DOM is root.render(), where root is created using ReactDOM.createRoot().

Q3. How can you create a basic React component without using JSX?
Ans. A basic React component can be created without using JSX by using React.createElement() to create elements. For example:
const MyComponent = () => {
  return React.createElement('div', null, 'Hello World');
};

Q4. What is the primary purpose of ReactDOM.createRoot()?
Ans. The primary purpose of ReactDOM.createRoot() is to create a root container that manages the rendering of React components into a specified DOM node, enabling React's internal systems to handle updates and rendering efficiently.

*/
