import { NavLink } from "react-router-dom";     
const NavLinks = () => {
  return (
    <>
      <NavLink to="/" className="text-blue-500">Home</NavLink>
      <NavLink to="/about" className="text-blue-500">About</NavLink>
      <NavLink to="/contact" className="text-blue-500">Contact Us</NavLink>
      <NavLink
        to="/getstarted"
        className="text-white bg-red-500 px-4 py-2 rounded-md hover:bg-red-600 transition-colors duration-300"
      >
        Get Started
      </NavLink>
    </>
  );
};

const Nav = () => { 
    return (
        <nav className="w-1/3">
            <div className="flex justify-between">
        <NavLinks />
        </div>
        </nav>
    );
    }

export default Nav;