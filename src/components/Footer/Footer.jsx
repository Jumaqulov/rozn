import React from 'react'
import logo from '../../assets/imgs/image 1.png'

export default function Footer() {
    return (
        <footer className="py-5" style={{ backgroundColor: '#22232d', color: '#a0a0a0' }}>
            <div className="container d-flex flex-column flex-md-row justify-content-between gap-4 text-white-50">
                <div className="flex-shrink-0" style={{ minWidth: '280px' }}>
                    <div className="d-flex align-items-center mb-3 gap-2">
                        <img
                            src={logo}
                            alt="1С-Товары"
                            style={{ width: '30px', height: '30px' }}
                        />
                        <span className="fw-semibold text-white">1С-Товары</span>
                    </div>
                    <div className="mb-2">
                        <div>Линия консультации</div>
                        <a href="tel:+998946171012" className="text-white fw-semibold text-decoration-none">
                            +998-94-617-10-12
                        </a>
                    </div>
                    <div className="mb-2">
                        <div>Наш e-mail</div>
                        <a href="mailto:avazjonjumoqulov@gmail.com" className="text-white fw-semibold text-decoration-none">
                            avazjonjumoqulov@gmail.com
                        </a>
                    </div>
                    <button className="btn btn-success rounded-pill px-4 py-2 mb-2">
                        Заказать звонок
                    </button>
                    <div style={{ fontSize: '1rem', color: '#3f7e3f' }}>
                        Для активации перейдите на{' '}
                        <a href="https://portal.1c.ru" className="text-success text-decoration-underline">
                            portal.1c.ru
                        </a>{' '}
                        или обратитесь к Вашему партнеру 1С.<br />
                        <a href="#" className="text-success text-decoration-underline">
                            Инструкция по установке сервиса
                        </a>
                    </div>
                </div>

                <div>
                    <h6 className="fw-semibold text-white mb-3">Информация</h6>
                    <ul className="list-unstyled text-white-50">
                        <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Как это работает</a></li>
                        <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Инструкции</a></li>
                        <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Блог</a></li>
                        <li><a href="#" className="text-white-50 text-decoration-none">О нас</a></li>
                    </ul>
                </div>

                <div>
                    <h6 className="fw-semibold text-white mb-3">Продукты</h6>
                    <ul className="list-unstyled text-white-50">
                        <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">1С-Ритейл Чекер Демо</a></li>
                        <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">1С-Товары.Тестовый для магазина на 1 месяц</a></li>
                        <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">1С-Ритейл Чекер</a></li>
                        <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">1С-Товары 300</a></li>
                        <li><a href="#" className="text-white-50 text-decoration-none">1С-Товары 30000</a></li>
                    </ul>
                </div>
            </div>

            <div className="container d-flex justify-content-between text-white-50 mt-5" style={{ fontSize: '0.8rem' }}>
                <span style={{ fontSize: '17px' }}>1С-Товары © 2023 &nbsp;&nbsp;&nbsp; Сайт создан —{' '}</span>
                <a href="https://reactdev-alpha.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-success text-decoration-none" style={{ fontSize: '17px' }}>
                    reactdev-alpha.vercel.app
                </a>
            </div>
        </footer>
    )
}
