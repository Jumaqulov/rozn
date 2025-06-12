import React from 'react'
import bannerImage from '../../assets/imgs/Grocery shopping-amico 2.png'

export default function IntroSection() {
    return (
        <section className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start">
                    <h1 className="fw-bold mb-3" style={{ fontSize: '3.5rem', lineHeight: 1.2 }}>
                        Управление запасами розничного магазина
                    </h1>
                    <p className="text-muted mb-4" style={{ fontSize: '1.2rem' }}>
                        Использование сервиса 1С-Товары позволяет значительно упростить работу по формированию заявок поставщику.
                    </p>
                    <button type="button" className="order_button d-block mx-auto mx-lg-0">
                        Заказать демонстрацию
                    </button>
                </div>

                <div className="col-lg-6 d-flex justify-content-center">
                    <img
                        src={bannerImage}
                        alt="Banner Illustration"
                        className="img-fluid"
                        style={{ maxHeight: '450px', objectFit: 'contain' }}
                    />
                </div>
            </div>
        </section>
    )
}