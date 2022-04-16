import React from "react";
import "./FilterBlockElement.css";

const FilterBlockElement = (props) => {

    const filterName = props.filterName;
    const counter = props.counter;
    const handleCounter = props.handleCounter;
    const minimum = props.minimum;
    const maximum = props.maximum;

    const handlePlus = () => {
        if (counter === maximum) {
            handleCounter(counter);
        } else {
            handleCounter(counter + 1);
        }
    }

    const handleMinus = () => {
        if (counter === minimum) {
            handleCounter(counter);
        } else {
            handleCounter(counter - 1);
        }
    }

    return (
        <div className="filters-block-element">
            <span className={`filter-text filter-text-${filterName}`}>{filterName}</span>
            {counter === minimum ?
                <div style={{border: "1px solid var(--btn-minus-color)",}} onClick={handleMinus} className={`square-button square-button-minus button-minus-${filterName} minus-btn-${filterName}`}>
                    <div style={{backgroundColor: "var(--btn-minus-color)",}} className="minus-in-btn minus-minus-in-btn">
                    </div>
                </div> :
                <div style={{border: "1px solid var(--btn-plus-color)",}} onClick={handleMinus} className={`square-button square-button-minus button-minus-${filterName} minus-btn-${filterName}`}>
                    <div style={{backgroundColor: "var(--btn-plus-color)",}} className="minus-in-btn minus-minus-in-btn">
                    </div>
                </div>
            }
            <div className={`counter-number counter-number-${filterName}`}>{counter}</div>
            {counter === maximum ?
                <div style={{border: "1px solid var(--btn-minus-color)",}} onClick={handlePlus} className={`square-button square-button-plus button-plus-${filterName}  plus-btn-${filterName} `}>
                    <div style={{backgroundColor: "var(--btn-minus-color)",}} className="minus-in-btn minus-in-btn-plus">
                    </div>
                    <div style={{backgroundColor: "var(--btn-minus-color)",}} className="minus-in-btn-vertical minus-in-btn-plus">
                    </div>
                </div> :
                <div style={{border: "1px solid var(--btn-plus-color)",}} onClick={handlePlus} className={`square-button square-button-plus button-plus-${filterName}  plus-btn-${filterName} `}>
                    <div style={{backgroundColor: "var(--btn-plus-color)",}} className="minus-in-btn minus-in-btn-plus">
                    </div>
                    <div style={{backgroundColor: "var(--btn-plus-color)",}} className="minus-in-btn-vertical minus-in-btn-plus">
                    </div>
                </div>
            }
        </div>
    )
}

export default FilterBlockElement;
