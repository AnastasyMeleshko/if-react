import React, {useState, useEffect} from "react";
import {useParams, useNavigate } from "react-router-dom";
import "./HotelCard.css";
import ButtonItem from "../../../components/ButtonItem/ButtonItem";

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

    const navigate = useNavigate();

    const handleMainClick = () => {
        navigate("/");
    }

    const handleAvailableClick = () => {
        navigate(-1);
    }

    return  loading ? (<p>Loading...</p>) :
        (
            <>
                <div className="container">
                    <div className="hotel-card">
                        <img className="card-item-img search-img" src={hotelData.imageUrl} alt={hotelData.name}/>
                        <p className="card-item-title">{hotelData.name}</p>
                        <p className="card-item-location">{hotelData.city}, {hotelData.country}</p>
                    </div>
                    <div className="back-buttons">
                        <ButtonItem onClick={handleMainClick} className="back-btn" btnText="Back home page" type="button"/>
                        <ButtonItem onClick={handleAvailableClick} className="back-btn" btnText="Back to hotels" type="button"/>
                    </div>
                </div>
            </>

        )
}

export default HotelCard;
