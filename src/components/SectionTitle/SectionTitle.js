import React from 'react';
import './SectionTitle.css';

class SectionTitle extends React.Component {

        constructor (props) {
                super(props);
        }

        render() {
                const classes = `col-lg-12` + ` ` + `${this.props.title}`;
                return (
                    <h2 className={classes} id={this.id}>{this.props.text}</h2>
                )
}

}

export default SectionTitle;
