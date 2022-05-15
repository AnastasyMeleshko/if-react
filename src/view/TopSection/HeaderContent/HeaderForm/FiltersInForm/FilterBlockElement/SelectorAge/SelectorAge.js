import React from "react";
import "./SelectorAge.css";

const ages = [
    "0 years old",
    "1 years old",
    "2 years old",
    "3 years old",
    "4 years old",
    "5 years old",
    "6 years old",
    "7 years old",
    "8 years old",
    "9 years old",
    "10 years old",
    "11 years old",
    "12 years old",
    "13 years old",
    "14 years old",
    "15 years old",
    "16 years old",
    "17 years old",
];

const SelectorAge = () => {

    // const setChildrenAge = props.setChildrenAge;


    return (
        <div className="select-age-wrap">
            <select name="children-age" className="selector-age">
                {ages.map((age,index) => (
                    (index === 0) ?
                        <option
                        key={index}
                        defaultValue={'DEFAULT'}
                        value={`value${index} years old`}
                    >{age}</option>
                        : <option
                            key={index}
                            value={`value${index} years old`}
                        >{age}</option>
                ))}
            </select>
            <p className="arrow-hidden arrow">
                <i className="arrow-down">
                </i>
            </p>
        </div>
    )
}

export default SelectorAge;
