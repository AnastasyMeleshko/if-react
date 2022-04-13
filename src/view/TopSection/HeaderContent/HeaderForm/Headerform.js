import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import "./HeaderForm.css";
import DestinationShownInput from "./DestinationShownInput/DestinationShownInput";
import FiltersInForm from "./FiltersInForm/FiltersInForm";
import OtherInputsContainer from "./OtherInputsContainer/OtherInputsContainer";

const useForm = (setSearchValue) => {

    const navigate = useNavigate();
    const [values, setValues] = useState({});
    const [isToggleNumbers, setIsToggleNumbers] = useState(false);
    const [borderNumbersWrapColor, setBorderNumbersWrapColor] = useState(`transparent`);
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(1);

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/hotels");
    }

    const handleNumbersWrapClick = () => {
        setIsToggleNumbers(!isToggleNumbers);
        if (isToggleNumbers === false) {
            setBorderNumbersWrapColor(`#f5bd41`);
        } else {
            setBorderNumbersWrapColor(`transparent`);
        }
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

        // // form-numbers inputs values update from main bg divs with numbers
        // const formLabelAdults = document.querySelector(".form-label-adults");
        // const adultsNumber = formLabelAdults.innerHTML.slice(0,1);
        // const inputAdults = document.getElementById("form-user-adults");
        // inputAdults.value = `${adultsNumber}`;
        //
        // const formLabelChildren = document.querySelector(".form-label-children");
        // const childrenNumber = formLabelChildren.innerHTML.slice(0,1);
        // const inputChildren = document.getElementById("form-user-children");
        // inputChildren.value = `${childrenNumber}`;
        //
        // const formLabelRooms = document.querySelector(".form-label-rooms");
        // const roomsNumber = formLabelRooms.innerHTML.slice(0,1);
        // const inputRooms = document.getElementById("form-user-rooms");
        // inputRooms.value = `${roomsNumber}`;

    };

    return {
        values,
        isToggleNumbers,
        borderNumbersWrapColor,
        count1,
        count2,
        count3,
        handleSubmit,
        handleChange,
        handleNumbersWrapClick,
        setCount1,
        setCount2,
        setCount3,
    };
}

const HeaderForm = ( {setSearchValue} ) => {

    const {
        values,
        handleSubmit,
        handleChange,
        isToggleNumbers,
        handleNumbersWrapClick,
        borderNumbersWrapColor,
        count1,
        count2,
        count3,
        setCount1,
        setCount2,
        setCount3,

    } = useForm(setSearchValue);

    const name = values.name;

        return (
                <form onSubmit={handleSubmit} action="" className="form-main col-lg-12">
                    <DestinationShownInput funcForChange={handleChange} value={name}/>
                    <OtherInputsContainer
                        count1={count1}
                        count2={count2}
                        count3={count3}
                        handleNumbersWrapClick={handleNumbersWrapClick}
                        borderColor={borderNumbersWrapColor}
                        funcForChange={handleChange}
                        value={name}
                    />
                    <FiltersInForm
                        count1={count1}
                        setCount1={setCount1}
                        count2={count2}
                        setCount2={setCount2}
                        count3={count3}
                        setCount3={setCount3}
                        isToggleNumbers={isToggleNumbers}
                    />
                </form>
        );

}

export default HeaderForm;
