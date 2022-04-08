import React from "react";
import "./ButtonItem.css";

function ButtonItem(props) {

    return (
        <button onClick={props.onClick} className={props.className} name={props.name} type={props.type}>{props.btnText}</button>
    );
}

export default ButtonItem;
