import React from "react"
import { Link } from 'react-router-dom'
import './NavBar.css'



export default function NavBar() {
  
    return (
        <nav>
            <ul className="list">
                <Link className="items items__active">Главная</Link>
                <li className="items">Тарифы</li>
                <li className="items">FAQ</li>
                
            </ul>
        </nav>

    )
}