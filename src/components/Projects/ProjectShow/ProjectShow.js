import React, { Component } from 'react';
import "./ProjectShow.css";

class ProjectShow extends Component {


    render() {
        return (
            <div className='ProjectShow'>

                <div className='ProjectPhotoDiv'>
                    <h2 className='ProjectTitle'>{this.props.ProjectTitle}</h2>
                    <img className='ProjectPhoto' src={this.props.photo} />

                </div>

                <p className="ProjectDescription">{this.props.description}</p>
                <p>Click <a target='_blank' href={this.props.link}>here</a> to look at the source code!</p>

            </div>
        )
    }
}




export default ProjectShow;
