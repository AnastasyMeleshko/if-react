import React from "react";
import "./SignOut.css";
import SvgIcon from "../../../../components/SvgIcon/SvgIcon";

const SignOut = ({ setUser }) => {

    const logout = () => {
        setUser(null);
    }

    return (
                <div className="sign-out" onClick={logout}>
                    <SvgIcon
                        elemClass="sign-out-img"
                        svgClass="sign-out-svg"
                        id="sign-out"
                        viewBox="0 0 20 18"
                        svgPath="M15 4L13.59 5.41L16.17 8H6V10H16.17L13.59 12.58L15 14L20 9L15 4ZM2 2H10V0H2C0.9 0 0 0.9 0 2V16C0 17.1 0.9 18 2 18H10V16H2V2Z"/>
                    <p className="sign-out-text-block">Sign out</p>
                </div>
    )
}

export default SignOut;
