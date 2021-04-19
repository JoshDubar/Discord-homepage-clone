import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={997}
      height={398}
      viewBox="0 0 997 398"
      fill="none"
      {...props}
    >
      <path
        opacity={0.1}
        d="M996.5 0C546.3 174.7.3 398 .3 398c145.2-97.4 589-335.5 762.6-398h233.6z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={1787580}
          y1={269279}
          x2={1787580}
          y2={15442.4}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#7196FF" />
          <stop offset={1} stopColor="#7196FF" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
