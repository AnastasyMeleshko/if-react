import React from "react";
import "./DestinationHiddenInput.css";
import SvgIcon from "../../../../../../components/SvgIcon/SvgIcon";
import FormInput from "../../commonComponents/FormInput/FormInput";
import FormLabel from "../../commonComponents/FormLabel/FormLabel";

function DestinationHiddenInput(props) {

    const funcForChange = props.funcForChange;
    const name = props.name;

    return (
        <div className="form-destination-hidden form-item">
            <SvgIcon elemClass="form-img-loupe" svgClass="form-loupe" id="loupe" viewBox="0 0 16 16" svgPath="M11.4351 10.0629H10.7124L10.4563 9.81589C11.3528 8.77301 11.8925 7.4191 11.8925 5.94625C11.8925 2.66209 9.23042 0 5.94625 0C2.66209 0 0 2.66209 0 5.94625C0 9.23042 2.66209 11.8925 5.94625 11.8925C7.4191 11.8925 8.77301 11.3528 9.81589 10.4563L10.0629 10.7124V11.4351L14.6369 16L16 14.6369L11.4351 10.0629V10.0629ZM5.94625 10.0629C3.66838 10.0629 1.82962 8.22413 1.82962 5.94625C1.82962 3.66838 3.66838 1.82962 5.94625 1.82962C8.22413 1.82962 10.0629 3.66838 10.0629 5.94625C10.0629 8.22413 8.22413 10.0629 5.94625 10.0629Z"/>
            <FormInput  onChange={funcForChange} value={name} type="text" id="user-destination-hidden" className="input-destination" name="user-destination" required="required"/>
            <FormLabel className="label-destination-hidden label-destination" htmlFor="user-destination-hidden" labelText="Your destination or hotel name"/>
        </div>
    );
}


export default DestinationHiddenInput;
