import React from "react"
import './MainPage.css'
import Mainman from "../images/Mainman.svg"
import Sittingman from "../images/Sittingman.svg"
import CustomArrow from './CustomArrow/CustomArrow'
import Tariffs from './Tariffs/Tariffs';




export default function MainPage() {
    return (
        <>
            <main className="main">
                <div className="mainInfo">
                    <div className = "globalContent">
                        <h1 className="mainTitle">сервис по поиску публикаций <br /> о компании <br /> по его ИНН</h1>
                        <p className="mainDescription"> Комплексный анализ публикаций, получение данных в формате PDF на электронную почту</p>
                        <button className="requestData">Запросить данные</button>
                       
                    </div>
                
                    <div className="mainMan">
                        <img src={Mainman} alt="Mainman"/>
                    </div>
                    
                </div>
      
                <CustomArrow />

                <div className="sittingMan">
                    <img src={Sittingman} alt="Sittingman" />
                </div>


                <Tariffs />
                
               
                
            </main>
            
            
            

        </>

    )


}