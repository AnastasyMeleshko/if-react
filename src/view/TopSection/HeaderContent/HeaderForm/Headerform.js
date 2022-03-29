import React from "react";
import "./HeaderForm.css";
import DestinationShownInput from "./DestinationShownInput/DestinationShownInput";
import FiltersInForm from "./FiltersInForm/FiltersInForm";
import OtherInputsContainer from "./OtherInputsContainer/OtherInputsContainer";


class HeaderForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {

        };

    }

    handleClick = () => {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value,
        })

        // destination inputs the same value update

        if (e.target.id === `user-destination`) {
            document.getElementById("user-destination-hidden").value = `${e.target.value}`;
        } else {
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


    }


    render() {
        const name = this.state;
        console.log(this.state);

        return (
            <form onSubmit={this.handleSubmit} action="" className="form-main col-lg-12">
                <DestinationShownInput funcForChange={this.handleChange} value={name}/>
                <OtherInputsContainer funcForChange={this.handleChange} value={name}/>
                <FiltersInForm/>
            </form>
        );
    }
}

export default HeaderForm;
