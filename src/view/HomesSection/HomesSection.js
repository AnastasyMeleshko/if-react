import React from "react";
import "./HomesSection.css";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import HomesItem from "../../components/HomesItem/HomesItem";

class HomesSection extends React.Component {
    render() {
        return (
            <section className="homes">
                <div className="homes-container container col-lg-12">
                    <SectionTitle text={'Homes guests loves'} id={'homes-guests'} title={'homes-title'}/>
                    <div className="homes-group-items col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        ggg
                    </div>
                </div>
            </section>
        );
    }
}

export default HomesSection;


// function HomesSection () {
//     return (
//         <section className='homesSection'>
//             <div className='wrapper'>
//                 <Title text={'Homes guests loves'}/>
//                 <div className='homesCardBody'>
//                     {data.map(i => <Card key={i.id} item={i} />)}
//                 </div>
//             </div>
//         </section>
//     )
// }
//
// export default HomesSection
