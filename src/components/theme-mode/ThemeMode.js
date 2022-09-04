import React, { useEffect, useState, useContext } from 'react'
import './ThemeMode.css'
import { BsFillMoonFill } from "react-icons/bs";
import { BsFillSunFill } from "react-icons/bs";
import { AppContext } from '../../AppContext';

function ThemeMode() {

    const { theme, setTheme } = useContext(AppContext)
    const togglerSwitch = document.querySelector(".ThemeMode_toggler_switch");
    const [root, setRoot] = useState('')

    useEffect(() => {
        const rootElement = document.querySelector(':root')
        setRoot(rootElement)
    }, [])

    if (theme === "dark" && togglerSwitch) {
        togglerSwitch.style.transform = "translate3d(32px, 0, 0px)"
    }

    function changeTheme() {
        setTheme(prevTheme => prevTheme === "light" ? "dark" : "light")

        if (theme === "light") {
            togglerSwitch.style.transform = "translate3d(32px, 0, 0px)"

            root?.style.setProperty('--main-color', '#ffffff') 
            root?.style.setProperty('--secondary-color', '#2c2c2c') 
            root?.style.setProperty('--button-color', '#2c2c2c') 
            root?.style.setProperty('--main-bg-color', '#1c1c1c') 
            root?.style.setProperty('--secondary-bg-color', '#444444') 
            root?.style.setProperty('--third-bg-color', '#ffffff') 
            root?.style.setProperty('--nav-bg-color', '#2c2c2c') 
            root?.style.setProperty('--nav-hover-bg-color', '#1c1c1c') 
            root?.style.setProperty('--project-nav-hover-bg-color', "#1c1c1c")
            root?.style.setProperty('--boxshadow-color', '0 0 0')
            root?.style.setProperty('--black-bg-color', '#444444')
            root?.style.setProperty('--placeholder-bg-color', '#2f3030')
            root?.style.setProperty('--white-bg-color', '#F2F6F9') 
            root?.style.setProperty('--wordle-module-bg-color', '#222629') 
            root?.style.setProperty('--grid-box-shadow-color', '165, 165, 165, 0.04' ) 
            root?.style.setProperty('--project-image-box-shadow-color', '0 0 0 / 50%') 
            root?.style.setProperty('--wordle-secondary-bg-color', '#222629')
            root?.style.setProperty('--wordle-layer-bg-color', '28, 28, 28')
        }

        if (theme === "dark") {
            togglerSwitch.style.transform = "translate3d(0px, 0, 0px)"

            root?.style.setProperty('--main-color', '#2c2c2c')
            root?.style.setProperty('--secondary-color', '#ffffff')
            root?.style.setProperty('--button-color', '#ffffff')
            root?.style.setProperty('--main-bg-color', '#f2f6f9')
            root?.style.setProperty('--secondary-bg-color', '#ffffff')
            root?.style.setProperty('--third-bg-color', '#2c2c2c')
            root?.style.setProperty('--nav-bg-color', '#e5e9ed')
            root?.style.setProperty('--nav-hover-bg-color', '#ffffff') 
            root?.style.setProperty('--project-nav-hover-bg-color', "#2c2c2c")
            root?.style.setProperty('--boxshadow-color', '255 255 255')
            root?.style.setProperty('--black-bg-color', '#2c2c2c')
            root?.style.setProperty('--placeholder-bg-color', '#fafafa')
            root?.style.setProperty('--white-bg-color', '#ffffff')
            root?.style.setProperty('--wordle-module-bg-color', '#F2F6F9')
            root?.style.setProperty('--grid-box-shadow-color', '90, 90, 90, 0.04')
            root?.style.setProperty('--project-image-box-shadow-color', '0 0 0 / 9%')
            root?.style.setProperty('--wordle-secondary-bg-color', '#444444')
            root?.style.setProperty('--wordle-layer-bg-color', '255, 255, 255')
        }
    }

    return (
        <div className="ThemeMode">
            <div className="ThemeMode_toggler">
                <div className="ThemeMode_toggler_switch" onClick={changeTheme}>
                    {theme === "light" ? <BsFillMoonFill className="ThemeMode_toggler_switch_icon"/> : <BsFillSunFill className="ThemeMode_toggler_switch_icon"/>}
                </div>
            </div>
        </div>
    )
}

export default ThemeMode