import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      className="prefix__socialIcon-32i0_n"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.377 4.105a3.015 3.015 0 012.122 2.135C24 8.124 24 12.055 24 12.055s0 3.93-.502 5.814a3.016 3.016 0 01-2.121 2.135c-1.872.505-9.377.505-9.377.505s-7.505 0-9.377-.505A3.016 3.016 0 01.502 17.87C0 15.985 0 12.055 0 12.055s0-3.93.502-5.815a3.015 3.015 0 012.121-2.135C4.495 3.6 12 3.6 12 3.6s7.505 0 9.377.505zm-5.559 7.95l-6.272 3.568V8.486l6.272 3.569z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgComponent;
