import React from "react";
import "./HeaderTop.css";

import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavItems from "./HeaderNavItems/HeaderNavItems";
import SignOut from "../ Authorization/SignOut/SignOut";

function HeaderTop({ user, setUser }) {

       return (
            <nav className="header-block col-lg-12">
                <HeaderLogo/>
                <HeaderNavItems user={user}/>
                {user && (
                    <SignOut setUser={setUser}/>
                )}
            </nav>
        )

}

export default HeaderTop;
