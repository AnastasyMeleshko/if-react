import React from "react";
import "./BurgerLine.css";

function BurgerLine(props) {
    const lineClass = `burger-line` + ` ` + `burger-line-` + `${props.lineNumber}`;
    return (
        <div className={lineClass}>
        </div>
    )
}

export default BurgerLine;
