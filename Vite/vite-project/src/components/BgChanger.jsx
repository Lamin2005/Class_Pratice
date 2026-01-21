import React, { useState } from "react";
import BgText from "./BgText";

function BgChanger() {
  let colors = ["ghostwhite", "red", "green", "blue"];
  let [bgColor, setbgColor] = useState("ghostwhite");

  return (
    <div
      className="p-3 flex items-center justify-center flex-col gap-4 rounded-md"
      style={{ backgroundColor: bgColor }}
    >
      <h1 className="text-2xl font-bold">Background Changer</h1>
      <div className="w-full flex justify-center items-center gap-2">
        {colors.map((color, index) => {
          return (
            <div
              key={index}
              className="w-8 h-8 rounded-2xl cursor-pointer border-4 border-black"
              style={{ backgroundColor: color }}
              onClick={() => setbgColor(color)}
            ></div>
          );
        })}
      </div>
      <BgText Bgtext={bgColor}/>
    </div>
  );
}

export default BgChanger;
