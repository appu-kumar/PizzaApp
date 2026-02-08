
export default function Cart({cart, checkout}) {
     let totalPrize = 0;

     cart.forEach(item => {
        totalPrize += item.prize;
     })


    return (
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                {cart.map((item, index) => (
                <li key={index}>
                    <span>{item.size}</span>-
                    <span>{item.pizza?.name}</span>-
                    <span>${item.prize}</span>
                </li>
            ))}
            </ul>
            <h3>Total: ${totalPrize}</h3>  
            <button onClick={checkout}>Checkout</button> 
        </div>
    )
}