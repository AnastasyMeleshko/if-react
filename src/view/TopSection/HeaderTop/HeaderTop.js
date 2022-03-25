import React from "react";
import "./HeaderTop.css";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavItems from "./HeaderNavItems/HeaderNavItems";

function HeaderTop() {
    return (
        <nav className="header-block col-lg-12">
            <HeaderLogo/>
            <HeaderNavItems/>
        </nav>
    )
}

export default HeaderTop;
