import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className="prefix__icon-nuGd5b mr-2"
      {...props}
    >
      <g fill="currentColor">
        <path d="M17.707 10.708l-1.414-1.414L13 12.587V2.001h-2v10.586L7.707 9.294l-1.414 1.414L12 16.415l5.707-5.707zM18 18.001v2H6v-2H4v2c0 1.102.897 2 2 2h12c1.104 0 2-.898 2-2v-2h-2z" />
      </g>
    </svg>
  );
}

export default SvgComponent;
