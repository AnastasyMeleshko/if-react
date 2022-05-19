import React, {useState} from "react";
import "./HeaderTop.css";
import HeaderLogo from "./HeaderLogo/HeaderLogo";
import HeaderNavItems from "./HeaderNavItems/HeaderNavItems";
import SignOut from "../ Authorization/SignOut/SignOut";

function HeaderTop({ user, setUser, handleThemeClick}) {
    const [isOpenLogOut, setIsOpenLogOut] = useState({
        isOpen : false,
    });

       return (
            <nav className="header-block col-lg-12">
                <HeaderLogo/>
                <HeaderNavItems handleThemeClick={handleThemeClick} user={user} isOpenLogOut={isOpenLogOut} setIsOpenLogOut={setIsOpenLogOut}/>
                {user && isOpenLogOut.isOpen && (
                    <SignOut setUser={setUser}/>
                )}
            </nav>
        )

}

export default HeaderTop;
