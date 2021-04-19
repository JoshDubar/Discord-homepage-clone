import React from "react";
import DiscordLogo from "./svgs/DiscordLogo";
import Button from "./Button";

const NavLink = ({ href, children }) => (
  <a className="m-2 p-2 text-white leading-tight font-bold" href={href}>
    {children}
  </a>
);

const NavBar = () => {
  return (
    <header className="flex items-center w-screen justify-center bg-transparent z-50">
      <nav className="h-20 w-full max-w-screen-xl	flex flex-row px-10 items-center justify-between">
        <DiscordLogo className="text-white cursor-pointer" />
        <div>
          <NavLink href="">Download</NavLink>
          <NavLink href="">Why Discord?</NavLink>
          <NavLink href="">Nitro</NavLink>
          <NavLink href="">Safety</NavLink>
          <NavLink href="">Support</NavLink>
        </div>

        <Button>Login</Button>
      </nav>
    </header>
  );
};

export default NavBar;
