import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={390}
      height={227}
      viewBox="0 0 390 227"
      fill="none"
      {...props}
    >
      <path
        d="M389.2 0C278.4 62.4 147.9 137.8.4 226.2 73 141.4 149.4 65.2 236.1 0h153.1z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={287258}
          y1={135998}
          x2={287258}
          y2={7799.38}
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
