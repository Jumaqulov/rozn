import React, { useState } from 'react'
import { articlesData } from '../../Data/Knowladge'

const PAGE_SIZE = 8

export default function ArticlesList() {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(articlesData.length / PAGE_SIZE)

    const currentArticles = articlesData.slice(
        (currentPage - 1) * PAGE_SIZE,
        currentPage * PAGE_SIZE
    )

    const changePage = (page) => {
        if (page < 1 || page > totalPages) return
        setCurrentPage(page)
    }

    return (
        <section>
            <h4 className="mb-4">База знаний</h4>

            <div className="row g-4">
                {currentArticles.map(({ id, title, description, img }) => (
                    <div key={id} className="col-12 col-lg-6">
                        <div className="card rounded-3 shadow-sm overflow-hidden h-100">
                            <img
                                src={img}
                                alt={title}
                                className="card-img-top"
                                style={{ height: '180px', objectFit: 'cover' }}
                            />
                            <div className="card-body d-flex flex-column">
                                <h6 className="card-title">{title}</h6>
                                <p className="text-muted flex-grow-1">{description}</p>
                                <a href="#" className="text-success text-decoration-none fw-semibold mt-auto">
                                    Читать статью
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <nav aria-label="Page navigation" className="mt-4 d-flex justify-content-center align-items-center gap-2">
                <button
                    className="btn btn-outline-secondary rounded-circle"
                    onClick={() => changePage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    &larr;
                </button>

                {[...Array(totalPages)].map((_, idx) => {
                    const pageNum = idx + 1
                    const isActive = pageNum === currentPage
                    return (
                        <button
                            key={pageNum}
                            className={`btn rounded-circle ${isActive ? 'btn-success' : 'btn-outline-secondary'}`}
                            onClick={() => changePage(pageNum)}
                        >
                            {pageNum}
                        </button>
                    )
                })}

                <button
                    className="btn btn-outline-secondary rounded-circle"
                    onClick={() => changePage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    &rarr;
                </button>
            </nav>
        </section>
    )
}
