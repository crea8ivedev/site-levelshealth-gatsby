import React from "react";
import { Link } from "gatsby";
import "./Header.css";

const Header = () => {
  return (
    <header className="header absolute top-0 z-999 w-full lg:py-50 py-25 border-b-1 border-black border-opacity-20">
      <div className="container-fluid">
        <div className="flex flex-wrap items-center justify-between">
          <div className="logo">
            <Link to="/">
              <img src="../images/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="navbar">
            <ul className="flex flex-wrap gap-x-10 smscreen2:gap-x-5">
              <li><Link to="/">Levels Blog</Link></li>
              <li><Link to="/">Request Access</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header;