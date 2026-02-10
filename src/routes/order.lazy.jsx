import {PizzaPoint} from "../PizzaPoint";
import {useState, useEffect, useContext} from "react";
import Cart from "../Cart";
import {cartContext} from "../contexts";
import { createLazyFileRoute } from "@tanstack/react-router";


export const Route = createLazyFileRoute('/order')({
  component: Order
})

 function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [cart, setCart] = useContext(cartContext);
  const [isLoading, setIsLoading] = useState(true);
  let selectedPizza;
  let prize;


  if(!isLoading) {
     selectedPizza = pizzaTypes.find(t => t.id === pizzaType);
     prize = selectedPizza.sizes[pizzaSize];
  }
  async function fetchPizzaTypes() {
        const res = await fetch("/api/pizzas");
        const data = await res.json();
        setPizzaTypes(data);
        setIsLoading(false);
  }
  async function checkout () {
      await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({cart})
      })
     
     setCart([]);
     setIsLoading(false); 
  }
  // If dependency array is empty, the effect will only run once after the initial render, similar to componentDidMount in class components. This is useful for fetching data or performing setup tasks that should only happen once when the component mounts.
  useEffect(() => {
    fetchPizzaTypes();
  },[])

  return (
    <div className="order-page">
    <div className="order">
      <h2>Create Order</h2>
      <form onSubmit={(e)=> {
        e.preventDefault()
        setCart([...cart, { pizza:selectedPizza, size:pizzaSize, prize }]);
        }}>
        <div>
          <div>
            <label htmlFor="pizza-type">Pizza Type</label>
            <select name="pizza-type" value={pizzaType} onChange={(e)=> setPizzaType(e.target.value)}>
              {pizzaTypes.map((type) => {
                return <option key={type.id} value={type.id}>{type.name}</option>
              })}
            </select>
          </div>
          <div>
            <label htmlFor="pizza-size">Pizza Size</label>
            <div>
              <span>
                <input
                  checked={pizzaSize === "S"}
                  type="radio"
                  name="pizza-size"
                  value="S"
                  id="pizza-s"
                  onChange={(e)=> setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-s">Small</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "M"}
                  type="radio"
                  name="pizza-size"
                  value="M"
                  id="pizza-m"
                  onChange={(e)=> setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-m">Medium</label>
              </span>
              <span>
                <input
                  checked={pizzaSize === "L"}
                  type="radio"
                  name="pizza-size"
                  value="L"
                  id="pizza-l"
                  onChange={(e)=> setPizzaSize(e.target.value)}
                />
                <label htmlFor="pizza-l">Large</label>
              </span>
            </div>
          </div>
          <button type="submit">Add to Cart</button>
        </div>
        <div className="order-pizza">
          {
            isLoading ? <p>Loading...</p> : <PizzaPoint
            name={selectedPizza?.name || "Pepperoni"}
            description={selectedPizza?.description}
            image={selectedPizza?.image }
            prize={prize}
          />
          }  
        </div>
      </form>
      
    </div>
      {
        isLoading ? <p>Loading...</p> : <Cart cart={cart} checkout={checkout} />
      }
    </div>
  );
}