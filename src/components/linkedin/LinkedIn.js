import React from 'react'
import './LinkedIn.css'
import { FaLinkedinIn } from 'react-icons/fa'

function LinkedIn() {
  return (
    <div className="LinkedIn">
        <FaLinkedinIn style={{ color: '#ffffff', width: '50px', height: '50px' }}/>
        <button className="button paragraph--2">LinkedIn</button>
    </div>
  )
}

export default LinkedIn