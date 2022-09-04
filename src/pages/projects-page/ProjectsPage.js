import React, { useEffect, useState, useContext } from 'react'
import { useParams, Link, useLocation } from 'react-router-dom'
import './ProjectsPage.css'
import './ProjectsNavbar.css'
import '../../components/grid/Grid.css'
import GridLayout from 'react-grid-layout'
import { MdOutlineClose } from 'react-icons/md'
import { ImArrowLeft2 } from 'react-icons/im'
import { ImArrowRight2 } from 'react-icons/im'
import useCurrentWidth from '../../hooks/useCurrentWidth'
import WordleProject from '../../components/wordle-project/WordleProject'
import { AppContext } from '../../AppContext'

// crytpo api images
import CryptofyMockup from '../../assets/cryptofy/cryptofy-mockup.png'
import CryptofyDarkMockup from '../../assets/cryptofy/cryptofy-dark-mockup.png'
import CoinTable from '../../assets/cryptofy/coin-light-table.png'
import CoinDarkTable from '../../assets/cryptofy/coin-dark-table.png'
import CoinGraph from '../../assets/cryptofy/coin-light-graph.png'
import CoinDarkGraph from '../../assets/cryptofy/coin-dark-graph.png'
import NewsPanel from '../../assets/cryptofy/news-light-panel.png'
import NewsDarkPanel from '../../assets/cryptofy/news-dark-panel.png'
import Cryptofy from '../../assets/cryptofy/cryptofy.png' 
import CoinWidget from '../../assets/cryptofy/coin-widget.png'
import CoinDarkWidget from '../../assets/cryptofy/coin-dark-widget.png'
import PriceWidget from '../../assets/cryptofy/price-light-widget.png'
import PriceDarkWidget from '../../assets/cryptofy/price-dark-widget.png'
import ChangeWidget from '../../assets/cryptofy/change-light-widget.png'
import ChangeDarkWidget from '../../assets/cryptofy/change-dark-widget.png'

// flick messenger images
import FlickMockup from '../../assets/flick/flick-mockup.png'
import FlickDarkMockup from '../../assets/flick/flick-dark-mockup.png'
import ChatScreen from '../../assets/flick/chat-screen.png'
import ChatDarkScreen from '../../assets/flick/chat-dark-screen.png'
import Flick from '../../assets/flick/flick.png'
import LikedMessage from '../../assets/flick/liked-message.png'
import LikedMessageDark from '../../assets/flick/liked-message-dark.png'
import FullLightScreen from '../../assets/flick/full-light-screen.png'
import FullDarkScreen from '../../assets/flick/full-dark-screen.png'

// wordle images & component
import WordleMockup from '../../assets/wordle/wordle-light-mockup.png'
import WordleDarkMockup from '../../assets/wordle/wordle-dark-mockup.png'
import GameWon from '../../assets/wordle/game-light-won.png'
import GameDarkWon from '../../assets/wordle/game-dark-won.png'
import GameLost from '../../assets/wordle/game-light-lost.png'
import GameDarkLost from '../../assets/wordle/game-dark-lost.png'
import Wordle from '../../assets/wordle/wordle.png'
import PopUp from '../../assets/wordle/pop-up.png'
import PopUpDark from '../../assets/wordle/pop-up-dark.png'

// portfolio images & component/s
import PortfolioMockup from '../../assets/portfolio/portfolio-mockup.png'
import PortfolioDarkMockup from '../../assets/portfolio/portfolio-dark-mockup.png'
import HomePage from '../../assets/portfolio/home-page.png'
import HomePageDark from '../../assets/portfolio/home-page-dark.png'
import GitHub from '../../components/github/GitHub'
import LinkedIn from '../../components/linkedin/LinkedIn' 
import ThemeMode from '../../components/theme-mode/ThemeMode'

