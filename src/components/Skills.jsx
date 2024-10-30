
import { useState } from 'react'
import Html from '../assets/html.svg'
import css from '../assets/css.svg'
import js from '../assets/js.svg'
import react from '../assets/react-white.svg'
import bootstrap from '../assets/bootstrap.svg'
import tailwind from '../assets/tailwind.svg'
import chakraui from '../assets/chakraui.svg'
import node from '../assets/node.svg'
import express from '../assets/express.svg'
import git from '../assets/git.svg'
import figma from '../assets/figma.svg'
import mongodb from '../assets/mongodb.svg'

function Skills(){
    return(
        <>
            <div id="skills">
                    <p className='section-title'>Skills</p>
                    <div class="parent" >
                        <div className="skill">
                            <img src={Html} alt="" />
                            <span  className='tech-name'>HTML</span>
                        </div>
                        
                        <div className="skill">
                            <img src={css} />
                            <span  className='tech-name'>CSS</span>
                        </div>
                        
                        <div className="skill">
                            <img src={js} alt="" />
                            <span  className='tech-name'>JavaScript</span>
                        </div>
                        
                        <div className="skill">
                            <img src={react} alt="" />
                            <span  className='tech-name'>React</span>
                        </div>
                        
                        <div className="skill">
                            <img src={bootstrap} alt="" />
                            <span  className='tech-name'>Bootstrap</span>
                        </div>
                        
                        <div className="skill">
                            <img src={tailwind} alt="" />
                            <span  className='tech-name'>Tailwind</span>
                        </div>  
                        
                        <div className="skill">
                            <img src={chakraui} alt="" />
                            <span  className='tech-name'>Chakra UI</span>
                        </div>
                        
                        <div className="skill">
                            <img src={node} alt="" />
                            <span  className='tech-name'>Node JS</span>
                        </div>
                        
                        <div className="skill">
                            <img src={express} alt="" />
                            <span  className='tech-name'>Express</span>
                        </div>
                        
                        <div className="skill">
                            <img src={git} alt="" />
                            <span  className='tech-name'>Git</span>
                        </div>
                        
                        <div className="skill">
                            <img src={figma} alt="" />
                            <span  className='tech-name'>Figma</span>
                        </div>
                        
                        <div className="skill">
                            <img src={mongodb} alt="" />
                            <span  className='tech-name'>MongoDB</span>
                        </div>
                        
                    </div>
            </div>
        </>
    )
}

export default Skills