import { useEffect, useState } from "react";

export default function useAutoIncreaseCounter(
  initialValue: number = 0,
  timer: number = 1000
) {
  const [count, setCount] = useState(initialValue);

  // Here there is no need to set the dependancy it will auto executed based on data change
  useEffect(() => {
    setTimeout(() => {
      setCount((prev) => prev + 1);
    }, timer);
  });

  return count;
}
