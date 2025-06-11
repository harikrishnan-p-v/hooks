import { useState } from "react";
import useCounter from "../composables/useCounter";

export default function UseStateHook() {
  let nonSateCount = 0;
  const [stateCount, setStateCount] = useState(0);

  const [car, setCar] = useState({
    brand: "BMW",
    color: "Black",
    year: "2025",
    model: "M5",
  });

  const updateNonStateCount = () => {
    nonSateCount += 1;
    console.log(`Non State Count value : ${nonSateCount}`);
  };

  const updateStateCount = () => {
    setStateCount((prev) => prev + 1);
  };

  const updateColor = () => {
    setCar((prev) => ({ ...prev, color: "red" }));
  };

  const composableCounter = useCounter(0);

  return (
    <>
      <h1>Use State Hook</h1>
      <div className="default-box">
        <button className="default-button" onClick={updateNonStateCount}>
          Click to update Non State Count = {nonSateCount}
        </button>

        <button className="default-button" onClick={updateStateCount}>
          Click to update Non State Count = {stateCount}
        </button>
      </div>

      <div className="default-box">
        <p>
          I have a {car.year} {car.brand} {car.model} car with color {car.color}
        </p>
        <button className="default-button" onClick={updateColor}>
          Click to update color to red
        </button>
      </div>

      <div className="default-box">
        <p>Composable Counter</p>
        <button
          className="default-button"
          onClick={composableCounter.incrementCount}
        >
          Increment count value = {composableCounter.count}
        </button>
        <button
          className="default-button"
          onClick={composableCounter.decrementCount}
        >
          Decrement count value = {composableCounter.count}
        </button>
      </div>
    </>
  );
}
