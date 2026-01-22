import React, { useEffect, useState } from "react";

function useCurrencyRate(baseURL) {
  const [rates, setRate] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetching = async () => {
    try {
      const url = `https://v6.exchangerate-api.com/v6/c754436fa58bc064dc434331/latest/${baseURL}`;
      const response = await fetch(url);
      const data = await response.json();
      setRate(data.conversion_rates);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, [baseURL]);

  return { rates, loading, error };
}

export default useCurrencyRate;
