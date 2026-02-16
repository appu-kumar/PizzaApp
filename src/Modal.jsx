import {useEffect, useRef} from "react";
import {createPortal} from "react-dom";

export default function Modal({children}){
      const elRef = useRef(null);
      if(!elRef.current){
        elRef.current = document.createElement("div");
      }

      useEffect(() => {
        const modalRoot = document.getElementById("root-modal");
        modalRoot.appendChild(elRef.current);
        document.body.style.overflow = "hidden";

        return () => {
            modalRoot.removeChild(elRef.current);
            document.body.style.overflow = "auto";
        }
      },[]);

    return createPortal(
        <div className="modal-overlay">
            <div className="modal-content">
            {children}
            </div>
        </div>,
       elRef.current);

}
/*
useRef vs useState.
**********************
If you want UI update → useState
If you want storage without UI update → useRef

useRef does not re-render the component, useState does re-render the component.
useRef is used to store a mutable value that persists across renders without causing re-renders.

*/

/*
createPortal:- 
First argument → What to render
Second argument → Where to render in DOM

React Portal allows rendering a component outside its parent DOM hierarchy while keeping it inside the React component tree.

🧾 When Should You Use React Portal?
Use it when:
✔ You need overlay components
✔ You face z-index issues
✔ Parent has overflow: hidden
✔ You want cleaner DOM structure
✔ You are building UI libraries


Real Use Cases in Industry
Most UI libraries use Portal:
Material UI → Dialog component
Ant Design → Modal component
Chakra UI → Drawer component
They all use React Portal internally.


*/