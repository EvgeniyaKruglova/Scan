import React from "react"
import './Header.css'
import NavBar from './NavBar/NavBar'
import BurgerMenu from './BurgerMenu/BurgerMenu'

import Scan from "../images/Scan.svg"
import Authorization from "./Authorization/Authorization"


export default function Header() {
    return (
        <header className='header'>
            <div className='Scan'>
                <img className = "scan" src={Scan} alt='Scan' />
            </div>
            <NavBar />
            <BurgerMenu />
            <Authorization />
            
        </header>

    )
}