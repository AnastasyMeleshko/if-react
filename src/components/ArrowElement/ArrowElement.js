import React from "react";
import "./ArrowElement.css";

function ArrowElement() {
    return (
        <div className="arrow-element">
            <svg className="arrow-icon">
                <use href="../../img/Sprite.svg/#arrow"></use>
            </svg>
        </div>
    )
}

export default ArrowElement;
