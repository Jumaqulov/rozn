import React from 'react'
import '../../assets/css/Navbar.css'
import logo from '../../assets/imgs/image 1.png'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
            <div className="container">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="logo" width="40" height="40" className="me-2" />
                    <span className="fw-semibold" style={{ fontSize: '1.1rem' }}>1С-Товары</span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end align-items-center" id="navbarNav">
                    <ul className="navbar-nav d-flex flex-column flex-md-row gap-3 mb-0 text-center text-md-center">
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Как это работает</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Инструкции</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Продукты</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">База знаний</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">О нас</a>
                        </li>

                        <a href="/login" className="btn px-4 ms-3 nav_login">
                            Вход
                        </a>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
