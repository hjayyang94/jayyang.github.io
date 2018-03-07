import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';

const backgroundStyle = {
  backgroundImage: "url('background.jpg')",
  backgroundSize: "cover",
};

const app = (
    <Router>
        <div style={backgroundStyle}>
            <Route path='/' component={App} />
            <Route exact path='/' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/contact' component={Contact} />
        </div>
    </Router>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
