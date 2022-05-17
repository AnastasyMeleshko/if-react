import React, {useEffect, useState} from "react";
// import PropTypes from "prop-types";

import "./Available.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CardItem from "../../components/CardItem/CardItem";
import ArrowElement from "../../components/ArrowElement/ArrowElement";
import ButtonItem from "../../components/ButtonItem/ButtonItem";
import {useNavigate} from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../slickSettings.css";

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

    let showAvailable = false;

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <ArrowElement id="arrow-homes" className="arrow-homes"/>,
        prevArrow: <ArrowElement id="arrow-homes-left" className="arrow-homes-left"/>,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 420,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

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

    else  {
        showAvailable  = false;
    }

    const navigate = useNavigate();
    const handleMainClick = () => {
        navigate("/");
    }

    const handleScroll = (section) => {

        section?.scrollIntoView( { behavior: 'smooth', block: 'start' } );

    };

    if (showAvailable && loading)  {
        const section = document.querySelector( '#available-title' );
        handleScroll(section);
    }

    return  showAvailable  ? loading ? (<p>Loading...</p>) :

    (
        <section className="available-hotels">
            <div className="available-container container col-lg-12">
                <SectionTitle text='Available hotels' title='available-title' id="available-title"/>
                <div className="available-items col-lg-12">
                        <Slider {...settings} className="available-items-slider col-lg-12">
                            {getData(data).map(element =>
                                <CardItem
                                    key={element.id}
                                    id={element.id}
                                    item={element}
                                    useClass="available-item card-item"
                                />
                            )}
                        </Slider>
                </div>
            </div>
        </section>
    ) : (
        <section className="available-hotels">
            <div className="available-container container col-lg-12">
                <SectionTitle text='Available hotels' title='available-title' id="available-title"/>
                <div className="available-not-found col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <p className="card-item-title">Oooops... Nothing was found</p>
                    <ButtonItem onClick={handleMainClick} className="back-btn" btnText="Back home page" type="button"/>
                </div>
            </div>
        </section>
        )


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

