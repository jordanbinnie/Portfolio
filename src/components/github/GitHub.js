import React from 'react'
import './GitHub.css'
import { FaGithub } from 'react-icons/fa'

function GitHub() {
    return (
        <div className="GitHub">
            <FaGithub style={{ color: '#ffffff', width: '50px', height: '50px' }}/>
            <button className="button paragraph--2">GitHub</button>
        </div>
    )
}

export default GitHub