import { useEffect, useState } from "react";
import useAutoIncreaseCounter from "../composables/useAutoIncreaseCounter";

function UseEffectHook() {
  const [showCounter, setShowCounter] = useState(false);

  // Empty array to execute it only once when the component mount
  useEffect(() => {
    setTimeout(() => {
      setShowCounter(true);
    }, 2000);
  }, []);

  const twoSecondCount = useAutoIncreaseCounter(0, 2000);

  return (
    <>
      <h1>Use Effect Hook</h1>
      {showCounter ? (
        <div className="default-box">
          <p>Two seconds increment counter :- {twoSecondCount}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default UseEffectHook;
