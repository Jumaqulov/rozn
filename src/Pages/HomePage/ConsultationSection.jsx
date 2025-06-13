import React from 'react'

export default function ConsultationSection() {
    return (
        <section className="py-5 px-4" style={{ background: '#f7f9f8' }}>
            <div className="container">
                <div className="row align-items-center p-5" style={{
                    background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                    borderRadius: '30px',
                    color: 'white',
                }}>
                    {/* Matn qismi */}
                    <div className="col-lg-5">
                        <h2 className="fw-bold mb-3" style={{ lineHeight: 1.2 }}>
                            Хотите бесплатную консультацию? <br />
                            Оставляйте заявку
                        </h2>
                        <p className="mb-0">
                            Оставляйте заявку и наши менеджеры свяжутся с Вами в ближайшее время
                        </p>
                    </div>

                    {/* Forma qismi */}
                    <div className="col-lg-7">
                        <form className="row g-3">
                            <div className="col-12">
                                <label htmlFor="name" className="form-label">
                                    Ваше имя
                                </label>
                                <input
                                    type="text"
                                    className="form-control rounded-pill"
                                    id="name"
                                    placeholder="Ваше имя"
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="phone" className="form-label">
                                    Ваш телефон
                                </label>
                                <input
                                    type="tel"
                                    className="form-control rounded-pill"
                                    id="phone"
                                    placeholder="Ваш телефон"
                                    required
                                />
                            </div>

                            <div className="col-12">
                                <label htmlFor="email" className="form-label">
                                    Ваш e-mail
                                </label>
                                <input
                                    type="email"
                                    className="form-control rounded-pill"
                                    id="email"
                                    placeholder="Ваш e-mail"
                                    required
                                />
                            </div>

                            <div className="col-12 d-flex align-items-center justify-content-between">
                                <small style={{ fontSize: '0.7rem' }}>
                                    Нажимая кнопку вы даете согласие на обработку персональных данных в соответствии с политикой конфиденциальности.
                                </small>
                                <button type="submit" className="btn btn-dark rounded-pill px-4 py-2">
                                    Отправить
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
