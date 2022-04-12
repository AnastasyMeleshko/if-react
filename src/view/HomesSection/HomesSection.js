import React from "react";
import "./HomesSection.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import CardItem from "../../components/CardItem/CardItem";
import ArrowElement from "../../components/ArrowElement/ArrowElement";

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


    render() {

        const {data} = this.state;

        return (
            <section className="homes">
                <div className="homes-container container col-lg-12">
                    <SectionTitle text='Homes guests loves' id='homes-guests' title='homes-title'/>
                    <div className="homes-group-items col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <div className="homes-group-items-slider col-lg-12 col-md-12 col-sm-12 col-xs-12">
                            {data.map(element => <CardItem key={element.id} item={element} useClass="homes-item card-item col-lg-3 col-md-4 col-sm-6 col-xs-6"/>)}
                        </div>
                        <div className="arrow-homes-left">
                            <ArrowElement id="arrow-homes-left" key={this.id}/>
                        </div>
                        <div className="arrow-homes">
                            <ArrowElement id="arrow-homes" key={this.id}/>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default HomesSection;
