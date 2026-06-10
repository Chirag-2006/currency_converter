import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  const url = `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => setData(res[currency])) // issme res.currency nhi hoga kyoki phir ye obj.string hoga jo ki galat syntex hai
      .catch((err) => console.log("Error", err));
  }, [currency]);
  // console.log("data",data)
  return data;
}

export default useCurrencyInfo;
