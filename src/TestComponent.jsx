import { useRef } from "react";

export default function Example() {
  const countRef = useRef(0);

  function handleClick() {
    countRef.current += 1;
    console.log(countRef.current);
  }

  console.log("Example component rendered");

  return (
  <div>
    <button onClick={handleClick}>Click</button>
    <p>Count: {countRef.current}</p>
  </div>
)
}
