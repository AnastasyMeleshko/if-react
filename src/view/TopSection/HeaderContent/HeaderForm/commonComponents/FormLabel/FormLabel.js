import React from "react";
import "./FormLabel.css";

function FormLabel(props) {
    const labelClass = `form-label` + ` ` + `${props.className}`;
    const htmlFor = props.htmlFor;
    const labelText = props.labelText;

    return (
        <label className={labelClass} htmlFor={htmlFor} key={htmlFor}>{labelText}</label>
    );
}


export default FormLabel;
