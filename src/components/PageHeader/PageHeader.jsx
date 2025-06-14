import React from 'react'

export default function PageHeader({ breadcrumb, title }) {
    return (
        <section
            className="py-5 px-4"
            style={{
                background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)',
                color: 'white',
            }}>
            <div className="container">
                <div style={{ fontSize: '0.9rem', opacity: 0.8, marginBottom: '0.3rem' }}>
                    {breadcrumb}
                </div>

                <h1 style={{ fontWeight: '700', fontSize: '2.5rem' }}>
                    {title}
                </h1>
            </div>
        </section>
    )
}
