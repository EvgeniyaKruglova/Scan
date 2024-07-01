

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './CustomArrow.css';
import Сlock from "../../images/Clock.svg";
import Search from "../../images/Search.svg";
import Shield from "../../images/Shield.svg";
import { ReactComponent as RightChevron } from './right-chevron.svg';
import { ReactComponent as LeftChevron } from './left-chevron.svg';
function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <RightChevron
            className={className}
            style={{ ...style, display: "block", background: "wite" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <LeftChevron
            className={className}
            style={{ ...style, display: "block", background: "wite" }}
            onClick={onClick}
        />
    );
}

function CustomArrows() {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (

        <div>
            <h1 className='slider__title'>почему именно мы</h1>
            <div className="slider-container">
                <Slider {...settings}>
                    <div className='slider-container__card '>
                        <img src={Сlock} alt="Clock" />
                        <section className='card__info'>Высокая и оперативная скорость обработки заявки</section>
                    </div>
                    <div className='slider-container__card'>
                       <img src={Search} alt="Search" />
                       <section className='card__info'>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</section>
                    </div>
                    <div className='slider-container__card'>
                       <img src={Shield} alt="Shield" />
                       <section className='card__info'>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</section>
                    </div>
                    <div className='slider-container__card'>
                        <img src={Сlock} alt="Clock" />
                        <section className='card__info'>Высокая и оперативная скорость обработки заявки</section>
                    </div>
                    <div className='slider-container__card'>
                        <img src={Search} alt="Search" />
                        <section className='card__info'>Огромная комплексная база данных, обеспечивающая объективный ответ на запрос</section>
                    </div>
                    <div className='slider-container__card'>
                        <img src={Shield} alt="Shield" />
                        <section className='card__info'>Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству</section>
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default CustomArrows;
