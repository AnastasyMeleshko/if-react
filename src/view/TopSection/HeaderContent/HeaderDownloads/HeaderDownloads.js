import React from "react";
import "./HeaderDownloads.css";
import GooglePlayPng from "../../../../assets/img/Google-play.png";
import AppStorePng from "../../../../assets/img/App-store.png";

class HeaderDownloads extends React.Component {
    render() {
        return (
            <div className="header-download-app col-lg-12">
                <a href="#" target="_blank"><img src={GooglePlayPng} alt="Google-play"/></a>
                <a href="#" target="_blank"><img src={AppStorePng} alt="App-store"/></a>
            </div>
        );
    }
}

export default HeaderDownloads;
