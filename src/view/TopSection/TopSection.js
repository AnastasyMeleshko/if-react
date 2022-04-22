import React from "react";
import "./TopSection.css";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderContent from "./HeaderContent/HeaderContent";
import AuthorizationForm from "./ Authorization/AuthorizationForm/AuthorizationForm";

function TopSection(props)  {

    const setSearchValue = props.setSearchValue;

        return (
            <header className="top-section">
                <div className="top-section-background">
                    <div className="top-section-wrapper container">
                        <HeaderTop/>
                        <HeaderContent setSearchValue={setSearchValue}/>
                        <AuthorizationForm/>
                    </div>
                </div>
            </header>
        )
}

export default TopSection;
