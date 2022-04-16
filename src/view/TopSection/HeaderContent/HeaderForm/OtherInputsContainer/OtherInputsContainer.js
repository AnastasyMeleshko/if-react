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

    const handleNumbersWrapClick = props.handleNumbersWrapClick;
    const borderNumbersWrapColor = props.borderColor;
    const funcForChange = props.funcForChange;
    const name = props.name;
    const count1 = props.count1;
    const count2 = props.count2;
    const count3 = props.count3;

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
            <div className="main-numbers-wrap" style={{borderColor: `${borderNumbersWrapColor}`,}}>
                <div className="form-numbers-wrap" onClick={handleNumbersWrapClick} >
                    <div className="form-numbers" style={{borderColor: `${borderNumbersWrapColor}`,}}>
                        <div className="form-adults form-numbers-item">
                            <input onChange={funcForChange} value={name} type="text" className="form-input input-adults numbers-input"
                                   name="user-adults" id="form-user-adults" autoComplete="off"/>
                            <label className="form-label label-adults" htmlFor="form-user-adults">Adults</label>
                            <p className="text-for-input">{count1}</p>
                        </div>
                        <div className="form-children form-numbers-item">
                            <input
                                onChange={funcForChange}
                                value={name}
                                type="text"
                                className="form-input input-children numbers-input"
                                name="user-children"
                                id="form-user-children"
                                autoComplete="off"
                                style={{borderLeft: `2px solid #BFBFBF`, borderRight: `2px solid #BFBFBF`, borderRadius: "0",}}
                            />
                            <label className="form-label label-children" htmlFor="form-user-children">Children</label>
                            <p className="text-for-input">{count2}</p>
                        </div>
                        <div className="form-rooms form-numbers-item">
                            <input onChange={funcForChange} value={name} type="text" className="form-input input-rooms numbers-input"
                                   name="user-rooms" id="form-user-rooms" autoComplete="off"/>
                            <label className="form-label label-rooms" htmlFor="form-user-rooms">Rooms</label>
                            <p className="text-for-input">{count3}</p>
                        </div>
                    </div>
                    <div className="form-numbers-big-screen" style={{borderColor: `${borderNumbersWrapColor}`,}}>
                        <div className="form-input-bg form-input-adults">
                                    <span className="form-label-bg form-label-adults">
                                        {count1} Adults
                                    </span>
                        </div>
                        <div className="first-line">
                        </div>
                        <div className="form-input-bg form-input-children">
                                    <span className="form-label-bg form-label-children">
                                        {count2} Children
                                    </span>
                        </div>
                        <div className="second-line">
                        </div>
                        <div className="form-input-bg form-input-rooms">
                                    <span className="form-label-bg form-label-rooms">
                                        {count3} Rooms
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
