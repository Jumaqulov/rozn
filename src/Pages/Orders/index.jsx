import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import SidebarLayout from '../../components/Sidebar/SidebarLayout'
import ReverseOrderSection from './ReverseOrderSection'
import FreeMonthCard from '../../components/FreeMonthCard/FreeMonthCard'
import KnowledgeBase from '../HomePage/KnowledgeBase'
import ConsultationSection from '../HomePage/ConsultationSection'

export default function Orders() {
    return (
        <div style={{ background: '#f7f9f8' }}>
            <PageHeader breadcrumb="Главная - Обратный заказ" title="Обратный заказ" />
            <div className="container">
                <div className="py-3 row align-items-stretch">
                    <div className='col-md-3 col-12'>
                        <SidebarLayout />
                        <div className='mt-3'>
                            <FreeMonthCard />
                        </div>
                    </div>
                    <div className='col-md-9 col-12'>
                        <ReverseOrderSection />
                    </div>
                </div>
            </div>
            <KnowledgeBase />
            <ConsultationSection />
        </div>
    )
}
