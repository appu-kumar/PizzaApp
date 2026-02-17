import { useState, useMemo, useCallback} from "react";
import Modal from "./Modal"
import Toast from "./Toast"
export default function Cart({cart, placeOrder}) {
    const [openModal, setOpenModal] = useState(false);
    const [showToast, setShowToast] = useState(false);

     const totalPrize = useMemo(() => {
  return cart.reduce((sum, item) => sum + item.prize, 0);
}, [cart]);


 const placeOrderHelper = useCallback(async () => {
  await placeOrder();
  setOpenModal(false);
  setShowToast(true);

  setTimeout(()=> {
    setShowToast(false);
  },3000)
}, [placeOrder]);

    return (
        <>
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
            
        <button
          onClick={() => setOpenModal(true)}
          disabled={cart.length === 0}
        >
          Place Order
        </button>
        </div>
         {openModal && (
        <Modal>
          <div className="confirm-modal">
            <h3>Confirm Your Order</h3>

            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  <strong>{item.pizza?.name}</strong> - {item.size} - ${item.prize}
                </li>
              ))}
            </ul>

            <hr />
            <h4>Total: ${totalPrize}</h4>

            <div style={{ marginTop: "20px" }}>
              <button onClick={placeOrderHelper}>
                Confirm Order
              </button>

              <button onClick={() => setOpenModal(false)}>
                Cancel
              </button>
            </div>
          </div>
        </Modal>
      )}

      {showToast && <Toast>Order placed successfully</Toast>}
        </>
    )
}