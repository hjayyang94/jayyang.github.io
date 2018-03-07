import React, { Component } from 'react';
import "./PreviewProject.css";

class PreviewProject extends Component {


    render() {
        return (
            <div className='PreviewProject'>

                <img className='PreviewProjectPhoto' src={this.props.photo} />


                <h2>{this.props.ProjectTitle}</h2>

                <p className="ProjectDescription">{this.props.description}</p>

            </div>
        )
    }
}




export default PreviewProject;