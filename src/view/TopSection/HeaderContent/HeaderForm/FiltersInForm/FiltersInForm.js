import React, {useState} from "react";
import "./FiltersInForm.css";
import FilterBlockElement from "./FilterBlockElement/FilterBlockElement";
import SelectorAge from "./FilterBlockElement/SelectorAge/SelectorAge";

function FiltersInForm() {
    const [count1, setCount1] = useState(1);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(1);

    return (
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
                    {[...Array(count2)].map((item, index) =>
                        <SelectorAge key={index} />
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
                    {[...Array(count2)].map((item, index) =>
                        <SelectorAge key={index} />
                    )}
                </>
                }
            </div>}
        </>
    );
}

export default FiltersInForm;
