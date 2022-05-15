import React from "react";
import "./FiltersInForm.css";
import FilterBlockElement from "./FilterBlockElement/FilterBlockElement";
import SelectorAge from "./FilterBlockElement/SelectorAge/SelectorAge";

function FiltersInForm(props) {
    const isToggleNumbers = props.isToggleNumbers;
    const count1 = props.count1;
    const setCount1 = props.setCount1;
    const count2 = props.count2;
    const setCount2 = props.setCount2;
    const count3 = props.count3;
    const setCount3 = props.setCount3;
    const childrenAge = props.childrenAge;
    const setChildrenAge = props.setChildrenAge;

    return (
        <>
            {isToggleNumbers ?
                <>
                    {count2 > 0 ?
                        <div className="filters-in-form add-scroll">
                            <FilterBlockElement filterName={`Adults`} counter={count1} handleCounter={setCount1} minimum={1} maximum={30}/>
                            <FilterBlockElement filterName={`Children`} counter={count2} handleCounter={setCount2} minimum={0} maximum={10}/>
                            <FilterBlockElement filterName={`Rooms`} counter={count3} handleCounter={setCount3} minimum={1} maximum={30}/>
                            {count2 > 0 && <p className="text-about-children">
                                What is the age of the child you’re travelling with?
                            </p>}
                            {count2 > 0 &&
                            <>
                                {[...Array(count2)].fill(null).map((item, index) =>
                                    <SelectorAge
                                        key={index}
                                        childrenAge={childrenAge}
                                        setChildrenAge={setChildrenAge}
                                    />
                                )}
                            </>
                            }
                        </div> :
                        <div className="filters-in-form">
                            <FilterBlockElement filterName={`Adults`} counter={count1} handleCounter={setCount1} minimum={1} maximum={30}/>
                            <FilterBlockElement filterName={`Children`} counter={count2} handleCounter={setCount2} minimum={0} maximum={10}/>
                            <FilterBlockElement filterName={`Rooms`} counter={count3} handleCounter={setCount3} minimum={1} maximum={30}/>
                            {count2 > 0 && <p className="text-about-children">
                                What is the age of the child you’re travelling with?
                            </p>}
                            {count2 > 0 &&
                            <>
                                {[...Array(count2)].fill(null).map((item, index) =>
                                    <SelectorAge key={index} />
                                )}
                            </>
                            }
                        </div>}
                </>
                : ""}
        </>
    );
}

export default FiltersInForm;
