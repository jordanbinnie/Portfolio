import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './MessengerProject.css'
import FlickSnapshot from '../../assets/flick/flick-snapshot.png'
import FlickDarkSnapshot from '../../assets/flick/flick-dark-snapshot.png'
import { AppContext } from '../../AppContext'

function MessengerProject() {

  const { theme } = useContext(AppContext)

  const snapshot = theme === "light" ? FlickSnapshot : FlickDarkSnapshot

  return (
    <div className="MessengerProject">
        <img className="MessengerProject_image" src={snapshot}/>
        <Link to="projects/flick-messenger"><button className="button paragraph--2">Flick Messenger</button></Link>
    </div>
  )
}

export default MessengerProject