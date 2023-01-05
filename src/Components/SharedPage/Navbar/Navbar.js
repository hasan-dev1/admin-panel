import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarItem = [
    <li key={1}>
      <Link to={'/'}>Home</Link>
    </li>,
    <li key={2}>
      <Link to={'/'}>Service</Link>
    </li>,
    <li key={3}>
      <Link to={'/'}>Blogs</Link>
    </li>,
  ];
  return (
    <div className="w-4/5 mx-auto">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navbarItem}
            </ul>
          </div>
          <Link to={'/'} className="btn btn-ghost normal-case text-xl text-primary lg:flex hidden">
            Admin Panel
          </Link>
          <ul className="menu menu-horizontal px-1 text-primary lg:flex hidden">
            {navbarItem}
          </ul>
        </div>
        <div className="navbar-center hidden lg:flex"></div>
        <div className="navbar-end">
          <div className="flex justify-end items-center text-primary font-bold">
            <Link to={"/dashboard"} className="mr-3 lg:block hidden">
              Admin-Dashboard
            </Link>
            <Link to={"/dashboard"} className="mr-3 lg:hidden flex">
              Dashboard
            </Link>
            <h3 className="mr-3">Name</h3>
            <img
              className="w-7 h-7 rounded-full"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
