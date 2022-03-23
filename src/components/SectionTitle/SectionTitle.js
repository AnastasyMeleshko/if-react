import React from 'react';
import './SectionTitle.css';

function SectionTitle(props) {
        return (
            <h2 className="col-lg-12" id={props.id}>{props.text}</h2>
        )
}

export default SectionTitle;
