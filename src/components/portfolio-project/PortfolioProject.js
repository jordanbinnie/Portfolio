import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './PortfolioProject.css'
import PortfolioSnapshot from '../../assets/portfolio/portfolio-snapshot.png'
import PortfolioDarkSnapshot from '../../assets/portfolio/portfolio-dark-snapshot.png'
import { AppContext } from '../../AppContext'

function PortfolioProject() {

  const { theme } = useContext(AppContext)

  const snapshot = theme === "light" ? PortfolioSnapshot : PortfolioDarkSnapshot

  return (
    <div className="PortfolioProject">
        <img className="PortfolioProject_image" src={snapshot}/>
        <Link to="projects/portfolio"><button className="button paragraph--2">This Portfolio</button></Link>
    </div>
  )
}

export default PortfolioProject