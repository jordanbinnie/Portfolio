import React from 'react'
import './LinkedIn.css'
import { FaLinkedinIn } from 'react-icons/fa'

function LinkedIn() {
  return (
    <div className="LinkedIn">
        <FaLinkedinIn style={{ color: '#ffffff', width: '50px', height: '50px' }}/>
        <a href="https://www.linkedin.com/in/jordanbinnie/" target="_blank"><button className="button paragraph--2">LinkedIn</button></a>
    </div>
  )
}

export default LinkedIn