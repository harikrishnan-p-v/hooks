import React, { useMemo } from "react";
import useCounter from "../composables/useCounter";

function CounterComponent({ func }: { func: () => void }) {
  console.log("Component rendered");
  const counter = useCounter(0);

  const renderStatus = useMemo(() => {
    return `Counter renderd with count ${counter.count * 10}`;
  }, [counter.count]);

  func();

  return (
    <>
      <div className="default-box">
        <p>{counter.count}</p>
        <button className="default-button" onClick={counter.incrementCount}>
          +
        </button>
        <p>{renderStatus}</p>
        <p></p>
      </div>
    </>
  );
}

export default React.memo(CounterComponent);
