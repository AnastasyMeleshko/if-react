import React from "react";
import "./HeaderItem.css";

function HeaderItem(props) {
        return (
            <>
                <a className="header-item"  href={props.href}>{props.context}</a>
            </>
        );
}

export default HeaderItem;
