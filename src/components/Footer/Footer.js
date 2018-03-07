import React, { Component } from 'react';
import "./Footer.css";

const backgroundStyle = {
    backgroundImage: "url('background.jpg')",
    backgroundSize: "cover",
    
  };

class About extends Component {

    render() {
        return (
            <div className='Footer' style={backgroundStyle}>
                <p className='FooterText'>© Copyright 2018 Jay Yang</p>
            </div>
        )
    }
}




export default About;