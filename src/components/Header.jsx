import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "./Logowebsite";
import Nav from "./Nav";

export default function Header() {
  return (
    <header className="bg-white sticky top-0 z-[20] mx-auto flex w-full items-center justify-between border-b border-gray-500 p-4 position-fixed">
     <div className="flex items-center">
      <Logo />
      
      <h2 className="text-xl font-bold ml-2 mt-[-0.2in]">Rakshak</h2>
      </div>
      <Nav />
      </header>
  );
}





  