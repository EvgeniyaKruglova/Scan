import React from 'react'
import './Footer.css'
import Emptyscan from "../images/Emptyscan.svg"



const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer-main'>
                <img src={Emptyscan} alt='Emptyscan' />
                <div className='contacts'>
                    <div>г. Москва, Цветной б-р, 40</div>
                    <div>+7 495 771 21 11</div>
                    <div>info@skan.ru</div>
                    <p>Copyright. 2022</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer