import React, {useState} from "react";

import 'antd/dist/antd.css';
import "./OtherInputsContainer.css";

import {DatePicker} from "antd";
import DestinationHiddenInput from "./DestinationHiddenInput/DestinationHiddenInput";
import ButtonItem from "../../../../../components/ButtonItem/ButtonItem";
import moment from "moment";

const {RangePicker} = DatePicker;

function OtherInputsContainer(props) {
    const [value, setValue] = useState("");
    const [dateString, setDateString] = useState("");
    const [isToggleNumbers, setIsToggleNumbers] = useState(false);

    const funcForChange = props.funcForChange;
    const name = props.name;

    const date = new Date();
    const today = new Date(date.getFullYear(), date.getMonth(), date.getDate());

    const handleChange = (valueChanged,dateStringChanged) => {
        setValue({
            ...value,
            [value] : valueChanged,
        });
        setDateString({
            ...dateString,
            [dateString] : dateStringChanged,
        });
    }
    console.log(value, dateString);

    const handleNumbersWrapClick = () => {
        setIsToggleNumbers(!isToggleNumbers);
    }

    console.log(isToggleNumbers)


    return (
        <div className="left-container">
            <DestinationHiddenInput funcForChange={props.funcForChange} value={props.name}/>
            <div className="form-dates">
                <RangePicker format="ddd DD MMM" bordered={false} disabledDate={current => {
                    return current < today && current < moment().endOf("day") && current;
                }} onChange={handleChange}>
                    <div className="form-item check-inn">
                        <input onChange={funcForChange} value={name} type="text" className="form-input input-date" name="user-check-in-date"
                               id="form-user-check-in" required autoComplete="off"/>
                        <label className="form-label label-inn" htmlFor="form-user-check-in">Check-in date</label>
                    </div>
                    <div className="form-item check-out">
                        <input onChange={funcForChange} value={name} type="text" className="form-input input-date" name="user-check-out-date"
                               id="form-user-check-out" required autoComplete="off"/>
                        <label className="form-label label-out" htmlFor="form-user-check-out">Check-out date</label>
                    </div>
                </RangePicker>
            </div>
            <div className="main-numbers-wrap">
                <div className="form-numbers-wrap" onClick={handleNumbersWrapClick}>
                    <div className="form-numbers">
                        <div className="form-adults form-numbers-item">
                            <input onChange={funcForChange} value={name} type="text" className="form-input input-adults numbers-input"
                                   name="user-adults" id="form-user-adults" autoComplete="off"/>
                            <label className="form-label label-adults" htmlFor="form-user-adults">Adults</label>
                            <p className="text-for-input shown">1</p>
                        </div>
                        <div className="form-children form-numbers-item">
                            <input onChange={funcForChange} value={name} type="text" className="form-input input-children numbers-input"
                                   name="user-children" id="form-user-children" autoComplete="off"/>
                            <label className="form-label label-children" htmlFor="form-user-children">Children</label>
                            <p className="text-for-input shown">0</p>
                        </div>
                        <div className="form-rooms form-numbers-item">
                            <input onChange={funcForChange} value={name} type="text" className="form-input input-rooms numbers-input"
                                   name="user-rooms" id="form-user-rooms" autoComplete="off"/>
                            <label className="form-label label-rooms" htmlFor="form-user-rooms">Rooms</label>
                            <p className="text-for-input shown">1</p>
                        </div>
                    </div>
                    <div className="form-numbers-big-screen">
                        <div className="form-input-bg form-input-adults">
                                    <span className="form-label-bg form-label-adults">
                                        1 Adults
                                    </span>
                        </div>
                        <div className="first-line">
                        </div>
                        <div className="form-input-bg form-input-children">
                                    <span className="form-label-bg form-label-children">
                                        0 Children
                                    </span>
                        </div>
                        <div className="second-line">
                        </div>
                        <div className="form-input-bg form-input-rooms">
                                    <span className="form-label-bg form-label-rooms">
                                        1 Rooms
                                    </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="search-button-wrap">
                <ButtonItem className="search-button" name="Search" type="submit" btnText="Search"/>
            </div>
        </div>
    );
}


export default OtherInputsContainer;
