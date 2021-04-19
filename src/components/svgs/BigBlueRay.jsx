import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={1295}
      height={625}
      viewBox="0 0 1295 625"
      fill="none"
      {...props}
    >
      <path
        d="M1294.7-1C807.7 239.3 246.3 625 246.3 625H.1L853.8-1h440.9z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={1065980}
          y1={376369}
          x2={1065980}
          y2={21583.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#537FF5" />
          <stop offset={1} stopColor="#2A5EE8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default SvgComponent;
