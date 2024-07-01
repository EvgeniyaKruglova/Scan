
import { useState } from 'react'
import {useNavigate } from "react-router-dom"
import './BurgerMenu.css'
import Burger from "../../images/Burger.svg"
import Emptyscan from "../../images/Emptyscan.svg"
import Cross from  "../../images/Cross.svg"

function LoginButton() {
    function handleClick() {
        navigate("/login");
    }
    const navigate = useNavigate();

    return (
        <button  className='login-button' onClick={handleClick}>
            Войти
        </button>
    );
}


export default function BurgerMenu() {
    const [isOpen, setOpen] = useState(false)
    
    const handleClick = () => {
        setOpen(!isOpen);
    };
    return (
        <nav className="bm-menu">
            {(isOpen && (
               
                <div className="emptyScan">
                    <img className = "emptyScan-image" src={Emptyscan} alt='Emptyscan' />
                    <ul className="bm-menu-list" >
                        <div className = "nav-list">
                            <li className="items-burger">Главная</li>
                            <li className="items-burger">Тарифы</li>
                            <li className="items-burger">FAQ</li>
                        </div>
                        <a className="registration " href='XXX'> Зарегистрироваться</a>
                    </ul>
                    
                    <LoginButton />
                </div>
            ))}

            <button className='burger-button' onClick={handleClick}>
                {!isOpen ? <img src={Burger} className='burger' alt='Burger' /> : <img src={Cross} className ='cross' alt='Cross' />}
                
            </button>
        </nav >
    );
};



