import React, { Component } from 'react';
import "./NavBar1.css";
import ParentTitle from "../ParentTitle/ParentTitle";


class NavBar1 extends Component {

    parentTitleHandler = () => {
        console.log("Parent Title was clicked");
    }

    render() {
        return (
            <div className='NavBar1 row'>
                <h1 className="Title col-md-10">{this.props.title}</h1>
                <ParentTitle parentTitle={this.props.parentTitle} click={() => this.parentTitleHandler()}/>
            </div>
        )
    }
}




export default NavBar1;