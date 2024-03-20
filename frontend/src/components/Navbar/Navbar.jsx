import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md shadow-slate-300 flex justify-between items-center pl-10 pr-60">
      <h1 className="text-2xl font-extrabold text-primary">tealthy</h1>
      <ul className="flex gap-5 py-5">
        <li>Link 1</li>
        <li>Link 2</li>
        <li>Link 3</li>
        <li>Link 4</li>
        <li>Link 5</li>
      </ul>
    </nav>
  );
};

export default Navbar;
