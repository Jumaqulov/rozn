import React from 'react'
import { FiPower } from 'react-icons/fi'

export default function GettingStarted() {
    return (
        <div className="p-4 rounded-3 shadow-sm w-100" style={{ height: '100%' }}>
            <div className="d-flex align-items-center mb-3 gap-3">
                <div
                    className="d-flex justify-content-center align-items-center rounded"
                    style={{ backgroundColor: '#ffeaea', width: '36px', height: '36px' }}
                >
                    <FiPower size={20} color="#e83e3e" />
                </div>
                <h5 className="mb-0">С чего начать</h5>
            </div>

            <p>
                <a href="#" className="text-success fw-semibold text-decoration-none">
                    Подключение 1С-Ритейл Чекер* и 1С-Товары
                </a>
            </p>
            <p className="text-muted">
                Подключение 1С-Ритейл Чекер* (старые конфигурации)
            </p>
            <p className="text-muted">
                Фреш. Подключение 1С-Ритейл Чекер* и 1С-Товары
            </p>
        </div>
    )
}
