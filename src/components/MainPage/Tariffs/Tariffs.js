import React from "react"
import './Tariffs.css'
import Light from "../../images/Light.svg";
import Target from "../../images/Target.svg";
import Notebook from "../../images/Notebook.svg";


const TariffsCard = () => {
    return (
        <>
            <div>
                <h1 className='tariffs_title'> наши тарифы </h1 >
            </div>

            <div className='tariffs'>
                <div className='tariffs__card beginner'>
                    <div className='tariffs_box'>
                        <div className='card_name'>
                            <h1> Beginner </h1>
                            <section>Для небольшого исследования</section>
                        </div>
                        <div className='light'>
                            <img src={Light} alt="Light"/>
                        </div>
                    </div> 
                    <div className='main_info'>
                        <section className='actual-tariff'> Текущий тариф </section>
                        <h2 className='price'>799 ₽<span className='old-price'>1 200 ₽</span></h2>
                        <section className='price-installment'> или 150 ₽/мес. при рассрочке на 24 мес.</section>
                        <h3>В тариф входит:</h3>
                        <ul className='description-list'>
                            <li>Безлимитная история запросов</li>
                            <li>Безопасная сделка</li>
                            <li>Поддержка 24/7</li>
                        </ul>
                        <button className='tariff-button'>Перейти в личный кабинет</button>
                    </div>
 
                </div>
                <div className='tariffs__card pro'>
                    <div className='tariffs_box'>
                        <div className='card_name'>
                            <h1> Pro </h1>
                            <section> Для HR и фрилансеров</section>
                        </div>
                        <div className='target'>
                            <img src={Target} alt="Target"/>
                        </div>
                    </div> 
                    <div className='main_info'>
                        <section className='actual-tariff' style={{ visibility: 'hidden' }}> Текущий тариф </section>
                        <h2 className='price'>1 299 ₽ <span className='old-price'>2 600 ₽</span></h2>
                        <section className='price-installment'> или 279 ₽/мес. при рассрочке на 24 мес.</section>
                        <h3>В тариф входит:</h3>
                        <ul className='description-list'>
                            <li>Все пункты тарифа Beginner</li>
                            <li>Экспорт истори</li>
                            <li>Рекомендации по приоритетам</li>
                        </ul>
                        <button className='description-button'>Подробнее</button>
                    </div>
                </div>
                <div className='tariffs__card business'>
                    <div className='tariffs_box'>
                        <div className='card_name'>
                            <h1 style={{ color: 'white' }}> Business </h1>
                            <section style={{ color: 'white' }}> Для корпоративных клиентов</section>
                        </div>
                        <div className='notebook'>
                            <img src={Notebook} alt="Notebook" />
                        </div>
                    </div>
                    <div className='main_info'>
                        <section className='actual-tariff' style={{ visibility: 'hidden' }}> Текущий тариф </section>
                        <h2 className='price'>2 379 ₽ <span className='old-price'>3 700 ₽</span></h2>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h3>В тариф входит:</h3>
                        <ul className='description-list'>
                            <li>Все пункты тарифа Pro</li>
                            <li>Безлимитное количество запросов</li>
                            <li>Приоритетная поддержка</li>
                        </ul>
                        <button className='description-button'>Подробнее</button>
                    </div>

                </div>
            </div>
            
        </>
    )
        
}
export default TariffsCard



