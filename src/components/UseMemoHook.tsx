import { useMemo, useState } from "react";

function UseMemoHook() {
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  // This is method is executed everytime the component rerenders and it is not required because the value change only on counter1 change
  const cubeOfCounterOne = (num: number) => {
    console.log("claculated");
    return Math.pow(num, 3); // Only need to calculate when this counter1 value changes
  };

  //const result = cubeOfCounterOne(counter1);

  //useMemo solve that for a value
  const result = useMemo(() => cubeOfCounterOne(counter1), [counter1]);
  // Here the cubeOfCounterOne is called on if counter1 is updated

  return (
    <>
      <h1>Use Memo Hook</h1>

      <div className="default-box">
        <p>Counter one :- {counter1}</p>
        <p>Cube is {result}</p>
        <button
          className="default-button"
          onClick={() => setCounter1((prev) => prev + 1)}
        >
          +
        </button>
      </div>

      <div className="default-box">
        <p>Counter two :- {counter2}</p>
        <button
          className="default-button"
          onClick={() => setCounter2((prev) => prev + 1)}
        >
          +
        </button>
      </div>
    </>
  );
}

export default UseMemoHook;
