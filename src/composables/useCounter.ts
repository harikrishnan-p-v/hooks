import { useState } from "react";

export default function useCounter(initialValue: number) {
  const [count, setCount] = useState(initialValue);

  const incrementCount = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCount = () => {
    setCount((prev) => prev - 1);
  };

  return { count, incrementCount, decrementCount };
}
