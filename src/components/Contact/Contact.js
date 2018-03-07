import React, { Component } from 'react';
import "./Contact.css";



class Contact extends Component {

    render() {
        return (
            <div className='Contact'>
                <div className='titleContainer'>
                    <h1 className='title'>Contact Me</h1>
                </div>

                <div className='ContactDiv'>
                    <h2>Location</h2>
                    <p>Irvine, CA</p>
                    <p>United States</p>

                    <h2>Email</h2>
                    <p>hjyang1@uci.edu</p>

                    <h2>Other</h2>
                    <div className="ContactOther">
                        <a target='_blank' href='https://www.linkedin.com/in/hyun-jay-yang/'><img className="linkLogo" src="./logo.png"></img></a>
                        <a target='_blank' href='https://github.com/hjayyang94'><img className="linkLogo" src="./github.png"></img></a>
                    </div>


                </div>
            </div>


        )
    }
}




export default Contact;