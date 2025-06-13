import React, { useRef, useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { articles } from '../../Data/HomeData'
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from 'react-icons/md'

export default function KnowledgeBase() {
    const prevRef = useRef(null)
    const nextRef = useRef(null)
    const [swiperInstance, setSwiperInstance] = useState(null)

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.params.navigation.prevEl = prevRef.current
            swiperInstance.params.navigation.nextEl = nextRef.current
            swiperInstance.navigation.destroy()
            swiperInstance.navigation.init()
            swiperInstance.navigation.update()
        }
    }, [swiperInstance])

    return (
        <section className="py-5" style={{ background: "#f7f9f8" }}>
            <div className="container py-5">
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4>База знаний</h4>
                    <a href='#' className="px-4" style={{
                        color: 'white',
                        padding: '10px 15px',
                        background: '#43A548',
                        borderRadius: '40px',
                        border: '1px solid',
                        textDecoration: 'none',
                    }}>Все статьи</a>
                </div>

                <div className="d-flex justify-content-between align-items-center mb-3">
                    <button
                        ref={prevRef}
                        className="btn btn-outline-success rounded-circle"
                        style={{ fontSize: '20px' }}
                    >
                        <MdOutlineNavigateBefore />
                    </button>
                    <button
                        ref={nextRef}
                        className="btn btn-outline-success rounded-circle"
                        style={{ fontSize: '20px' }}
                    >
                        <MdOutlineNavigateNext />
                    </button>
                </div>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={setSwiperInstance}
                    spaceBetween={24}
                    slidesPerView={1}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >
                    {articles.map(({ id, title, img, link }) => (
                        <SwiperSlide key={id}>
                            <div className="swiperSlide_card overflow-hidden shadow" style={{ borderRadius: '20px' }}>
                                <img
                                    src={img}
                                    alt={title}
                                    className="card-img-top"
                                    style={{ height: '180px', objectFit: 'cover' }}
                                />
                                <div className="card-body p-3">
                                    <h6 className="card-title">{title}</h6>
                                    <a href={link} className="text-success text-decoration-none fw-semibold">
                                        Читать статью
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
