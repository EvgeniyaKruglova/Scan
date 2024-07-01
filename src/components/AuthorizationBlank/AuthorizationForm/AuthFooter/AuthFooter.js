import React from 'react'
import './AuthFooter.css'
import Google from "../../../images/Google.svg";
import Facebook from "../../../images/Facebook.svg";
import Yandex from "../../../images/Yandex.svg";

export default function AuthFooter() {

    return (
        <div className="footerContainer" >
            <section>Войти через</section>
            <div className = "footerImage">
                <img src={Google} alt="Google" />
            </div>
            <div className="footerImage">
                <img src={Facebook} alt="Facebook" />
            </div>
            <div className="footerImage">
                <img src={Yandex} alt="Yandex" />
            </div>
        </div>


    )
}