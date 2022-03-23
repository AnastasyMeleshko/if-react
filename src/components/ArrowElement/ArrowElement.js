import React from "react";
import "./ArrowElement.css";
import "../../assets/img/Sprite.svg";

function ArrowElement() {
    return (
        <div className="arrow-element">
            <svg className="arrow-icon" viewBox="0 0 9 21" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.906062 19.8104L7.09531 11.6215C7.63127 10.9124 7.6349 9.93462 7.10421 9.22154L0.975893 0.986982"/>
            </svg>
        </div>
    )
}

export default ArrowElement;
