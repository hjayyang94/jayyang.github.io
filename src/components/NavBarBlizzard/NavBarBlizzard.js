import React, { Component } from 'react';
import "./NavBarBlizzard.css";
import Media from 'react-media';

import {
    BrowserRouter as Router,
    Route,
    Link,
    withRouter
} from 'react-router-dom'

class NavBarBlizzard extends Component {

    parentTitleHandler = () => {
        console.log("Parent Title was clicked");
    }

    render() {
        return (
            <Media query={{ minWidth: 450 }}>
                {matches =>
                    matches ? (
                        <div className='NavBarBlizzard'>
                            <div className="NavBarItems">
                                <Link to='/' className="Items">About</Link>
                                <Link to='/projects' className="Items">Projects</Link>
                                <Link to='/contact' className="Items">Contact</Link>
                            </div>

                            <div className="NavBarContactItems">
                                <div className="ContactItems">
                                    <a target='_blank' href='https://www.linkedin.com/in/hyun-jay-yang/'><img className="linkLogo" src="./logo.png"></img></a>
                                    <a target='_blank' href='https://github.com/hjayyang94'><img className="linkLogo" src="./github.png"></img></a>
                                </div>
                            </div>
                        </div>
                    ) :

                        (
                            <div className='NavBarBlizzard'>
                                <div className="NavBarItems">
                                    <Link to='/' className="Small Items">About</Link>
                                    <Link to='/projects' className="Small Items">Projects</Link>
                                </div>

                                <div className="NavBarContactItemsSmall">
                                    <div className="ContactItemsSmall">
                                        <a target='_blank' href='https://www.linkedin.com/in/hyun-jay-yang/'><img className="linkSmall" src="./logo.png"></img></a>
                                        <a target='_blank' href='https://github.com/hjayyang94'><img className="linkSmall" src="./github.png"></img></a>
                                    </div>
                                </div>
                            </div>
                        )}
            </Media>
        )
    }
}




export default withRouter(NavBarBlizzard);