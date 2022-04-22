import React from "react";
import "./HeaderTop.css";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavItems from "./HeaderNavItems/HeaderNavItems";
import SignOut from "../ Authorization/SignOut/SignOut";

function HeaderTop() {
    return (
        <nav className="header-block col-lg-12">
            <HeaderLogo/>
            <HeaderNavItems/>
            <SignOut/>
        </nav>
    )
}

export default HeaderTop;
