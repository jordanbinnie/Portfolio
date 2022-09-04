import React, { useEffect, useState, useContext } from 'react'
import './Navbar.css'
import { AppContext } from '../../AppContext'

function NavBar() {
    const [navItems, setNavItems] = useState(null)
    const [activeBG, setActiveBG] = useState(null)

    const { gridLayout, setGridLayout } = useContext(AppContext)

    useEffect(() => {
        setNavItems(() => {
            const element = document.querySelector('.Navbar')
            return element
        })
        setActiveBG(() => {
            const element = document.querySelector('.NavBar_item_hover-bg')
            return element
        })
    }, [])

    function handleClick(event) {
        const clicked = event.target.getBoundingClientRect()
        const parent = navItems.getBoundingClientRect()
        const amountToMove = clicked.left - parent.left
        activeBG.style.left = amountToMove + "px"
        activeBG.style.width = clicked.width + "px"
        if (gridLayout !== event.target.innerText){
            setGridLayout(event.target.innerText)
        }
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome
    }

    return (
        <div className="Navbar">
            <div className="NavBar_item_hover-bg"></div>
            <div className="Navbar_item active_nav-item" onClick={handleClick}>All</div>
            <div className="Navbar_item" onClick={handleClick}>Profile</div>
            <div className="Navbar_item" onClick={handleClick}>Projects</div>
        </div>
    )
}

export default NavBar