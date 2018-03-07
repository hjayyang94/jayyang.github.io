import React, { Component } from 'react';
import "./Characteristic.css";

class Characteristic extends Component {


    render() {
        return (
            <div className='Characteristic'>

                <img className='Icon' src={this.props.photo} />


                <h2>{this.props.skill}</h2>

                <p className="Description">{this.props.description}</p>

            </div>
        )
    }
}




export default Characteristic;