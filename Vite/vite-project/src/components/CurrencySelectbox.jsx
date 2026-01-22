import React from "react";

function CurrencySelectbox({ label, currencies, selectedCurrency, setCurrency }) {
  return (
    <div className="w-full flex justify-center flex-col">
      <label htmlFor="select">{label}</label>
      <select
        id="select"
        className="w-full border py-1 px-2 rounded-md"
        value={selectedCurrency}
        onChange={(e) => setCurrency(e.target.value)}
      >
        {currencies.map((currency, index) => {
          return (
            <option value={currency} key={index}>
              {currency}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default CurrencySelectbox;
