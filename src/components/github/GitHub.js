import React from 'react'
import './GitHub.css'
import { FaGithub } from 'react-icons/fa'

function GitHub() {
    return (
        <div className="GitHub">
            <FaGithub style={{ color: '#ffffff', width: '50px', height: '50px' }}/>
            <a href="https://github.com/Jordanbinnie" target="_blank"><button className="button paragraph--2">GitHub</button></a>
        </div>
    )
}

export default GitHub