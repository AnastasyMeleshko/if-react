import React, {useEffect, useState} from "react";
// import {useNavigate} from "react-router-dom";

// import PropTypes from "prop-types";

import "./Available.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CardItem from "../../components/CardItem/CardItem";
import ArrowElement from "../../components/ArrowElement/ArrowElement";


// const initialData = [
//     {
//         id: '71ce9eac-e9b9-44f0-a342-9ff0b565f3b7',
//         name: 'Hotel Leopold',
//         city: 'Saint Petersburg',
//         country: 'Russia',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-leopold_mflelk.jpg',
//     },
//     {
//         id: 'aa560608-a879-48a7-80b6-deff2806b250',
//         name: 'Apartment Sunshine',
//         city: 'Santa  Cruz de Tenerife',
//         country: 'Spain',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/apartment-sunshine_vhdlel.jpg',
//     },
//     {
//         id: '1d88fefe-edf1-4cda-844a-babbf29bb2b3',
//         name: 'Villa Kunerad',
//         city: 'Vysokie Tatry',
//         country: 'Slowakia',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/villa-kunerad_gdbqgv.jpg',
//     },
//     {
//         id: 'a2bf824d-edd8-41f0-8b70-244334086ab4',
//         name: 'Hostel Friendship',
//         city: 'Berlin',
//         country: 'Germany',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379364/fe/hostel-friendship_aw6tn7.jpg',
//     },
//     {
//         id: '4024535d-a498-4274-b7cb-f01ada962971',
//         name: 'Radisson Blu Hotel',
//         city: 'Kyiv',
//         country: 'Ukraine',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/radisson-blu-hotel_jwtowg.jpg',
//     },
//      {
//         id: 'e51e71f6-6baf-4493-b3ae-25dc27cdc238',
//         name: 'Paradise Hotel',
//         city: 'Guadalupe',
//         country: 'Mexico',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/paradise-hotel_i6whae.jpg',
//     },
//     {
//         id: '87d2b966-2431-43f3-8c0d-2c8723474dfc',
//         name: 'Hotel Grindewald',
//         city: 'Interlaken',
//         country: 'Switzerland',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/hotel-grindewald_zsjsmy.jpg',
//    },
//     {
//         id: '190221c6-b18f-4dba-97de-e35f0e14c023',
//         name: 'The Andaman Resort',
//         city: 'Port Dickson',
//         country: 'Malaysia',
//         imageUrl: 'https://res.cloudinary.com/intellectfox/image/upload/v1610379365/fe/the-andaman-resort_d2xksj.jpg',
//     },
// ];

const url = `https://fe-student-api.herokuapp.com/api/hotels`;

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const res = await fetch(url);
                const items = await res.json();

                setData(items);
                setLoading(false);

            } catch(e) {
                console.log(e.message);
                setLoading(false);
            }
        };

        getData();

    }, [url]);

    return {
        data,
        loading,
    }

}

function AvailableSection( props ) {

    const searchValue = props.searchValue;
    const {data, loading} = useFetch(`${url}?search=${searchValue}`);

    // const navigate = useNavigate();

    let showAvailable = false;

    const getData = (data) => {

       return data.filter(item =>
           ((item.name.toLowerCase().includes(searchValue)) ||
           (item.city.toLowerCase().includes(searchValue)) ||
           (item.country.toLowerCase().includes(searchValue)))
       );

    }

    if (searchValue.length === 0) {
        showAvailable  = false;
    }
    else if (getData(data).length !== 0) {
        showAvailable  = true;
    }

    else {
        showAvailable  = false;
    }

    // const handleClick = (props) => {
    //     console.log(props.element)
    //     // console.log(e.target)
    //     // const itemId = ;
    //     // navigate(`/:${itemId}`);
    // }


    return  showAvailable  ? loading ? (<p>Loading...</p>) :

    (
        <section className="available-hotels">
            <div className="available-container container col-lg-12">
                <SectionTitle text='Available hotels' title='available-title' id="available-title"/>
                <div className="available-items col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div className="available-items-slider col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        {getData(data).map(element =>
                            <CardItem  key={element.id} id={element.id} item={element} useClass="available-item card-item col-lg-3 col-md-4 col-sm-6 col-xs-6"/>
                        )}
                    </div>
                    <div className="arrow-homes-left">
                        <ArrowElement id="arrow-homes-left" key="arrow-1"/>
                    </div>
                    <div className="arrow-homes">
                        <ArrowElement id="arrow-homes" key="arrow-2"/>
                    </div>
                </div>
            </div>
        </section>
    ) : "";

    // AvailableSection.propTypes = {
    //     data: PropTypes.arrayOf(PropTypes.shape({
    //         id: PropTypes.string,
    //         name: PropTypes.string,
    //         city: PropTypes.string,
    //         country: PropTypes.string,
    //         imageUrl: PropTypes.string,
    //     }))
    // };

}

export default AvailableSection;

