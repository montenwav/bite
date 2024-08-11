import { useEffect, useState } from "react";
import { zipCodesType } from "../Provider";

export const useFetch = (url: string) => {
  // prettier-ignore
  const [result, setResult] = useState<zipCodesType[] | Record<string, string>>([]);

  useEffect(() => {
    (async () => {
      let didMount = false;
      try {
        const response = await fetch(url);
        const json = await response.json();

        if (!response.ok) {
          console.error("Server error");
        }
        if (!didMount) {
          setResult(json);
        }
        didMount = true;
      } catch (err) {
        console.error(`Promise error: ${err}`);
      }
    })();
  }, [url]);
  return result;
};
