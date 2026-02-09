// React components return objects, ReactDOM turns them into real HTML.
// import React from "react";
import ReactDOM from "react-dom/client";
import {useState} from "react";
import Order from "./Order";
import PizzaOfTheDay from "./PizzaOfTheDay";
import Header from "./Header";
import {cartContext} from "./contexts";


const App = () => {
  // return React.createElement(
  //   "div",
  //   null,
  //   React.createElement("h1", null, "Welcome to My App"),
  //   React.createElement(PizzaPoint, {
  //     name: "Pizza Point 1",

  //     description: "The best pizza in town",
  //   }),
  //   React.createElement(PizzaPoint, {
  //     name: "Pizza Point 2",
  //     description: "The second best pizza in town",
  //   }),
  //   React.createElement(PizzaPoint, {
  //     name: "Pizza Point 3",
  //     description: "The third best pizza in town",
  //   }),
  // );

  // // Babel converts this JSX into a plain JavaScript object (React element) at build/compile time,
// before the code runs in the browser.

  const cartHook = useState([]);
  return (
     <div>
       <cartContext.Provider value={cartHook}>
        <Header />
        <Order />
        <PizzaOfTheDay />
       </cartContext.Provider>
     </div>
  )
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
// now App() is returning jsx okay     
// App() is a normal function call, while <App /> creates a React element that React manages internally.
// const pTag = App();

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
// root.render(pTag);
root.render(<App />);
// This line converts the React element object into a real DOM (HTML element)
// and inserts it inside the container

// Note: React --> Helps in creating components and ReactDOM --> Helps in rendering those components to the DOM



