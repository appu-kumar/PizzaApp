import usePizzaOfTheDay  from "./hooks/usePizzaOfTheDay";


const PizzaOfTheDay = () => {

    // Just moved the state logic in the different file, so that we can reuse it in other components if needed. that is the use of the custom hook.
    // it starts with 'use' to follow the convention and to let React know that this is a hook.
     const pizzaOfTheDay = usePizzaOfTheDay();

    if(!pizzaOfTheDay) {
        return <div>Loading...</div>
    }

    return (
        <div className="pizza-of-the-day">
            <h2>Pizza of the Day</h2>
            <div>
                <div className="pizza-of-the-day-info">
                    <h3>{pizzaOfTheDay.name}</h3>
                    <p>{pizzaOfTheDay.description}</p>
                    <p>From: ${pizzaOfTheDay.sizes.S}</p>
                </div>
                <img src={pizzaOfTheDay.image} alt={pizzaOfTheDay.name} className="pizza-of-the-day-image" style={{ width: "60%", height: "60%" }} />
            </div>
        </div>
    )

}

export default PizzaOfTheDay;