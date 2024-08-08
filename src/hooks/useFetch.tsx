import { useEffect, useState } from "react";
import { phoneCodesType, zipCodesType } from "../components/checkout//CheckoutForms";

export const useFetch = (url: string) => {
  // prettier-ignore
  const [result, setResult] = useState<phoneCodesType[] | zipCodesType[] | Record<string, string>>([]);

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
