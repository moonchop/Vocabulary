import React from 'react'
import{Link} from "react-router-dom"

export default function Header() {
    return (
        <div className="header">
            <h1>
            <Link to="/">토익 영단어(Home)</Link>
            </h1>
            <div className="menu">
                <Link to ="/create_word">
                    단어추가
                </Link>
                <a href="#x" classname="link">
                    Day추가
                </a>
            </div>
            
        </div>
    )
}
