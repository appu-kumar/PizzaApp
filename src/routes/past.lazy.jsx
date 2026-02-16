import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { createLazyFileRoute } from "@tanstack/react-router";
import getPastOrders from "../api/getPastOrders";
import Modal from "../Modal";
import getPastOrder from "../api/getPastorder";

export const Route  = createLazyFileRoute('/past')({
    component: PastOrder
})

function PastOrder() {
    const [page, setPage] = useState(1);
    const [focusedOrder, setFocusedOrder] = useState(null);
   
    const {isLoading, data} = useQuery({
        queryKey: ["past-order", page],
        queryFn: () => getPastOrders(page),
        staleTime: 30000,
    })

    const {data: pastOrder, isLoading: pastOrderLoading} = useQuery({
        queryKey: ["past-order", focusedOrder],
        queryFn: () => getPastOrder(focusedOrder),
        enabled: !!focusedOrder
    })

    if(isLoading) {
        return <div className="past-orders">
            <h2>Loading Past Orders...</h2>
        </div>
    }

    return (
        
        <div className="past-orders">
           <table>
             <thead>
                <tr>
                <td>ID</td>
                <td>Date</td>
                <td>Time</td>
                </tr>
             </thead>
             <tbody>
                {data.map(order => {
                    return (<tr key={order.order_id}>
                        <button style={{border: "none", background: "none", cursor: "pointer"}} onClick={()=> setFocusedOrder(order.order_id)}><td>{order.order_id}</td></button>
                        <td>{order.date}</td>
                        <td>{order.time}</td>
                    </tr>)
                }
                )}
             </tbody>
           </table>
            <div className="pages">
               <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)}>Previous</button>
               <button disabled={page >= data.length} onClick={() => setPage((p) => p + 1)}>Next</button>
            </div>

             {!!focusedOrder && <Modal>
            {pastOrderLoading ? <h2>Loading Order Details...</h2>:
            <div>
                <h2>Order #{focusedOrder}</h2>
                <table>
                    <thead>
                        <tr>
                            <td>Image</td>
                            <td>Name</td>
                            <td>Size</td>
                            <td>Quantity</td>  
                            <td>Price</td>
                            <td>Total</td>
                        </tr>
                    </thead>
                    <tbody>
                        {pastOrder.orderItems.map((item)=> (
                            <tr key={item.id}>
                               <td><img src={item.image} alt={item.name} width={50}/></td>
                               <td>{item.name}</td>
                               <td>{item.size}</td>
                               <td>{item.quantity}</td>
                               <td>${item.price}</td>
                               <td>${item.total}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>}
            <button onClick={() => setFocusedOrder(null)}>close</button>
            </Modal>}
        </div> 
    )
}