import React, {useEffect, useState} from "react";

const url = "https://randomuser.me/api/?results=500";

export const withRequestedData = (Component) => (props) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(setData)
    },[]);

    return (data !== undefined) && <Component {...props} data={data}/>
}
