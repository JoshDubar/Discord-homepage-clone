import * as React from "react";

function SvgComponent(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={7} height={5} {...props}>
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h7v5H0z" />
        <path d="M0 1l3.488 2.737L6.975 1" stroke="#FFF" />
      </g>
    </svg>
  );
}

export default SvgComponent;
