import React from "react";
import "./HeaderIcon.css";

function HeaderIcon(props) {

    const pathUse = props.path;
    const useClasses = `header-icon` + ` ` + `${props.className}`;

    return (
            <a href="#">
                    <svg className={useClasses} viewBox={props.viewBox} xmlns="http://www.w3.org/2000/svg">
                        <path d={pathUse}/>
                    </svg>
            </a>
    )
}

export default HeaderIcon;
