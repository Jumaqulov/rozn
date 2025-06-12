import React from 'react'

export default function SupportSection() {
    return (
        <section className="py-5" style={{ background: '#f7f9f8' }}>
            <div className='container py-5'>
                <div className="support_card p-4 shadow-sm d-flex flex-column flex-md-row gap-4 align-items-center">
                    <div className="flex-grow-1">
                        <h3 className="mb-5">Предоставляем техподдержку для наших клиентов</h3>
                        <p className="text-muted">
                            Если у вас возникнут сложности с использованием 1С-Товары, обращайтесь в нашу техподдержку. Техподдержка работает круглосуточно. Вы можете связаться с нами любыми удобными для Вас способами. При использовании техпомощи просим соблюдать{' '}
                            <a href="#" className="text-success text-decoration-underline">правила обращения</a>.
                        </p>
                    </div>

                    <div
                        className="flex-shrink-0 bg-opacity-10 p-5"
                        style={{ minWidth: '280px', background: '#ebf7ed', borderRadius: '40px', maxWidth: '100%' }}>
                        <p className="mb-2">
                            Вы можете связаться с нами через{' '}
                            <a href="#" className="text-success text-decoration-none fw-semibold">1С-Коннект</a> и{' '}
                            <a href="#" className="text-success text-decoration-none fw-semibold">1С-Товары Поддержка пользователей</a>.
                        </p>
                        <div className="d-flex justify-content-between mt-4">
                            <div>
                                <div className="text-muted small">Телефон техподдержки</div>
                                <a href="tel:+998946171012" className="text-success fw-semibold text-decoration-none">
                                    +998-94-617-10-12
                                </a>
                            </div>
                            <div>
                                <div className="text-muted small">E-mail техподдержки</div>
                                <a href="mailto:avazjonjumoqulov@gmail.com" className="text-success fw-semibold text-decoration-none email-wrap">
                                    avazjonjumoqulov@gmail.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
