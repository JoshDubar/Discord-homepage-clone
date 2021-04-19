import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={217}
      height={121}
      viewBox="0 0 217 121"
      fill="none"
      {...props}
    >
      <path
        d="M.2 120.901c134.5-80.7 216-120.6 216-120.6C113.5 14.5 53 59.2.2 120.9z"
        fill="url(#prefix__paint0_linear)"
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear"
          x1={340462}
          y1={72508.6}
          x2={340462}
          y2={4158.59}
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
