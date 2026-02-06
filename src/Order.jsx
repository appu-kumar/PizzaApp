import {PizzaPoint} from "./PizzaPoint";
import {useState, useEffect} from "react";

export default function Order() {
  const [pizzaTypes, setPizzaTypes] = useState([]);
  const [pizzaType, setPizzaType] = useState("pepperoni");
  const [pizzaSize, setPizzaSize] = useState("M");
  const [isLoading, setIsLoading] = useState(true);

  async function fetchPizzaTypes() {
        const res = await fetch("/api/pizzas");
        const data = await res.json();
        setPizzaTypes(data);
        setIsLoading(false);
  }

  
  // If dependency array is empty, the effect will only run once after the initial render, similar to componentDidMount in class components. This is useful for fetching data or performing setup tasks that should only happen once when the component mounts.
  useEffect(() => {
    fetchPizzaTypes();
  },[])

  return (
    <div className="order">
        <p>pizzaType = {pizzaType}</p>
        <p>pizzaSize = {pizzaSize}</p>
      <h2>Create Order</h2>
      <form onSubmit={(e)=> e.preventDefault()}>
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
          <PizzaPoint
            name={pizzaTypes.find(t => t.id === pizzaType)?.name || "Pepperoni"}
            description="Mozzarella Cheese, Pepperoni"
            image="/public/pizzas/pepperoni.webp"
          />
          <p>$13.37</p>
        </div>
      </form>
    </div>
  );
}