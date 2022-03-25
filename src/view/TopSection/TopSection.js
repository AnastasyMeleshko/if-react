import React from "react";
import "./TopSection.css";
import HeaderTop from "./HeaderTop/HeaderTop";
import HeaderContent from "./HeaderContent/HeaderContent";

class TopSection extends React.Component {
    render() {
        return (
            <header className="top-section">
                <div className="top-section-background">
                    <div className="top-section-wrapper container">
                        <HeaderTop/>
                        <HeaderContent/>
                    </div>
                </div>
            </header>
        )
    }
}

export default TopSection;
