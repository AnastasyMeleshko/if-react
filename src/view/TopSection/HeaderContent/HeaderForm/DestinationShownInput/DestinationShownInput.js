import React from "react";
import "./DestinationShownInput.css";
import FormInput from "../commonComponents/FormInput/FormInput";
import FormLabel from "../commonComponents/FormLabel/FormLabel";

function DestinationShownInput(props) {

    const funcForChange = props.funcForChange;
    const name = props.name;

    return (
        <div className="form-destination form-destination-shown form-item">
            <FormInput onChange={funcForChange} value={name} type="text" id="user-destination" className="input-destination" name="user-destination" required="required"/>
            <FormLabel className="label-destination" htmlFor="user-destination" labelText="Your destination or hotel name"/>
        </div>
    );
}


export default DestinationShownInput;
