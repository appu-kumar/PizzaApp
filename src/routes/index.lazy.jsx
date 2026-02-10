import { createLazyFileRoute } from '@tanstack/react-router'
import { Link } from "@tanstack/react-router";
export const Route = createLazyFileRoute('/')({
  component: Index
})

function Index() {
    return (
        <div className="index">
            <div className="index-brand">
                <h1>Welcome To pizza Point</h1>
                <p>Order your favorite pizza</p>
            </div>
            <ul>
                <li><Link to="/order">Order</Link></li>
                <li><Link to="/past">Past Orders</Link></li>
            </ul>

        </div>
    )
}
