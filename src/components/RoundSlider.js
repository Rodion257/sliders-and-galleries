import React from "react";
import './RoundSlider.css';
import './RoundSliderMobile.css';
import RoundSliderMobile from "./RoundSliderMobile";
//TODO ФИКС CSS КЛАССОВ

function RoundSlider() {


    return (
        <section className="round-slider">
            <h2 className="round-slider__title">шесть факторов профессиональной защиты.</h2>
            <div className="round-slider__wrapper">

                <h3 className="round-slider__name round-slider__name_title-top">ПОДХОДИТ ДЛЯ HI_TECH МАТЕРИАЛОВ_ </h3>
                <div className="round-slider__row">
                    <div className="round-slider__column">
                        <div className="round-slider__text-wrapper round-slider__text-wrapper_left-top">
                            <h3 className="round-slider__name round-slider__name_title-left">_УНИКАЛЬНОСТЬ /</h3>
                            <p className="round-slider__name round-slider__name_description-left">ЗАПАТЕНТОВАННЫЕ ТЕХНОЛОГИИ </p>
                        </div>
                        <div className="round-slider__text-wrapper round-slider__text-wrapper_left-bottom">
                            <h3 className="round-slider__name round-slider__name_title-left">_ЭКСПЕРТИЗА / </h3>
                            <p className="round-slider__name round-slider__name_description-left">СОБСТВЕННЫЕ НАУЧНЫЕ РАЗРАБОТКИ </p>
                        </div>
                    </div>

                    <div className="round-slider__hexagon" />

                    <div className="round-slider__column">
                        <div className="round-slider__text-wrapper round-slider__text-wrapper_right-top">
                            <h3 className="round-slider__name round-slider__name_title-right">ЗАЩИТА БЕЛОГО ЦВЕТА /</h3>
                            <p className="round-slider__name round-slider__name_description-right">ТЕХНОЛОГИЯ EXTRA WHITE_</p>
                        </div>
                        <h3 className="round-slider__name round-slider__name_title-right-bottom">ЕВРОПЕЙСКИЕ ИННОВАЦИИ_</h3>
                    </div>
                </div>
                <div className="round-slider__text-wrapper round-slider__text-wrapper_bottom">
                    <h3 className="round-slider__name round-slider__name_title-bottom">_СОЗДАН ДЛЯ РОССИИ / </h3>
                    <p className="round-slider__name round-slider__name_description-bottom">РАЗРАБОТАН ДЛЯ ЭКСТРЕМАЛЬНЫХ  УСЛОВИЙ</p>
                </div>
            </div>

            <RoundSliderMobile>
                <h3 className="round-slider-mobile__name">ПОДХОДИТ ДЛЯ HI_TECH МАТЕРИАЛОВ_ </h3>
                <div className="round-slider-mobile__text-wrapper">
                    <h3 className="round-slider-mobile__name">_УНИКАЛЬНОСТЬ /</h3>
                    <p className="round-slider-mobile__name">ЗАПАТЕНТОВАННЫЕ ТЕХНОЛОГИИ </p>
                </div>
                <div className="round-slider-mobile__text-wrapper">
                    <h3 className="round-slider-mobile__name ">_ЭКСПЕРТИЗА / </h3>
                    <p className="round-slider-mobile__name">СОБСТВЕННЫЕ НАУЧНЫЕ РАЗРАБОТКИ </p>
                </div>
                <div className="round-slider-mobile__text-wrapper">
                    <h3 className="round-slider-mobile__name">ЗАЩИТА БЕЛОГО ЦВЕТА /</h3>
                    <p className="round-slider-mobile__name">ТЕХНОЛОГИЯ EXTRA WHITE_</p>
                </div>
                <h3 className="round-slider-mobile__name">ЕВРОПЕЙСКИЕ ИННОВАЦИИ_</h3>

                <div className="round-slider-mobile__text-wrapper">
                    <h3 className="round-slider-mobile__name">_СОЗДАН ДЛЯ РОССИИ / </h3>
                    <p className="round-slider-mobile__name">РАЗРАБОТАН ДЛЯ ЭКСТРЕМАЛЬНЫХ  УСЛОВИЙ</p>
                </div>
            </RoundSliderMobile>
        </section>
    );
}

export default RoundSlider;
