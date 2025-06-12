import React from 'react'
import { retailBlocks, wholesaleBlocks } from '../../Data/HomeData'
import img1 from '../../assets/imgs/Grocery shopping-amico 1.png'
import img2 from '../../assets/imgs/Coffee shop-amico 1.png'
import img3 from '../../assets/imgs/Logistics-amico 1.png'

export default function ProductsInfoSection() {
    return (
        <section className="py-5" style={{ background: '#f7f9f8' }}>
            <div className='container'>
                <h3 className='mb-4 text-center'>Для розничных магазинов и ресторанов</h3>
                <div className="row mb-5 align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
                        <img src={img1} alt="Retail 1" className="img-fluid rounded" style={{ maxHeight: '500px' }} />
                    </div>
                    <div className="col-lg-6">
                        {retailBlocks.slice(0, 2).map((block, i) => (
                            <div key={i} className="bg-white p-4 shadow-sm mb-4" style={{ borderRadius: '40px' }}>
                                <h6 className="fw-semibold">{block.title}</h6>
                                <p className="text-muted">{block.text}</p>
                                <a href={block.linkHref} className="product_info_link">
                                    {block.linkText} &rarr;
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row mb-5 align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
                        <img src={img2} alt="Retail 2" className="img-fluid rounded" style={{ maxHeight: '500px' }} />
                    </div>
                    <div className="col-lg-6">
                        {retailBlocks.slice(2, 4).map((block, i) => (
                            <div key={i} className="bg-white p-4 shadow-sm mb-4" style={{ borderRadius: '40px' }}>
                                <h6 className="fw-semibold">{block.title}</h6>
                                <p className="text-muted">{block.text}</p>
                                <a href={block.linkHref} className="product_info_link">
                                    {block.linkText} &rarr;
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                <h3 className='my-4 text-center'>Для оптовых поставщиков</h3>

                <div className="row align-items-center">
                    <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
                        <img src={img3} alt="Wholesale" className="img-fluid rounded" style={{ maxHeight: '500px' }} />
                    </div>
                    <div className="col-lg-6">
                        {wholesaleBlocks.map((block, i) => (
                            <div key={i} className="bg-white p-4 shadow-sm mb-4" style={{ borderRadius: '40px' }}>
                                <h6 className="fw-semibold">{block.title}</h6>
                                <p className="text-muted">{block.text}</p>
                                <a href={block.linkHref} className="product_info_link">
                                    {block.linkText} &rarr;
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
