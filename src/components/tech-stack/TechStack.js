import React from 'react'
import './TechStack.css'

function TechStack() {
  return (
    <div className="TechStack">
        <h1 className="heading heading--2">What I've been up to.</h1>
        <p className="paragraph paragraph--1">React is by far one of my favourite and core frameworks I work with. Here is a list of some of the technologies/frameworks I know.</p>
        <div className="TechStack_items">
            <div className="TechStack_items_row">
                <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">React</span></div>
                <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">Next.JS</span></div>
                <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">Firebase</span></div>
            </div>
            <div className="TechStack_items_row">
                <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">Javascript</span></div>
                <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">Git</span></div>
                <div className="TechStack_item"><span className="TechStack_item_text paragraph paragraph--2">Typescript</span></div>
            </div>
        </div>
    </div>
  )
}

export default TechStack