import React, { Fragment } from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import SidebarLayout from '../../components/Sidebar/SidebarLayout'
import GettingStarted from './GettingStarted'
import AdvantagesSection from '../HomePage/Advantage'
import KnowledgeBase from '../HomePage/KnowledgeBase'
import ConsultationSection from '../HomePage/ConsultationSection'

export default function HowWorks() {
    return (
        <div style={{ background: '#f7f9f8' }}>
            <PageHeader breadcrumb="Главная - Как это работает" title="Как это работает" />
            <div className="container">
                <div className="py-3 row align-items-stretch">
                    <div className='col-md-3 col-12'>
                        <SidebarLayout />
                    </div>
                    <div className='col-md-9 col-12'>
                        <GettingStarted />
                    </div>
                </div>
            </div>
            <AdvantagesSection />
            <KnowledgeBase />
            <ConsultationSection />
        </div>
    )
}
