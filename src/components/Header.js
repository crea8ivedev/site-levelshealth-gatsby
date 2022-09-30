import React from "react";

const Header = () => {
  return (
    <div>
      {/* Logo */}
      <div>
        <img src="../images/full-logo.png" alt="logo" />
      </div>

      {/* Search */}
      <div>
        <input type="text" style={{ borderWidth: 1 }} />
      </div>

      {/* Secondary Menu */}
      <div>
        <ul>
          <li>Levels Blog</li>
          <li>Request Access</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;