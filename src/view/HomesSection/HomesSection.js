import React from "react";
import "./HomesSection.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CardItem from "../../components/CardItem/CardItem";
import ArrowElement from "../../components/ArrowElement/ArrowElement";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slickSettings.css";

class HomesSection extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
        }
    }

    componentDidMount() {
        fetch('https://fe-student-api.herokuapp.com/api/hotels/popular')
            .then((res) => {
            return res.json();
        }).then((data) => {
            this.setState(prevState => ({
                ...prevState,
                data,
            }));
        }).catch((e) => {
            console.log(e.message);
        })
    }

    settings = {
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


    render() {

        const {data} = this.state;

        return (
            <section className="homes">
                <div className="homes-container container col-lg-12">
                    <SectionTitle text='Homes guests loves' id='homes-guests' title='homes-title'/>
                    <div className="homes-group-items col-lg-12">
                        <Slider {...this.settings} className="homes-group-items-slider col-lg-12">
                                {data.map(element => <CardItem key={element.id} item={element} useClass="homes-item card-item"/>)}
                        </Slider>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomesSection;
