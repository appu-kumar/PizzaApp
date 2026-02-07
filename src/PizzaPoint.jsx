/* 
// it returns pure js okay so browser understand it easily
const pizzaPoint = (props) => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  );
}; 

*/

// Below one is jsx,  browser does not understand this,  so babel transpile below code into the above code
export const PizzaPoint = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
            <img src={props.image} alt={props.name} style={{ width: "60%", height: "60%" }} />
            <p>${props.prize}</p>
        </div>
    )
}

// Note::- JSX is not HTML. JSX is just an easier way to write React.createElement(). Babel converts JSX into normal JavaScript before the browser runs it.
/*
JSX Code
   ↓
Babel (transpiler this is part of the build tool like vite(our case), parcel, webpack or 'Create React App')
   ↓
React.createElement()
   ↓
Browser

*/