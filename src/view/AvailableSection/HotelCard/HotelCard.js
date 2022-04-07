import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./HotelCard.css";
// import {element} from "prop-types";

const urlForHotel = `https://fe-student-api.herokuapp.com/api/hotels`;

const useFetch = (url) => {

    const [hotelData, setHotelData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                const items = await res.json();

                setHotelData(items);
                setLoading(false);

            } catch(e) {
                console.log(e.message);
                setLoading(false);
            }
        };

        getData();

    }, []);

    return {
        hotelData,
        loading,
    }

}


function HotelCard()  {
    const {id} = useParams();
    const hotelId = id.slice(1,id.length);

    const {hotelData, loading} = useFetch(`${urlForHotel}/${hotelId}`);

    return  loading ? (<p>Loading...</p>) :
        (
            <div className="hotel-card container">
                <img className="card-item-img" src={hotelData.imageUrl} alt={hotelData.name}/>
                <p className="card-item-title">{hotelData.name}</p>
                <p className="card-item-location">{hotelData.city}, {hotelData.country}</p>
            </div>
        )
}

export default HotelCard;
