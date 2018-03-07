import React, { Component } from 'react';
import "./Skill.css";

class Skill extends Component {


    render() {
        return (
            <div className='Skill'>
                <img className='skillPhoto' src= {this.props.skill}/>
            </div>
        )
    }
}

export default Skill;