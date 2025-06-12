import React from 'react'

export default function ConsultationSection() {
    return (
        <section
            className="py-5 px-4 rounded-4"
            style={{
                background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                color: 'white',
            }}
        >
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between gap-3">
                    <div className="flex-grow-1" style={{ minWidth: '250px', maxWidth: '350px' }}>
                        <h2 className="fw-bold" style={{ fontSize: '1.8rem', lineHeight: 1.2 }}>
                            Хотите бесплатную <br /> консультацию? <br /> Оставляйте заявку
                        </h2>
                        <p className="mt-3">
                            Оставляйте заявку и наши менеджеры свяжутся с Вами <br /> в ближайшее время
                        </p>
                    </div>

                    <form
                        className="d-flex flex-wrap gap-3 flex-grow-1 justify-content-center"
                        style={{ minWidth: '350px', maxWidth: '600px' }}
                    >
                        <input
                            type="text"
                            placeholder="Ваше имя"
                            className="form-control rounded-pill py-2 px-4"
                            style={{ minWidth: '150px', flex: '1 1 150px' }}
                            required
                        />
                        <input
                            type="tel"
                            placeholder="Ваш телефон"
                            className="form-control rounded-pill py-2 px-4"
                            style={{ minWidth: '150px', flex: '1 1 150px' }}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Ваш e-mail"
                            className="form-control rounded-pill py-2 px-4"
                            style={{ minWidth: '150px', flex: '1 1 150px' }}
                            required
                        />
                        <button
                            type="submit"
                            className="btn btn-dark rounded-pill px-4 py-2"
                            style={{ minWidth: '120px' }}
                        >
                            Отправить
                        </button>
                    </form>

                    <small
                        className="text-white-50 flex-grow-1"
                        style={{ minWidth: '200px', maxWidth: '250px', fontSize: '0.7rem' }}
                    >
                        Нажимая кнопку вы даете согласие на обработку персональных данных в соответствии с политикой конфиденциальности.
                    </small>
                </div>
            </div>
        </section>
    )
}
