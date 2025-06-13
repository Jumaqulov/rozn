import React from 'react';
import { Accordion, Button } from 'react-bootstrap';
import { faqItems } from '../../Data/HomeData';

export default function FAQSection() {
    return (
        <section className="py-5" style={{ background: '#f7f9f8' }}>
            <div className='container'>
                <h4 className="mb-4">Ответы на вопросы</h4>

                <Accordion>
                    {faqItems.map((question, idx) => (
                        <Accordion.Item
                            eventKey={String(idx)}
                            key={idx}
                            className="mb-3 py-2"
                            style={{ borderRadius: '40px', overflow: 'hidden', background: 'white' }}
                        >
                            <Accordion.Header style={{ borderRadius: '40px', marginBottom: 0 }}>
                                {question}
                            </Accordion.Header>
                            <Accordion.Body
                                style={{
                                    borderRadius: '0 0 40px 40px',
                                    marginTop: '-1px',
                                    padding: '1rem 1.5rem',
                                }}
                            >
                                Здесь будет ответ на вопрос: <strong>{question}</strong>
                            </Accordion.Body>
                        </Accordion.Item>
                    ))}
                </Accordion>

                <div
                    className="d-flex justify-content-between align-items-center mt-4 p-3"
                    style={{
                        color: 'white', background: 'linear-gradient(90deg, #22c55e 0%, #16a34a 100%)', borderRadius: '40px'
                    }}>
                    <div>
                        Переходи в раздел “Как это работает”, что бы получить больше полезной информации
                    </div>
                    <Button variant="light" className="rounded-pill px-4 py-2">
                        Как это работает
                    </Button>
                </div>
            </div>
        </section>
    )
}
