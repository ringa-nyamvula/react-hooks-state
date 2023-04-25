import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    console.log(count);
    // => 0

    setCount(count + 1);
    // equivalent to setCount(0 + 1)

    console.log(count);
    // => 0

    setCount(count + 1);
    // equivalent to setCount(0 + 1)

    console.log(count);
    // => 0
  }
    
  return <div onClick={increment}>{count}</div>;
  }

export default Counter;
