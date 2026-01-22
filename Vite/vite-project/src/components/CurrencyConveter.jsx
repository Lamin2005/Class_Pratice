import React, { useEffect } from "react";
import useCurrencyRate from "../hooks/useCurrencyRate";
import { useState } from "react";
import CurrencySelectbox from "./CurrencySelectbox";

function CurrencyConveter() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("MMK");
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(null);

  const { rates, loading, error } = useCurrencyRate(fromCurrency);

  console.log(rates);

  const convertCurrency = () => {
    if (!loading && !error) {
      const rate = rates[toCurrency];
      const convertedAmount = amount * rate;
      setConvertedAmount(convertedAmount.toFixed(2));
    } else {
      setConvertedAmount(null);
    }
  };

  useEffect(() => {
    setConvertedAmount(null);
  }, [fromCurrency, toCurrency, amount]);

  return (
    <div className="w-md p-3 bg-amber-50 rounded-md">
      <h1 className="font-bold text-2xl flex justify-center items-center">
        Currency Conveter App
      </h1>
      <div className="my-3">
        <label htmlFor="currency" className="mb-1">
          Amount
        </label>
        <input
          type="number"
          id="currency"
          className="w-full py-1 px-2 border rounded-md my-1.5"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div className="flex justify-around items-center gap-3">
        <CurrencySelectbox
          label={"From"}
          currencies={Object.keys(rates)}
          selectedCurrency={fromCurrency}
          setCurrency={setFromCurrency}
        />
        <CurrencySelectbox
          label={"To"}
          currencies={Object.keys(rates)}
          selectedCurrency={toCurrency}
          setCurrency={setToCurrency}
        />
      </div>

      <button
        className="w-full p-3 bg-blue-500 hover:bg-blue-400 cursor-pointer mt-6 rounded-md text-white font-bold"
        onClick={convertCurrency}
      >
        Convert
      </button>

      <div className="w-full flex justify-center items-center p-3 text-gray-500">
        {loading && <p>Loading...</p>}
        {error && <p>Something went wrong!</p>}
        {convertedAmount === null && !loading && !error && (
          <p className="font-bold text-xl">Convert to see result</p>
        )}
        {!loading && !error && convertedAmount !== null && (
          <p className="font-bold text-xl">
            {amount} {fromCurrency} ={" "}
            <span className="text-blue-500">
              {convertedAmount} {toCurrency}
            </span>
          </p>
        )}
      </div>
    </div>
  );
}

export default CurrencyConveter;
