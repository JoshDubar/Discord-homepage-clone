import React from "react";

const sizes = {
  sm: {
    padding: "2",
    fontSize: "sm",
  },
  xl: {
    padding: "4",
    fontSize: "xl",
  },
};

const Button = ({
  children,
  size = "sm",
  inverted = false,
  className,
  color = "black",
}) => {
  const { padding, fontSize } = sizes[size];
  return (
    <button
      className={
        `text-${inverted ? "white" : color} bg-${
          inverted ? color : "white"
        } radius-2.5 text-${fontSize} px-${padding *
          2} py-${padding} rounded-full ` + className
      }
      style={{ boxShadow: "0 8px 15px rgb(0 0 0 / 20%)" }}
    >
      {children}
    </button>
  );
};

export default Button;
