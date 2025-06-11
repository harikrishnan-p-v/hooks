import React, { useCallback } from "react";
import useCounter from "../composables/useCounter";
import CounterComponent from "./CounterComponent";

function UseCallbackHook() {
  const counter = useCounter(0);

  //const func = () => {}; // this fuctional prop will make component rerender

  const func = useCallback(() => {
    console.log("Prop passed");
  }, []);
  return (
    <>
      <h1>Use Callback Hook</h1>
      <div className="default-box">
        <p>count :- {counter.count}</p>
        <button className="default-button" onClick={counter.incrementCount}>
          +
        </button>
      </div>

      <CounterComponent func={func} />
    </>
  );
}

export default React.memo(UseCallbackHook);
