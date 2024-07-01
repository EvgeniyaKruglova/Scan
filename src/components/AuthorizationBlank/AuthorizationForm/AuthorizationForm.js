import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AuthFooter from './AuthFooter/AuthFooter';
import Lock from "../../images/Lock.svg";
import './AuthorizationForm.css'



const AuthorizationForm = (props) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const navigate = useNavigate()
    const phoneRegex = /[+]7\s\d{3}\s\d{3}\s\d{2}\s\d{2}/;

    const onButtonClick = () => {
        setLoginError('')
        setPasswordError('')
       

        if ('' === login) {
            setLoginError('Введите корректные данные ')
            return
        }

        if (!phoneRegex.test(login)) {
            setLoginError('Введите корректные данные ')
            return
        }
        
        if ('' === password) {
            setPasswordError('Неправильный пароль')
            return
        }



    }


    return (
        <>
        <div className="lockContainer">
            <img src={Lock} alt="Lock" />
        </div>
        <div className={'mainContainer'}>
            <div className={'titleContainer'}>
                <a className='link' href='xxx' >Войти</a>
                <a className='linkInactive' href='xxx'>Зарегистрироваться</a>
            </div>
            <br />
            <label className='label'> Логин или номер телефона:</label>
            <div className={'inputContainer'}>
                <input
            
                    type="tel"
                    pattern="[+]7\s\d{3}\s\d{3}\s\d{2}\s\d{2}"
                    value={login}
                    onChange={(ev) => setLogin(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{loginError}</label>
            </div>
            <br />
            <label className='label'>Пароль:</label>
            <div className={'inputContainer'}>
                <input
                    type="password"
                    pattern={password}
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    className={'inputBox'}
                />
                <label className="errorLabel">{passwordError}</label>
            </div>
            <br />
            <div className={'inputContainer'}>
                <input
                    required
                    className={'inputButton'}
                    type="button"
                    onClick={onButtonClick}
                    value={'Войти'}
                />
            </div>
            <a className='formLink' href='xxx' >Восстановить пароль</a>

            <AuthFooter />
        </div>
        </>   
        
    )   

}

export default AuthorizationForm;
