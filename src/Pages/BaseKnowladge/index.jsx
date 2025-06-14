import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import SidebarLayout from '../../components/Sidebar/SidebarLayout'
import ArticlesList from './Knowladge'
import FAQSection from '../HomePage/FAQSection'
import ConsultationSection from '../HomePage/ConsultationSection'

export default function BaseKnowladge() {
    return (
        <div style={{ background: '#f7f9f8' }}>
            <PageHeader breadcrumb="Главная - База знаний " title="База знаний " />
            <div className="container">
                <div className="py-3 row align-items-stretch">
                    <div className='col-md-3 col-12'>
                        <SidebarLayout />
                    </div>
                    <div className='col-md-9 col-12'>
                        <ArticlesList />
                    </div>
                </div>
            </div>
            <FAQSection />
            <ConsultationSection />
        </div>
    )
}