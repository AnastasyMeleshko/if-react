import React from "react";
import "./HeaderContent.css";

import HeaderTitle from "./HeaderTitle/HeaderTitle";
import HeaderForm from "./HeaderForm/Headerform";
import HeaderDownloads from "./HeaderDownloads/HeaderDownloads";

class HeaderContent extends React.Component {
    render() {
        return (
            <div className="main-header-content">
                <HeaderTitle/>
                <HeaderForm/>
                {/*<div className="date-picker">*/}
                {/*    <div className="selected-date"></div>*/}
                {/*    <div className="dates">*/}
                {/*        <div className="months-first">*/}
                {/*            <div className="month">*/}
                {/*                <div className="arrows prev-mth">&lt;</div>*/}
                {/*                <div className="mth"></div>*/}
                {/*                <div className="arrows next-mth">&gt;</div>*/}
                {/*            </div>*/}
                {/*            <div className="days"></div>*/}
                {/*        </div>*/}
                {/*        <div className="months-second">*/}
                {/*            <div className="month">*/}
                {/*                <div className="mth"></div>*/}
                {/*            </div>*/}
                {/*            <div className="days"></div>*/}
                {/*        </div>*/}
                {/*        <div className="dates-buttons">*/}
                {/*            <button className="check-in-btn">Check-in date</button>*/}
                {/*            <button className="check-out-btn">Check-out date</button>*/}
                {/*            <button className="clear-btn">Clear</button>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <HeaderDownloads/>
            </div>
        );
    }
}

export default HeaderContent;
