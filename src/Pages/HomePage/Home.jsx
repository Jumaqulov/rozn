import React from 'react'
import '../../assets/css/Home.css'
import IntroSection from './IntroSection'
import IntroCards from './IntroCards'
import AdvantagesSection from './Advantage'
import ProductsCarousel from './ProductCaorusel'
import SupportSection from './SupportSection'
import ProductsInfoSection from './ProductInfo'
import ConsultationSection from './ConsultationSection'

export default function Home() {
    return (
        <div>
            <IntroSection />
            <IntroCards />
            <AdvantagesSection />
            <ProductsCarousel />
            <SupportSection />
            <ProductsInfoSection />
            <ConsultationSection />
        </div>
    )
}
