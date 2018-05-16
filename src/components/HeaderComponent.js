import React from "react";

const HeaderComponent = () => {
  return (
    <nav>
      <div class="nav-wrapper container">
        <a href="#" class="brand-logo">
          Martini Shot
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
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

export default HeaderComponent
