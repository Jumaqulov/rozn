import React from 'react'

export default function NotFound() {
    return (
        <section
            className="d-flex flex-column justify-content-center align-items-center vh-75 text-center px-3 py-5"
            style={{ backgroundColor: '#f6f7f6' }}
        >
            <h1
                style={{
                    fontSize: '8rem',
                    fontWeight: '900',
                    marginBottom: '0.3rem',
                    background: 'linear-gradient(100.98deg, #43A548 -4.14%, #52E259 108.69%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    MozBackgroundClip: 'text',
                    MozTextFillColor: 'transparent',
                }}
            >
                404
            </h1>
            <h2 style={{ fontWeight: '700', color: '#43A548', marginBottom: '1rem' }}>
                Страница не найдена
            </h2>
            <p
                style={{
                    maxWidth: '420px',
                    color: '#5f6a5f',
                    fontSize: '1rem',
                    marginBottom: '1.5rem',
                    lineHeight: '1.5',
                }}
            >
                Страница, на которую вы пытаетесь попасть, не существует или была удалена. Перейдите на главную страницу.
            </p>
            <a
                href="/"
                className="btn rounded-pill px-4 py-2"
                style={{ backgroundColor: '#43A548', color: 'white', fontWeight: '600' }}
            >
                Вернуться на главную
            </a>
        </section>
    )
}
