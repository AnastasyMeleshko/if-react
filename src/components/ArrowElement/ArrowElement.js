import React from "react";
import "./ArrowElement.css";
import "../../assets/img/Sprite.svg";
import SvgIcon from "../SvgIcon/SvgIcon";

function ArrowElement(props) {
    const {className, onClick} = props;
    return (
        <div
            className={className}
            onClick={onClick}
        >
        <SvgIcon elemClass="arrow-element" svgClass="arrow-icon" viewBox="0 0 9 21" svgPath="M0.906062 19.8104L7.09531 11.6215C7.63127 10.9124 7.6349 9.93462 7.10421 9.22154L0.975893 0.986982"/>
        </div>
        )
}

export default ArrowElement;
