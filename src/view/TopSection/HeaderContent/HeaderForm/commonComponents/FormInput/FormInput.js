import React from "react";
import "./FormInput.css";

function FormInput(props) {
    const inputId = props.id;
    const inputType = props.type;
    const inputName = props.name;
    const inputClass = `form-input` + ` ` + `${props.className}`;
    const offText = "off";
    const required = props.required;

        return (
            <input type={inputType} id={inputId} className={inputClass} name={inputName} key={inputId} autoComplete={offText} required={required}/>
        );
    }


export default FormInput;
