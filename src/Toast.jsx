import {createPortal} from "react-dom";
import {useRef, useEffect} from "react";

export default function Toast({children}) {
  const elRef = useRef(null);
  /*
      elRef = { current: null}
  */
  if(!elRef.current){
      elRef.current = document.createElement("div");
  }

  useEffect(()=> {
        const toastRef = document.getElementById("toast");
        toastRef.appendChild(elRef.current);

      return () => toastRef.removeChild(elRef.current);
  },[]);

  return createPortal(
  <div className="toast">{children}</div>,
  elRef.current
);

}