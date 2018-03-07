import React, { Component } from 'react';
import "./About.css";

import Characteristic from './Characteristic/Characteristic';
import Skill from './Skill/Skill';

class About extends Component {

    render() {
        return (
            <div className='About'>
                <div className='titleContainer'>
                    <h1 className='title'>About Me</h1>
                </div>
                <div className='IntroDiv'>
                    <div className='PhotoDiv'>
                        <img className='Photo' src="ProfPic.jpeg" />
                    </div>

                    <div className='Intro'>
                        <h1>Jay Yang</h1>
                        <h3>Full Stack Developer • Game Developer</h3>
                    </div>
                </div>

                <div className='CharContainer'>
                    <Characteristic photo='strategy.png' skill='Strategic' description='Play to win. From having competed and coached professional esports teams, I approach all projects methodically and analytically, aiming for the highest point possible.' />
                    <Characteristic photo='tree.jpg' skill='Growing' description='A tree starts dying when it stops growing. Knowledge can only further progress what I can already do, and I would never shy away from a situation I can learn more from.' />
                    <Characteristic photo='flexible.png' skill='Flexible' description='Plans can change, and adaptability is key. Dynamic teams, agile environments, and new technology constantly being introduced, I am always on my toes ready for curveballs that may come at my way.' />
                </div>

                <div className='SkillsDiv'>
                    <h1>Languages</h1>

                    <Skill skill='react.png' />
                    <Skill skill='nodejs.png' />
                    <Skill skill='javascript.png' />
                    <Skill skill='csharp.png' />
                    <Skill skill='html.png' />
                    <Skill skill='css.png' />
                    <Skill skill='mysql.png' />
                    <Skill skill='mongodb.png' />

                </div>

            </div>


        )
    }
}




export default About;