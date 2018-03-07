import React, { Component } from 'react';
import "./Projects.css";

import ProjectShow from './ProjectShow/ProjectShow';

class Projects extends Component {


    render() {
        return (
            <div className='Projects'>
            <div className='titleContainer'>
                <h1 className='title'>Projects</h1>
                </div>
                <ProjectShow ProjectTitle='Usagi Warrior' link='https://github.com/hjayyang94/Project3-RPG' photo='UsagiWarrior.png' description='A platform jumper, hack-and-slash game created through Unity 3D Engine.' />
                <ProjectShow ProjectTitle='Race-Paint' link='https://github.com/Ta1yak1/Race-Paint' photo='RacePaint.png' description='A community based, multiplayer creative space, racing game. ' />
                <ProjectShow ProjectTitle='Zombie-Roll' link='https://github.com/hjayyang94/RollingZombie' photo='zombie.png' description='A basic mobile game utilizing human reaction and tactics.' />
                
            </div>
        )
    }
}




export default Projects;