import React from "react";
import "./HeaderContent.css";

import HeaderTitle from "./HeaderTitle/HeaderTitle";
import HeaderForm from "./HeaderForm/Headerform";
import HeaderDownloads from "./HeaderDownloads/HeaderDownloads";

function HeaderContent(props) {

    const setSearchValue = props.setSearchValue;

        return (
            <div className="main-header-content">
                <HeaderTitle/>
                    <HeaderForm setSearchValue={setSearchValue}/>
                <HeaderDownloads/>
            </div>
        );

}

export default HeaderContent;
