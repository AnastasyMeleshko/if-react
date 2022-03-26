import React from "react";
import "./SvgIcon.css";

function SvgIcon(props) {
    const elemClass = props.elemClass;
    const svgClass = props.svgClass;
    const viewBox = props.viewBox;
    const svgPath = props.svgPath;
    const useId = props.id;

    return (
        <div className={elemClass}>
            <svg className={svgClass} viewBox={viewBox} id={useId} xmlns="http://www.w3.org/2000/svg">
                <path d={svgPath}/>
            </svg>
        </div>
    )
}

export default SvgIcon;
