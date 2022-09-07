import React from 'react'
import './AboutMe.css'
import emoji from '../../assets/my-emoji.png'

function AboutMe() {
  return (
    <div className="AboutMe">
        <div className="AboutMe_top">
            <h3 className="heading heading--3">Hello I'm</h3>
            <h1 className="heading heading--1">Jordan.</h1>
            <br/>
        </div>
        <p className="paragraph paragraph--1">
            I am a 
            <span className="heading heading--3"> Front End Developer</span>
            <br/>
            based in Auckland, New Zealand.
            <br/>
            Interests of mine include discgolf, music and coffee.
            I also have a strong passion for coding and solid UI/UX design.
        </p>
        <img className="AboutMe_emoji" src={emoji}/>
        <a href="https://www.dropbox.com/s/a3d83nptdfp97ex/Jordan%20Binnie.pdf?dl=0" target="_blank"><button className="button resume-button paragraph--2">Resume</button></a>
    </div>
  )
}

export default AboutMe