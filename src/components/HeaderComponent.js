import React from "react";

const HeaderComponent = () => {
  return (
    <nav className="navigation red m12 s12 z-depth-0">
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Martini Shot
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="badges.html">LogIn</a>
          </li>
          <li>
            <a href="collapsible.html">SignUp</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HeaderComponent;
