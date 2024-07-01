
import React from "react"
import './Authorization.css'
import Verticaleline from "../../images/Verticaleline.svg"
import { useNavigate } from "react-router-dom";

function LoginButton() {
    const navigate = useNavigate();

    function handleClick() {
        navigate("/login");
    }
    return (
        <button className='authorization-button' type="button" onClick={handleClick}>
            Войти
        </button>
    );
}

export default function Authorization() {

    return (
        <nav>
        <ul className = "authorization">
            <li className="items-authorization registration-computer">Зарегистрироваться</li>
            <li className="items-authorization"><img src={Verticaleline} alt='Verticaleline' /></li>
            <li className="items-authorization">
              <LoginButton />
            </li>   
        </ul>
        </nav>
    )
}