import React from 'react'
import { leftItems, rightItems } from '../../Data/HomeData'

export default function AdvantagesSection() {
    return (
        <section className="pt-2 pb-5" style={{ background: '#f7f9f8' }}>
            <div className='container'>
                <h4 className="mb-4">С нами удобнее</h4>
                <div className="row g-4">
                    <div className="col-12 col-md-6">
                        <div className="p-4 bg-white shadow-sm h-100 advantage_card">
                            <h5 className="fw-semibold mb-3 text-center">Без 1С-Товары</h5>
                            <ul className="list-unstyled">
                                {leftItems.map((item, idx) => (
                                    <li key={idx} className="d-flex align-items-start mb-2 gap-2">
                                        <span className="text-danger fs-5 fw-bold">×</span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="col-12 col-md-6">
                        <div className="p-4 shadow-sm h-100 advantage_card advantage_card_2">
                            <h5 className="fw-semibold mb-3 text-center">Вместе с 1С-Товары</h5>
                            <ul className="list-unstyled">
                                {rightItems.map((item, idx) => (
                                    <li key={idx} className="d-flex align-items-start mb-2 gap-2">
                                        <span className="text-success fs-5 fw-bold">✓</span>
                                        <span
                                            className={idx === 1 ? 'fw-bold' : ''}
                                            dangerouslySetInnerHTML={{ __html: item.replace(/(ассортиментная матрица, поддерживающая актуальный ассортимент)/g, '<strong>$1</strong>') }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
