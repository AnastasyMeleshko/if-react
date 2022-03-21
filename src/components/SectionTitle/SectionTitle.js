import React from 'react';
import './SectionTitle.css';

function SectionTitle(props) {
        const classes = `col-lg-12 ${props.title}`;
        return (
            <h2 className={classes} id={props.id}>{props.text}</h2>
        )
}

export default SectionTitle;
