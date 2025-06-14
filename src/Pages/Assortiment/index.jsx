import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import KnowledgeBase from '../HomePage/KnowledgeBase'
import SidebarLayout from '../../components/Sidebar/SidebarLayout'
import ArticleSection from './ArticleSection'
import FreeMonthCard from '../../components/FreeMonthCard/FreeMonthCard'

export default function Assortiment() {
    return (
        <div style={{ background: '#f7f9f8' }}>
            <PageHeader breadcrumb="Главная - Ассортимент продуктового ассортимента" title="Ассортимент продуктового ассортимента" />
            <div className="container">
                <div className="py-3 row align-items-stretch">
                    <div className='col-md-3 col-12'>
                        <SidebarLayout />
                        <div className='mt-3'>
                            <FreeMonthCard />
                        </div>
                    </div>
                    <div className='col-md-9 col-12'>
                        <ArticleSection />
                    </div>
                </div>
            </div>
            <KnowledgeBase />
        </div>
    )
}
