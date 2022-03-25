import React from "react";
import "./HeaderForm.css";
import DestinationShownInput from "./DestinationShownInput/DestinationShownInput";
import FiltersInForm from "./FiltersInForm/FiltersInForm";
import OtherInputsContainer from "./OtherInputsContainer/OtherInputsContainer";

class HeaderForm extends React.Component {
    render() {
        return (
            <form action="" className="form-main col-lg-12">
                <DestinationShownInput/>
                <OtherInputsContainer/>
                <FiltersInForm/>
            </form>
        );
    }
}

export default HeaderForm;
