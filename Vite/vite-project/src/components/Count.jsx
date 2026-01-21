import React, { useState } from "react";

function Count() {
  let [count, setCount] = useState(0);

  return (
    <div className="w-3xs has-[100vh] flex items-center justify-center flex-col bg-blue-200 gap-4 p-3 rounded-md">
      <h1 className="text-2xl font-bold">Counter App</h1>
      <p className="text-2xl">Your Count : {count}</p>
      <div className="space-x-2">
         <button onClick={() => setCount(count + 1)} className="border-2 py-1 px-6 bg-black text-white cursor-pointer rounded-md">+</button>
      <button onClick={() => setCount(count - 1)}
        className="border-2  py-1 px-6 bg-black text-white cursor-pointer rounded-md">-</button>
      </div>
    </div>
  );
}

export default Count;
