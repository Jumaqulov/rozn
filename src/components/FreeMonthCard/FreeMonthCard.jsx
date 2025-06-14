import React from 'react'

export default function FreeMonthCard() {
    return (
        <div
            style={{
                backgroundColor: '#d4f0c0',
                borderRadius: '20px',
                padding: '2.5rem',
                maxWidth: '320px',
                textAlign: 'center',
                color: '#333',
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
                userSelect: 'none',
            }}
        >
            <p style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>
                Хотите попробовать?
            </p>
            <h3 style={{ fontWeight: '500', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
                Полная версия сервиса
            </h3>
            <h2 style={{ fontWeight: '700', fontSize: '2.5rem', marginBottom: '1.5rem' }}>
                1 МЕСЯЦ <br /> БЕСПЛАТНО
            </h2>
            <button
                style={{
                    background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                    color: 'white',
                    padding: '0.75rem 2rem',
                    border: 'none',
                    borderRadius: '50px',
                    fontWeight: '600',
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'background 0.3s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#16a34a')}
                onMouseLeave={(e) =>
                    (e.currentTarget.style.background = 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)')
                }
            >
                Получить
            </button>
        </div>
    )
}
