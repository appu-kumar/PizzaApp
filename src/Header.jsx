
import {useContext} from "react";
import {cartContext} from "./contexts";
export default function Header() {
   const [cart] = useContext(cartContext);
    return (
        <nav>
            <h1 className="logo">Pizza Point</h1>
            <div className="nav-cart">
                 🛒<span className="nav-cart-number">{cart.length}</span>
            </div>
        </nav>
    )
}