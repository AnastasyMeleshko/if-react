import React, { useState} from "react";
import {useNavigate} from "react-router-dom";
// import PropTypes from "prop-types";
import "./HeaderForm.css";
import DestinationShownInput from "./DestinationShownInput/DestinationShownInput";
import FiltersInForm from "./FiltersInForm/FiltersInForm";
import OtherInputsContainer from "./OtherInputsContainer/OtherInputsContainer";

const useForm = (setSearchValue) => {

    const navigate = useNavigate();

    const [values, setValues] = useState({

    });


    // const availableItemsBlock = document.querySelector(".available-items-slider");

    const handleScroll = (section) => {
        if ((section !== null) && (section.innerHTML !== "")) {
            section.scrollIntoView( { behavior: 'smooth', block: 'start' } );
        }
        // else {
        //     alert("Please check your search request");
        // }

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/hotels");
        const section = document.querySelector( '.available-items-slider' );
        handleScroll(section);

    }

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name] : e.target.value,
        });

        if (e.target.name === `user-destination`) {
            setSearchValue(e.target.value);
        }

        // destination inputs the same value update

        if (e.target.id === `user-destination`) {
            document.getElementById("user-destination-hidden").value = `${e.target.value}`;
        }

        if (e.target.id === `user-destination-hidden`) {
            document.getElementById("user-destination").value = `${e.target.value}`;
        }

        // form-numbers inputs values update from main bg divs with numbers
        const formLabelAdults = document.querySelector(".form-label-adults");
        const adultsNumber = formLabelAdults.innerHTML.slice(0,1);
        const inputAdults = document.getElementById("form-user-adults");
        inputAdults.value = `${adultsNumber}`;

        const formLabelChildren = document.querySelector(".form-label-children");
        const childrenNumber = formLabelChildren.innerHTML.slice(0,1);
        const inputChildren = document.getElementById("form-user-children");
        inputChildren.value = `${childrenNumber}`;

        const formLabelRooms = document.querySelector(".form-label-rooms");
        const roomsNumber = formLabelRooms.innerHTML.slice(0,1);
        const inputRooms = document.getElementById("form-user-rooms");
        inputRooms.value = `${roomsNumber}`;

    };

    return {
        values,
        handleSubmit,
        handleChange,
    };
}

const HeaderForm = ( {setSearchValue} ) => {

    const { values, handleSubmit, handleChange } = useForm(setSearchValue);
    const name = values.name;

        return (
            <form onSubmit={handleSubmit} action="" className="form-main col-lg-12">
                <DestinationShownInput funcForChange={handleChange} value={name}/>
                <OtherInputsContainer funcForChange={handleChange} value={name}/>
                <FiltersInForm/>
            </form>
        );

        // HeaderForm.propTypes = {
        //     setSearchValue: PropTypes.func;
        // }

}

export default HeaderForm;
