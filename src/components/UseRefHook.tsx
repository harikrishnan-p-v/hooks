import { useEffect, useRef } from "react";
import useCounter from "../composables/useCounter";

function UseRefHook() {
  const counter = useCounter(0);

  let value = 10;

  const nonStateCount = useRef(0);

  // The value of nonStateCount remain same in every rerenders but the value is reset on rerender
  useEffect(() => {
    nonStateCount.current += 1;
    console.log("render.....");
  });

  const updateRef = () => {
    nonStateCount.current += 1;
    value += 1;
    console.log(nonStateCount.current, value);
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const nameAlert = () => {
    alert(nameRef.current?.value);
  };

  return (
    <>
      <h1>Use Ref Hook</h1>
      <div className="default-box">
        <p>{counter.count}</p>
        <div>
          <button className="default-button" onClick={counter.incrementCount}>
            +
          </button>
          <button className="default-button" onClick={counter.decrementCount}>
            -
          </button>
        </div>
      </div>

      <div className="default-box">
        <p>{nonStateCount.current}</p>
        <button className="default-button" onClick={updateRef}>
          click {value}
        </button>
      </div>

      <div className="default-box">
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter the name"
          ref={nameRef}
        />
        <button className="default-button" onClick={nameAlert}>
          Click me
        </button>
      </div>
    </>
  );
}

export default UseRefHook;
