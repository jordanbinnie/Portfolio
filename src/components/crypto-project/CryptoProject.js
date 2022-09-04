import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './CryptoProject.css'
import CryptofySnapshot from '../../assets/cryptofy/cryptofy-snapshot.png'
import CryptofyDarkSnapshot from '../../assets/cryptofy/cryptofy-dark-snapshot.png'
import { AppContext } from '../../AppContext'

function CryptoProject() {

    const { theme } = useContext(AppContext)

    const snapshot = theme === "light" ? CryptofySnapshot : CryptofyDarkSnapshot

    return (
        <div className="CryptoProject">
            <img className="CryptoProject_image" src={snapshot}/>
            <Link to="projects/cryptofy"><button className="button paragraph--2">Cryptofy</button></Link>
        </div>
    )
}

export default CryptoProject