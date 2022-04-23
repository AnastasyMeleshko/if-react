import React from "react";
import {TopSectionContext} from "./TopSectionData";
import {useEffect, useState} from "react";

const url = "https://randomuser.me/api/?results=500";

const DataContextProvider = ({children}) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(setData)
    },[]);

    return <TopSectionContext.Provider
            value={{
              data,
              setData,
            }}>{children}</TopSectionContext.Provider>
}

export default DataContextProvider;
