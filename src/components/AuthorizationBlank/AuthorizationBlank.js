import React from "react"
import './AuthorizationBlank.css'
import Characters from "../images/Characters.svg"
import AuthorizationForm from "./AuthorizationForm/AuthorizationForm"


export default function AuthorizationBlank() {

    return (
        <main className="main">
            <div className="main__auth">
                <div className='main_left'>
                    <h1 className="main_title">Для оформления подписки на тариф, необходимо авторизоваться. </h1>
                </div>
                <AuthorizationForm />
            </div>
            <img className='characters' src={Characters} alt='characters' />
            
        </main>
                

    )
}