function ProjectsPage() {

    let width = useCurrentWidth()
    const [navItems, setNavItems] = useState(null)
    const [activeBG, setActiveBG] = useState(null)
    const [centerNavItem, setCenterNavItem] = useState(null)
    const [centerIcon, setCenterIcon] = useState(null)
    const [userOnDesktop, setUserOnDesktop] = useState(true)
    const location = useLocation()

    const { theme } = useContext(AppContext)

    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome

    // crypto widget image elements
    const [changeWidgetElement, setChangeWidgetElement] = useState('')

    // flick messenger elements
    const [colorSwatchElement, setColorSwatchElement] = useState('')
    const [fullScreenElement, setFullScreenElement] = useState('')
    const [fullScreenDarkElement, setFullScreenDarkElement] = useState('')

    // wordle elements
    const [wordleGridItem, setWordleGridItem] = useState('')

    useEffect(() => {
        setNavItems(() => {
            const element = document.querySelector('.ProjectsPage_Navbar')
            return element
        })
        setActiveBG(() => {
            const element = document.querySelector('.ProjectsPage_NavBar_item_hover-bg')
            return element
        })
        setCenterNavItem(() => {
            const element = document.querySelector('.nav-cross')
            return element
        })
        setCenterIcon(() => {
            const element = document.querySelector('.nav-cross_icon')
            return element
        })
        setChangeWidgetElement(() => {
            const element = document.querySelector('#IMAGE_change-widget')
            return element
        })
        setColorSwatchElement(() => {
            const element = document.querySelector('.flick-swatch-bg')
            return element
        })
        setFullScreenElement(() => {
            const element = document.querySelector('#IMAGE_full-screen')
            return element
        })
        setFullScreenDarkElement(() => {
            const element = document.querySelector('#IMAGE_full-screen-dark')
            return element
        })
        setWordleGridItem(() => {
            const element = document.querySelector('#onWordle_no-padding')
            return element
        })

        return () => {
            if (fullScreenElement) {
                fullScreenElement.style.animation = "none"
                fullScreenDarkElement.style.animation = "none"
            }
        }
    }, [location.pathname])

    let { projectId } = useParams()

    const isTouchDevice = () => {  
        if(window.matchMedia("(pointer: coarse)").matches === false) {
          return true
        } else {
          return false
        }
      }   
      
    useEffect(() => {
    setUserOnDesktop(isTouchDevice())
    }, [])

    useEffect(() => {
        if (navItems && theme === "dark") {
            navItems.style.boxShadow = "rgb(0 0 0 / 50%) 0px 2px 24px 0px"
        } else if (navItems && theme === "light") {
            navItems.style.boxShadow = "none"
        }
    }, [theme, navItems])

    const layoutDesktop = [
        { i: "ProjectGrid_photo1", x: 0, y: 0, w: 1, h: 2 },
        { i: "ProjectGrid_photo2", x: 1, y: 0, w: 1, h: 1 },
        { i: "ProjectGrid_photo3", x: 1, y: 1, w: 1, h: 1 }, 
        { i: "ProjectGrid_photo4", x: 2, y: 0, w: 2, h: 2 },
      ]
    const layoutTablet = [
        { i: "ProjectGrid_photo1", x: 0, y: 0, w: 2, h: 4 },
        { i: "ProjectGrid_photo2", x: 2, y: 0, w: 2, h: 2 },
        { i: "ProjectGrid_photo3", x: 2, y: 2, w: 2, h: 2 }, 
        { i: "ProjectGrid_photo4", x: 3, y: 5, w: 4, h: 4 },
      ]
    const layoutPhone = [
        { i: "ProjectGrid_photo1", x: 0, y: 0, w: 4, h: 8 },
        { i: "ProjectGrid_photo2", x: 1, y: 0, w: 4, h: 4 },
        { i: "ProjectGrid_photo3", x: 2, y: 0, w: 4, h: 4 }, 
        (projectId === "portfolio" || projectId === "cryptofy") ? { i: "ProjectGrid_photo4", x: 3, y: 0, w: 4, h: 4 } : { i: "ProjectGrid_photo4", x: 3, y: 0, w: 4, h: 6 },
      ]

    const headerLayoutDesktop = [
        { i: "ProjectHeaderGrid_hero", x: 0, y: 0, w: 4, h: 2 }
    ]
    const headerLayoutTablet = [
        { i: "ProjectHeaderGrid_hero", x: 0, y: 0, w: 4, h: 2 },
    ]
    const headerLayoutPhone = [
        { i: "ProjectHeaderGrid_hero", x: 0, y: 0, w: 4, h: projectId === "portfolio" ? 7 : 6 }
    ]

    const messenger = {
        heading: "Flick.",
        subHeading: "The only messenging platform you will need.",
        description: "1 on 1 messaging platform powered by fireabse as a backend. Supports both text and image types, as well as having the functionality to like messages. Clean and swift design. ",
        stack: <div className="TechStack_items_row ProjectsPage_tech-stack">
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">Next.JS</span></div>
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">{width < 920 ? "Javascript" : "Vanilla Javascript"}</span></div>
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">Firebase</span></div>
                </div>,
        demoLink: 'http://www.flickmessenger.com',
        githubLink: 'https://github.com/Jordanbinnie/Flick-Messenger',
        mockUp: <img className="ProjectsPage_content--right_image" src={FlickMockup}/>,
        darkMockUp: <img className="ProjectsPage_content--right_image" src={FlickDarkMockup}/>,
        widget1: theme === "light" ? <img id="IMAGE_chat-screen" src={ChatScreen}/> : <img id="IMAGE_chat-screen" src={ChatDarkScreen}/>,
        widget2: <img src={Flick}/>,
        widget3: <img id="IMAGE_liked-message" src={theme === "light" ? LikedMessage : LikedMessageDark} />,
        widget4: <>
                    <img id="IMAGE_full-screen" src={FullLightScreen} />
                    <img id="IMAGE_full-screen-dark" src={FullDarkScreen} />
                    <div className="flick_color-swatch" onClick={handleFlickColorSwatch}>
                        <div className="flick-swatch">
                            <div className="flick-swatch_bg-container">
                                <div className="flick-swatch-bg"></div>
                            </div>
                        </div>
                    </div>
                </>
    }
    const cryptofy = {
        heading: "Cryptofy",
        subHeading: "Track your crypto. Charts & Insight.",
        description: "Providing fundamental analysis of the digital currency market. Powered by CoinGecko API's. Discover current trending coins, top crypto gainers/losers, and 24 hour, 30 day, 3 month and 1 year chart analysis. ",
        stack: <div className="TechStack_items_row ProjectsPage_tech-stack">
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">React</span></div>
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">{width < 920 ? "Javascript" : "Vanilla Javascript"}</span></div>
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">{width < 920 ? "API" : "Coin Gecko API"}</span></div>
                </div>,
        demoLink: 'https://www.trycryptofy.com',
        githubLink: 'https://github.com/Jordanbinnie/Cryptofy',
        mockUp: <img className="ProjectsPage_content--right_image" src={CryptofyMockup}/>,
        darkMockUp: <img className="ProjectsPage_content--right_image" src={CryptofyDarkMockup}/>,
        widget1: <img id="IMAGE_news-panel" src={theme === "light" ? NewsPanel : NewsDarkPanel}/>,
        widget2: <img src={Cryptofy}/>,
        widget3: <div className="cryptofy_image-widgets">
                    <img onMouseEnter={handleCryptofyWidgetsEnter} onMouseLeave={handleCryptofyWidgetsLeave} id="IMAGE_coin-widget" src={theme === "light" ? CoinWidget : CoinDarkWidget}/>
                    <img id="IMAGE_price-widget" src={theme === "light" ? PriceWidget : PriceDarkWidget} styles="animation:none!important"/>
                    <img id="IMAGE_change-widget" src={theme === "light" ? ChangeWidget : ChangeDarkWidget} styles="animation:none!important"/>
                </div>,
        widget4: <>
                    <img id="IMAGE_coin-table" src={theme === "light" ? CoinTable : CoinDarkTable}/>
                    <img id="IMAGE_coin-graph" src={theme === "light" ? CoinGraph : CoinDarkGraph}/>
                </>,
    }
    const wordle = {
        heading: "Wordle",
        subHeading: "Go on. Give it a try.",
        description: "Inspired by the internet famous word puzzle called Wordle. Created my own version using a custom hook method with React. A new word is generated on every reload/game restart. Custom CSS animations were used to create a more interactive user experience.",
        stack: <div className="TechStack_items_row ProjectsPage_tech-stack">
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">React</span></div>
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">{width < 920 ? "Javascript" : "Vanilla Javascript"}</span></div>
                </div>,
        githubLink: 'https://github.com/Jordanbinnie/Wordle',         
        mockUp: <img className="ProjectsPage_content--right_image_wordle" src={WordleMockup}/>,
        darkMockUp: <img className="ProjectsPage_content--right_image_wordle" src={WordleDarkMockup}/>,
        widget1: <WordleProject />,
        widget2: <img src={Wordle} />,
        widget3: <img id="IMAGE_pop-up" src={theme === "light" ? PopUp : PopUpDark}/>,
        widget4: <div className="wordle_image-container">
                    <img id="IMAGE_game-won" src={theme === "light" ? GameWon : GameDarkWon}/>
                    <img id="IMAGE_game-lost" src={theme === "light" ? GameLost : GameDarkLost}/>
                </div>,
    }
    const portfolio = {
        heading: "Portfolio",
        subHeading: "Modern and unique design.",
        description: "The purpose of this portfolio was to create a very unique and interactive experience for the user, whilst displaying my current work and projects. I was inspired by Apples IOS widgets. I aimed for the perfect balance between beautiful UI and UX design. The draggable grid elements are powered by React Grid Layout. This helped create more of a interactive and IOS feel.",
        stack: <div className="TechStack_items_row ProjectsPage_tech-stack">
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">React</span></div>
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">{width < 920 ? "Javascript" : "Vanilla Javascript"}</span></div>
                    <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">{width < 920 ? "Grid" : "React Grid Layout"}</span></div>
                </div>, 
        githubLink: 'https://github.com/Jordanbinnie/Portfolio',    
        mockUp: <img className="ProjectsPage_content--right_image" src={PortfolioMockup}/>,
        darkMockUp: <img className="ProjectsPage_content--right_image" src={PortfolioDarkMockup}/>,
        widget1: theme === "light" ? <img id="IMAGE_home-page" src={HomePage} /> : <img id="IMAGE_home-page" src={HomePageDark} /> ,
        widget2: <GitHub />,
        widget3: <LinkedIn />,
        widget4: <ThemeMode />,
    }

    const findProject = () => {
        if(projectId === "flick-messenger") return messenger
        if (projectId === "cryptofy") return cryptofy
        if (projectId === "wordle") return wordle
        if (projectId === "portfolio") return portfolio
    }

    const content = findProject()


    // coding for slide
    const projectsArray = ["flick-messenger", "cryptofy", "wordle", "portfolio"]

    const currentProjectIndex = projectsArray?.findIndex(p => p === projectId)

    const nextProject = () => {
        if (currentProjectIndex === projectsArray.length - 1) {
            return projectsArray[0]
        } else {
            return projectsArray[currentProjectIndex + 1]
        }
    }

    const prevProject = () => {
        if (currentProjectIndex === 0) {
            return projectsArray[projectsArray.length - 1]
        } else {
            return projectsArray[currentProjectIndex - 1]
        }
    }

    function handleClick(event) {
        document.body.scrollTop = 0 // For Safari
        document.documentElement.scrollTop = 0 // For Chrome
    }

    function handleHover(event) {
        const clicked = event.currentTarget.getBoundingClientRect()
        const parent = navItems.getBoundingClientRect()
        const amountToMove = clicked.left - parent.left
        activeBG.style.left = amountToMove + "px"
        centerIcon.style.transitionDelay = "0.1s"
        centerIcon.style.fill = "#2c2c2c"
    }

    function handleHoverOff() {
        const centerElement = centerNavItem.getBoundingClientRect()
        const parent = navItems.getBoundingClientRect()
        const amountToMove = centerElement.left - parent.left
        activeBG.style.left = amountToMove + "px"
        centerIcon.style.transitionDelay = "0.4s"
        centerIcon.style.fill = "#ffffff"
    }

    const gridWidth = () => {
        if (width > 1320) {
          return {
            width: 1200,
            rowHeight: 288,
            layout: layoutDesktop,
            headerLayout: headerLayoutDesktop
          }
        }
        else if (width < 1320 && width > 920) {
          return {
            width: 800,
            rowHeight: 188,
            layout: layoutTablet,
            headerLayout: headerLayoutTablet
          }
        }
        if (width < 920) {
          return {
            width: 375,
            rowHeight: 81.5,
            layout: layoutPhone,
            headerLayout: headerLayoutPhone
          }
        }
      }

    useEffect(() => {
        if (fullScreenElement && fullScreenDarkElement) {
            fullScreenElement.style.animation = "none"
            fullScreenDarkElement.style.animation = "none"
        }
    }, [gridWidth()])

    function handleCryptofyWidgetsEnter() {
        changeWidgetElement.style.zIndex = 0
    }

    function handleCryptofyWidgetsLeave() {
        changeWidgetElement.style.zIndex = 2
    }

    function handleFlickColorSwatch() {
        
        let animate1 = width > 920 ? "swapSwatch1 1s ease forwards" : "swapSwatchPhone1 1s ease forwards"
        let animate2 = width > 920 ? "swapSwatch2 1s ease forwards" : "swapSwatchPhone2 1s ease forwards"

        if (colorSwatchElement.offsetLeft === 12) {
            colorSwatchElement.style.left = '-1px'
            colorSwatchElement.style.borderTopLeftRadius = '100px'
            colorSwatchElement.style.borderBottomLeftRadius = '100px'
            colorSwatchElement.style.borderTopRightRadius = '0px'
            colorSwatchElement.style.borderBottomRightRadius = '0px'

            fullScreenElement.style.animation = animate1
            fullScreenDarkElement.style.animation = animate2

        } else if (colorSwatchElement.offsetLeft === -1) {
            colorSwatchElement.style.left = '12px'
            colorSwatchElement.style.borderTopLeftRadius = '0px'
            colorSwatchElement.style.borderBottomLeftRadius = '0px'
            colorSwatchElement.style.borderTopRightRadius = '100px'
            colorSwatchElement.style.borderBottomRightRadius = '100px'

            fullScreenElement.style.animation = animate2
            fullScreenDarkElement.style.animation = animate1

        }   
    }

    if (projectId === "wordle" && wordleGridItem) {
        wordleGridItem.style.padding = '0px'
    } else if (wordleGridItem) {
        wordleGridItem.style.padding = "50px"
    }

    useEffect(() => {

        let animate1 = width > 920 ? "swapSwatch1 1s ease forwards" : "swapSwatchPhone1 1s ease forwards"
        let animate2 = width > 920 ? "swapSwatch2 1s ease forwards" : "swapSwatchPhone2 1s ease forwards"
        if (colorSwatchElement) {
            if (theme === "light") {
                colorSwatchElement.style.left = '12px'
                colorSwatchElement.style.borderTopLeftRadius = '0px'
                colorSwatchElement.style.borderBottomLeftRadius = '0px'
                colorSwatchElement.style.borderTopRightRadius = '100px'
                colorSwatchElement.style.borderBottomRightRadius = '100px'
    
                fullScreenElement.style.animation = animate2
                fullScreenDarkElement.style.animation = animate1
            } else if (theme === "dark") {
                colorSwatchElement.style.left = '-1px'
                colorSwatchElement.style.borderTopLeftRadius = '100px'
                colorSwatchElement.style.borderBottomLeftRadius = '100px'
                colorSwatchElement.style.borderTopRightRadius = '0px'
                colorSwatchElement.style.borderBottomRightRadius = '0px'
    
                fullScreenElement.style.animation = animate1
                fullScreenDarkElement.style.animation = animate2
            }
        }
    }, [content, colorSwatchElement])
    
    return (
        <div className="ProjectsPage">

            <div className="ProjectsPage_header-grid">
                <GridLayout layout={gridWidth()?.headerLayout} isDraggable={false} width={gridWidth()?.width} cols={4} rowHeight={gridWidth()?.rowHeight}>
                    <div className="GridItemWrapper" id="ProjectHeaderGrid_hero" key="ProjectHeaderGrid_hero">
                        <div className="GridItemContent">
                            <div className="ProjectsPage_content">
                                <div className="ProjectsPage_content--left">
                                    <h1 className="heading heading--subHeading">{content.heading}</h1>
                                    <h2 className="heading--extraLarge">{content.subHeading}</h2>
                                    <p className="paragraph paragraph--1 ProjectsPage_paragraph">{content.description}</p>
                                    {content.stack}
                                </div>
                                {width > 1320 && <div className="ProjectsPage_content--right">
                                    {theme === "light" ? content.mockUp : content.darkMockUp}
                                </div>}
                                <div className="button-container">
                                    <a href={content.githubLink} target="_blank" ><button className="paragraph--2 ProjectsPage_button">Source Code</button></a>
                                    {(projectId === "cryptofy" || projectId === "flick-messenger") && <a href={content.demoLink} target="_blank" className="paragraph--2 ProjectsPage_button button--demo">Live Demo</a>}
                                </div>
                                <button className="button paragraph--2 ProjectsPage_button--new heading">New</button>
                            </div>
                        </div>
                    </div>
                </GridLayout>
            </div>

            <div className="ProjectsPage_grid">
                <GridLayout layout={gridWidth()?.layout} isDraggable={userOnDesktop} width={gridWidth()?.width} cols={4} rowHeight={gridWidth()?.rowHeight}>
                    <div className="GridItemWrapper" id="ProjectGrid_photo1" key="ProjectGrid_photo1">
                        <div className="GridItemContent">
                            <div className="grid-image" id="onWordle_no-padding">
                                {content?.widget1}
                            </div>
                        </div>
                    </div>
                    <div className="GridItemWrapper" id="ProjectGrid_photo2" key="ProjectGrid_photo2">
                        <div className="GridItemContent">
                            <div className="grid-image">
                                {content?.widget2} 
                            </div>
                        </div>
                    </div>
                    <div className="GridItemWrapper" id="ProjectGrid_photo3" key="ProjectGrid_photo3">
                        <div className="GridItemContent">
                            <div className="grid-image">
                                {content?.widget3}
                            </div>
                        </div>
                    </div>
                    <div className="GridItemWrapper" id="ProjectGrid_photo4" key="ProjectGrid_photo4">
                        <div className="GridItemContent">
                            <div className="grid-image">
                                {content?.widget4}
                            </div>
                        </div>
                    </div>
                </GridLayout>
            </div>
            <div className="ProjectsPage_Navbar">
                <div className="ProjectsPage_NavBar_item_hover-bg"></div>
                <Link to={`/projects/${nextProject()}`}><div className="ProjectsPage_Navbar_item nav-arrow" id="ProjectsPage_Navbar_arrow--left" onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHoverOff}><ImArrowLeft2 className="ProjectsPage_Navbar_item-icon icon--left-arrow" /></div></Link>
                <Link to="/"><div className="ProjectsPage_Navbar_item nav-cross"><MdOutlineClose className="ProjectsPage_Navbar_item-icon nav-cross_icon" /></div></Link>
                <Link to={`/projects/${prevProject()}`}><div className="ProjectsPage_Navbar_item nav-arrow" id="ProjectsPage_Navbar_arrow--right" onClick={handleClick} onMouseEnter={handleHover} onMouseLeave={handleHoverOff}><ImArrowRight2 className="ProjectsPage_Navbar_item-icon icon--right-arrow" /></div></Link>
            </div>
        </div>
    )
}

export default ProjectsPage