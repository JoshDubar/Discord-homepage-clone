import React from "react";
import Wave from "./svgs/Wave";

const WaveBreak = ({ color = "grey" }) => {
  return (
    <div
      className={`text-${color} h-full bg-${
        color === "grey" ? "white" : "grey"
      }`}
    >
      <Wave />
    </div>
  );
};

export default WaveBreak;
