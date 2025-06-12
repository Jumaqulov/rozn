import React, { useRef, useEffect, useState } from 'react'
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore, MdArrowRightAlt } from "react-icons/md";
import { products } from '../../Data/HomeData'

export default function ProductsCarousel() {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperInstance, setSwiperInstance] = useState(null);

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;
            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <section className="py-5 rounded-3" style={{ background: '#ebf7eb' }}>
            <div className='container'>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h4>Популярные продукты</h4>
                    <button className="btn btn-success rounded-pill px-4">Все продукты</button>
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
                    spaceBetween={24}
                    slidesPerView={1}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onSwiper={setSwiperInstance}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >
                    {products.map((product, idx) => (
                        <SwiperSlide key={idx}>
                            <div className="swiperSlide_card h-100 p-4">
                                <div className="d-flex justify-content-between align-items-center mb-3">
                                    <h5 className="card-title">{product.title}</h5>
                                    <span className="badge border border-success text-success rounded-pill px-3">
                                        {product.price}
                                    </span>
                                </div>
                                <ul className="list-unstyled text-muted small">
                                    {product.features.map((feat, fi) => (
                                        <li key={fi}>• {feat}</li>
                                    ))}
                                </ul>
                                <div className='text-end'>
                                    <a href='#'>
                                        Подробнее <MdArrowRightAlt />
                                    </a>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
}
