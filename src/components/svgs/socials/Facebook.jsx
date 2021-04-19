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
        fill="currentColor"
        d="M20.875 2H3.094C2.469 2 2 2.5 2 3.094v17.781c0 .625.5 1.094 1.094 1.094h9.594v-7.75h-2.626v-3.031h2.594v-2.22c0-2.593 1.563-4 3.875-4 1.094 0 2.063.095 2.344.126V7.78h-1.594c-1.25 0-1.5.594-1.5 1.469v1.938h3l-.375 3.062h-2.593V22h5.093c.625 0 1.094-.5 1.094-1.094V3.125C22 2.469 21.5 2 20.875 2z"
      />
    </svg>
  );
}

export default SvgComponent;
