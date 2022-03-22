import React from 'react';
import './SectionTitle.css';

class SectionTitle extends React.Component {

        constructor (props) {
                super(props);
        }

        render() {
                return (
                    <h2 className={this.title} id={this.id}>{this.props.text}</h2>
                )
}

}

export default SectionTitle;
