import React from "react";
import "./FiltersInForm.css";

function FiltersInForm() {

    return (
        <div className="filters-in-form">
            <div className="filters-block-element"><span
                className="filter-text filter-text-Adults">Adults</span>
                <div className="square-button square-button-minus button-minus-Adults minus-btn-Adults">
                    <div className="minus-in-btn minus-minus-in-btn">
                    </div>
                </div>
                <div className="counter-number counter-number-Adults">1</div>
                <div className="square-button square-button-plus button-plus-Adults plus-btn-Adults">
                    <div className="minus-in-btn minus-in-btn-plus">
                    </div>
                    <div className="minus-in-btn-vertical minus-in-btn-plus">
                    </div>
                </div>
            </div>
            <div className="filters-block-element"><span
                className="filter-text filter-text-Children">Children</span>
                <div className="square-button square-button-minus button-minus-Children minus-btn-Children">
                    <div className="minus-in-btn minus-minus-in-btn">
                    </div>
                </div>
                <div className="counter-number counter-number-Children">0</div>
                <div className="square-button square-button-plus button-plus-Children plus-btn-Children">
                    <div className="minus-in-btn minus-in-btn-plus">
                    </div>
                    <div className="minus-in-btn-vertical minus-in-btn-plus">
                    </div>
                </div>
            </div>
            <div className="filters-block-element">
                        <span className="filter-text filter-text-Rooms">
                            Rooms
                        </span>
                <div className="square-button square-button-minus button-minus-Rooms minus-btn-Rooms">
                    <div className="minus-in-btn minus-minus-in-btn">
                    </div>
                </div>
                <div className="counter-number counter-number-Rooms">1</div>
                <div className="square-button square-button-plus button-plus-Rooms plus-btn-Rooms">
                    <div className="minus-in-btn minus-in-btn-plus">
                    </div>
                    <div className="minus-in-btn-vertical minus-in-btn-plus">
                    </div>
                </div>
            </div>
            <p className="text-about-children">
                What is the age of the child you’re travelling with?
            </p>
        </div>
    );
}


export default FiltersInForm;
