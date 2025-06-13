import React from 'react'
import img1 from '../../assets/imgs/sullivan-university 1.png'
import img2 from '../../assets/imgs/redbullenergydrink 1.png'
import img3 from '../../assets/imgs/dollar-1 1.png'
import img4 from '../../assets/imgs/makita-logo 1.png'
import img5 from '../../assets/imgs/pioneer 1.png'
import img6 from '../../assets/imgs/discord-logo-2 1.png'

const companies = [
    { id: 1, name: 'Sullivan University', img: img1, alt: 'Sullivan University' },
    { id: 2, name: 'Red Bull', img: img2, alt: 'Red Bull' },
    { id: 3, name: 'Dollar', img: img3, alt: 'Dollar' },
    { id: 4, name: 'Makita', img: img4, alt: 'Makita' },
    { id: 5, name: 'Pioneer', img: img5, alt: 'Pioneer' },
    { id: 6, name: 'Discord', img: img6, alt: 'Discord' },
]

export default function CompaniesSection() {
    return (
        <section className="py-5">
            <div className='container'>
                <h4 className="mb-5 fw-bold">Компании которые выбирают 1С-Товары</h4>
                <div className="d-flex flex-wrap justify-content-between align-items-center gap-4 py-3">
                    {companies.map((company) => (
                        <div key={company.id} className="flex-shrink-0" style={{ maxWidth: '120px', flexBasis: '120px' }}>
                            <img
                                src={company.img}
                                alt={company.alt}
                                className="img-fluid"
                                style={{ filter: 'grayscale(80%)', opacity: 0.6, maxHeight: '50px', objectFit: 'contain' }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
