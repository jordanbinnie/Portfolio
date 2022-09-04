import { useEffect, useState, useContext } from "react";
import GridLayout from "react-grid-layout";
import './Grid.css'
import AboutMe from '../about-me/AboutMe'
import TechStack from '../tech-stack/TechStack'
import LinkedIn from '../linkedin/LinkedIn'
import GitHub from '../github/GitHub'
import ThemeMode from '../theme-mode/ThemeMode'
import MessengerProject from '../messenger-project/MessengerProject'
import WordleProject from '../wordle-project/WordleProject'
import CryptoProject from '../crypto-project/CryptoProject'
import ClockWidget from '../clock-widget/ClockWidget'
import PortfolioProject from '../portfolio-project/PortfolioProject';
import { AppContext } from '../../AppContext'
import useCurrentWidth from '../../hooks/useCurrentWidth'

export default function Grid() {

  const [userOnDesktop, setUserOnDesktop] = useState(true)
  const { gridLayout, setGridLayout } = useContext(AppContext)

  let width = useCurrentWidth()
  
  const isTouchDevice = () => {  
    if(window.matchMedia("(pointer: coarse)").matches === false) {
      return true
    } else {
      return false
    }
  }   
  
  useEffect(() => {
    setUserOnDesktop(isTouchDevice())
    setGridLayout("All")
  }, [])

  const layoutDesktop = () => {
    if (gridLayout === "All") return (
      [
        { i: "Grid_about-me", x: 0, y: 0, w: 2, h: 1 },
        { i: "Grid_messenger-project", x: 2, y: 0, w: 1, h: 2 },
        { i: "Grid_theme-mode", x: 3, y: 0, w: 1, h: 1 },
        { i: "Grid_linkedin", x: 0, y: 1, w: 1, h: 1 },
        { i: "Grid_github", x: 1, y: 1, w: 1, h:1 },
        { i: "Grid_crypto-project", x: 3, y: 1, w: 1, h: 2 },
        { i: "Grid_wordle-project", x: 0, y: 2, w: 1, h: 2 },
        { i: "Grid_tech-stack", x: 1, y: 2, w: 2, h: 1 },
        { i: "Grid_clock-widget", x: 1, y: 3, w: 1, h: 1 },
        { i: "Grid_portfolio-project", x: 2, y: 3, w: 2, h: 1 }
      ]
    )
    if (gridLayout === "Profile") return (
      [
        { i: "Grid_about-me", x: 0, y: 0, w: 2, h: 1 },
        { i: "Grid_messenger-project", x: 1, y: 2, w: 2, h: 1 },
        { i: "Grid_theme-mode", x: 0, y: 1, w: 1, h: 1 },
        { i: "Grid_linkedin", x: 2, y: 0, w: 1, h: 1 },
        { i: "Grid_github", x: 3, y: 0, w: 1, h:1 },
        { i: "Grid_crypto-project", x: 3, y: 2, w: 1, h: 2 },
        { i: "Grid_wordle-project", x: 0, y: 2, w: 1, h: 2 },
        { i: "Grid_tech-stack", x: 1, y: 1, w: 2, h: 1 },
        { i: "Grid_clock-widget", x: 3, y: 1, w: 1, h: 1 },
        { i: "Grid_portfolio-project", x: 1, y: 2, w: 2, h: 1 }
      ]
    )
    if (gridLayout === "Projects") return (
      [
        { i: "Grid_about-me", x: 0, y: 3, w: 2, h: 1 },
        { i: "Grid_messenger-project", x: 2, y: 1, w: 1, h: 2 },
        { i: "Grid_theme-mode", x: 1, y: 1, w: 1, h: 1 },
        { i: "Grid_linkedin", x: 2, y: 2, w: 1, h: 1 },
        { i: "Grid_github", x: 1, y: 0, w: 1, h:1 },
        { i: "Grid_crypto-project", x: 3, y: 0, w: 1, h: 2 },
        { i: "Grid_wordle-project", x: 0, y: 0, w: 1, h: 2 },
        { i: "Grid_tech-stack", x: 2, y: 3, w: 2, h: 1 },
        { i: "Grid_clock-widget", x: 3, y: 2, w: 1, h: 1 },
        { i: "Grid_portfolio-project", x: 0, y: 2, w: 2, h: 1 }
      ]
    )
  }

    const layoutTablet = () => {
      if (gridLayout === "All") return (
        [
          { i: "Grid_about-me", x: 0, y: 0, w: 2, h: 2 },
          { i: "Grid_messenger-project", x: 2, y: 0, w: 1, h: 2 },
          { i: "Grid_theme-mode", x: 2, y: 5, w: 1, h: 1 },
          { i: "Grid_linkedin", x: 0, y: 1, w: 1, h: 1 },
          { i: "Grid_github", x: 1, y: 1, w: 1, h:1 },
          { i: "Grid_crypto-project", x: 3, y: 0, w: 1, h: 2 },
          { i: "Grid_wordle-project", x: 0, y: 2, w: 2, h: 3 },
          { i: "Grid_tech-stack", x: 2, y: 2, w: 2, h: 2 },
          { i: "Grid_clock-widget", x: 3, y: 5, w: 1, h: 1 },
          { i: "Grid_portfolio-project", x: 2, y: 4, w: 2, h: 1 }
        ]
      )
      if (gridLayout === "Profile") return (
        [
          { i: "Grid_about-me", x: 0, y: 0, w: 2, h: 2 },
          { i: "Grid_messenger-project", x: 2, y: 3, w: 1, h: 2 },
          { i: "Grid_theme-mode", x: 2, y: 2, w: 1, h: 1 },
          { i: "Grid_linkedin", x: 0, y: 1, w: 1, h: 1 },
          { i: "Grid_github", x: 1, y: 1, w: 1, h:1 },
          { i: "Grid_crypto-project", x: 3, y: 3, w: 1, h: 2 },
          { i: "Grid_wordle-project", x: 0, y: 2, w: 2, h: 3 },
          { i: "Grid_tech-stack", x: 2, y: 0, w: 2, h: 2 },
          { i: "Grid_clock-widget", x: 3, y: 2, w: 1, h: 1 },
          { i: "Grid_portfolio-project", x: 2, y: 4, w: 2, h: 1 }
        ]
      )
      if (gridLayout === "Projects") return (
        [
          { i: "Grid_about-me", x: 0, y: 3, w: 2, h: 2 },
          { i: "Grid_messenger-project", x: 2, y: 0, w: 1, h: 2 },
          { i: "Grid_theme-mode", x: 0, y: 3, w: 1, h: 1 },
          { i: "Grid_linkedin", x: 2, y: 3, w: 1, h: 1 },
          { i: "Grid_github", x: 1, y: 1, w: 1, h:1 },
          { i: "Grid_crypto-project", x: 3, y: 0, w: 1, h: 2 },
          { i: "Grid_wordle-project", x: 0, y: 0, w: 2, h: 3 },
          { i: "Grid_tech-stack", x: 2, y: 4, w: 2, h: 2 },
          { i: "Grid_clock-widget", x: 3, y: 2, w: 1, h: 1 },
          { i: "Grid_portfolio-project", x: 2, y: 2, w: 2, h: 1 }
        ]
      )
    }

    const layoutPhone = () => {
      if (gridLayout === "All") return (
        [
          { i: "Grid_about-me", x: 0, y: 0, w: 4, h: 4 },
          { i: "Grid_messenger-project", x: 0, y: 14, w: 2, h: 4 },
          { i: "Grid_theme-mode", x: 0, y: 12, w: 2, h: 2 },
          { i: "Grid_linkedin", x: 0, y: 4, w: 2, h: 2 },
          { i: "Grid_github", x: 2, y: 4, w: 2, h:2 },
          { i: "Grid_crypto-project", x: 2, y: 12, w: 2, h: 4 },
          { i: "Grid_wordle-project", x: 0, y: 18, w: 4, h: 6 },
          { i: "Grid_tech-stack", x: 0, y: 8, w: 4, h: 4 },
          { i: "Grid_clock-widget", x: 2, y: 16, w: 2, h: 2 },
          { i: "Grid_portfolio-project", x: 0, y: 6, w: 4, h: 2 }
        ]
      )
      if (gridLayout === "Profile") return (
        [
          { i: "Grid_about-me", x: 0, y: 0, w: 4, h: 4 },
          { i: "Grid_messenger-project", x: 0, y: 14, w: 2, h: 4 },
          { i: "Grid_theme-mode", x: 0, y: 10, w: 2, h: 2 },
          { i: "Grid_linkedin", x: 0, y: 4, w: 2, h: 2 },
          { i: "Grid_github", x: 2, y: 4, w: 2, h:2 },
          { i: "Grid_crypto-project", x: 2, y: 12, w: 2, h: 4 },
          { i: "Grid_wordle-project", x: 0, y: 18, w: 4, h: 6 },
          { i: "Grid_tech-stack", x: 0, y: 6, w: 4, h: 4 },
          { i: "Grid_clock-widget", x: 2, y: 10, w: 2, h: 2 },
          { i: "Grid_portfolio-project", x: 0, y: 12, w: 4, h: 2 }
        ]
      )
      if (gridLayout === "Projects") return (
        [
          { i: "Grid_about-me", x: 0, y: 14, w: 4, h: 4 },
          { i: "Grid_messenger-project", x: 0, y: 2, w: 2, h: 4 },
          { i: "Grid_theme-mode", x: 0, y: 0, w: 2, h: 2 },
          { i: "Grid_linkedin", x: 0, y: 18, w: 2, h: 2 },
          { i: "Grid_github", x: 2, y: 4, w: 2, h:2 },
          { i: "Grid_crypto-project", x: 2, y: 0, w: 2, h: 4 },
          { i: "Grid_wordle-project", x: 0, y: 8, w: 4, h: 6 },
          { i: "Grid_tech-stack", x: 0, y: 20, w: 4, h: 4 },
          { i: "Grid_clock-widget", x: 2, y: 16, w: 2, h: 2 },
          { i: "Grid_portfolio-project", x: 0, y: 6, w: 4, h: 2 }
        ]
      )
    }
  
  const widgetGroups = {
    All: ["Grid_about-me", "Grid_messenger-project", "Grid_theme-mode", "Grid_linkedin", "Grid_github", 
    "Grid_crypto-project", "Grid_wordle-project", "Grid_tech-stack", "Grid_clock-widget", "Grid_portfolio-project"],
    Profile: ["Grid_about-me", "Grid_theme-mode", "Grid_linkedin", "Grid_github", "Grid_tech-stack", "Grid_clock-widget"],
    Projects: ["Grid_messenger-project", "Grid_theme-mode", "Grid_github", "Grid_crypto-project", "Grid_wordle-project", "Grid_portfolio-project"]
  }

  const isWidgetActive = (id) => {
    if (gridLayout === "All") {
      return
    }
    if (gridLayout === "Profile") {
      if (!widgetGroups.Profile.includes(id)) {
        return "widgetNotActive"
      }
    }
    if (gridLayout === "Projects") {
      if (!widgetGroups.Projects.includes(id)) {
        return "widgetNotActive"
      }
    }
  }
  
  const gridWidth = () => {
    if (width > 1320) {
      return {
        width: 1200,
        rowHeight: 288,
        layout: layoutDesktop()
      }
    }
    else if (width < 1320 && width > 920) {
      return {
        width: 800,
        rowHeight: 188,
        layout: layoutTablet()
      }
    }
    if (width < 920) {
      return {
        width: 375,
        rowHeight: 81.5,
        layout: layoutPhone()

      }
    }
  }

  return (
    <div className="grid">
      <GridLayout layout={gridWidth()?.layout} isDraggable={userOnDesktop} cols={4} rowHeight={gridWidth()?.rowHeight} width={gridWidth()?.width}>
        <div className={`GridItemWrapper ${isWidgetActive("Grid_about-me")}`} id="Grid_about-me" key="Grid_about-me">
          <div className="GridItemContent">
            <AboutMe />
          </div>
        </div>
        <div className={`GridItemWrapper ${isWidgetActive("Grid_messenger-project")}`} id="Grid_messenger-project" key="Grid_messenger-project">
          <div className="GridItemContent">
            <MessengerProject />
          </div>
        </div>
        <div className={`GridItemWrapper ${isWidgetActive("Grid_theme-mode")}`} id="Grid_theme-mode" key="Grid_theme-mode">
          <div className="GridItemContent">
            <ThemeMode />
          </div>
        </div>
        <div className={`GridItemWrapper ${isWidgetActive("Grid_linkedin")}`} id="Grid_linkedin" key="Grid_linkedin">
          <div className="GridItemContent">
            <LinkedIn />
          </div>
        </div>
        <div className={`GridItemWrapper ${isWidgetActive("Grid_github")}`} id="Grid_github" key="Grid_github">
          <div className="GridItemContent">
            <GitHub />
          </div>
        </div>
        <div className={`GridItemWrapper ${isWidgetActive("Grid_crypto-project")}`} id="Grid_crypto-project" key="Grid_crypto-project">
          <div className="GridItemContent">
            <CryptoProject />
          </div>
        </div>
        <div className={`GridItemWrapper ${isWidgetActive("Grid_wordle-project")}`} id="Grid_wordle-project" key="Grid_wordle-project">
          <div className="GridItemContent">
            <WordleProject />
          </div>
        </div>
        <div className={`GridItemWrapper ${isWidgetActive("Grid_tech-stack")}`} id="Grid_tech-stack" key="Grid_tech-stack">
          <div className="GridItemContent">
            <TechStack />
          </div>
        </div>
        <div className={`GridItemWrapper ${isWidgetActive("Grid_clock-widget")}`} id="Grid_clock-widget" key="Grid_clock-widget">
          <div className="GridItemContent">
            <ClockWidget />
          </div>
        </div>
        <div className={`GridItemWrapper ${isWidgetActive("Grid_portfolio-project")}`} id="Grid_portfolio-project" key="Grid_portfolio-project">
          <div className="GridItemContent">
            <PortfolioProject />
          </div>
        </div>
      </GridLayout>
    </div>
  );
};