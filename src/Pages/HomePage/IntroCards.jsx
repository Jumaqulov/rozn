import React from 'react'
import { cardsData } from '../../Data/HomeData'
import { IoGiftOutline } from "react-icons/io5";

export default function IntroCards() {
    return (
        <section className="py-5 intro_card_section">
            <div className='container'>
                <div className="row g-4 mb-4">
                    {cardsData.slice(0, 2).map(({ title, text, icon, color, background }, idx) => (
                        <div key={idx} className="col-12 col-md-6">
                            <div className="intro_card h-100 p-4">
                                <div className='d-flex align-items-center gap-3'>
                                    <span className="mb-2 intro-icons" style={{ color: color, background: background }}>
                                        {icon}
                                    </span>
                                    <h5 className="card-title fw-semibold">{title}</h5>
                                </div>
                                <p className="card-text text-muted">{text}</p>
                                <a href='#' className="btn btn-outline-success btn-sm rounded-pill mt-auto px-4 w-25 w-md-auto">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row g-4 mb-4">
                    {cardsData.slice(2, 5).map(({ title, text, icon, color, background }, idx) => (
                        <div key={idx} className="col-12 col-md-4">
                            <div className="intro_card h-100 p-4">
                                <div className='d-flex align-items-center gap-3'>
                                    <span className="mb-2 intro-icons" style={{ color: color, background: background }}>
                                        {icon}
                                    </span>
                                    <h5 className="card-title fw-semibold">{title}</h5>
                                </div>
                                <p className="card-text text-muted">{text}</p>
                                <a href='#' className="btn btn-outline-success btn-sm rounded-pill mt-auto px-4 w-50 w-md-auto">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row g-4">
                    {cardsData.slice(5, 7).map(({ title, text, icon, color, background }, idx) => (
                        <div key={idx} className="col-12 col-md-6">
                            <div className="intro_card h-100 p-4">
                                <div className='d-flex align-items-center gap-3'>
                                    <span className="mb-2 intro-icons" style={{ color: color, background: background }}>
                                        {icon}
                                    </span>
                                    <h5 className="card-title fw-semibold">{title}</h5>
                                </div>
                                <p className="card-text text-muted">{text}</p>
                                <a href='#' className="btn btn-outline-success btn-sm rounded-pill mt-auto px-4 w-25 w-md-auto">
                                    Подробнее
                                </a>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="intro_card_last_box">
                    <div className="d-flex align-items-center gap-1 text-success fw-semibold">
                        <span className='mb-2'><IoGiftOutline /></span>
                        <span className='h6'>Подключи любой продукт на 1 месяц бесплатно и оцени наши преимущества</span>
                    </div>
                    <div className='text-center'>
                        <button className="order_button d-block mx-auto mx-lg-0">
                            Подключить сейчас
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
