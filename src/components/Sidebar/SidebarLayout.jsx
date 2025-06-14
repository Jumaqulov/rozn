import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import { FiPower, FiEdit2, FiRepeat, FiClipboard, FiBarChart2, FiPieChart, FiLink } from 'react-icons/fi'
import '../../assets/css/Sidebar.css'

const menuItems = [
    { id: 1, label: 'С чего начать', icon: <FiPower size={20} />, path: '/how-works' },
    { id: 2, label: 'Заявки', icon: <FiEdit2 size={20} />, path: '/applications' },
    { id: 3, label: 'Обратный заказ', icon: <FiRepeat size={20} />, path: '/instruction' },
    { id: 4, label: 'Управление ассортиментом', icon: <FiClipboard size={20} />, path: '/base-knowladge' },
    { id: 5, label: 'Ассортимент', icon: <FiBarChart2 size={20} />, path: '/assortiment-info' },
    { id: 6, label: 'Аналитика магазина', icon: <FiPieChart size={20} />, path: '/analytics' },
    { id: 7, label: 'EDI: обмен документами', icon: <FiLink size={20} />, path: '/edi' },
]

export default function SidebarLayout() {
    const location = useLocation()

    return (
        <nav className="bg-white rounded-3 sidebar_main p-3">
            <ul className="list-unstyled m-0 p-0">
                {menuItems.map(({ id, label, icon, path }) => {
                    const isActive = location.pathname === path
                    return (
                        <li
                            key={id}
                            className={`d-flex align-items-center gap-3 mb-2 px-3 py-2 rounded cursor-pointer ${isActive ? 'sidebar_active_link text-white' : 'text-dark'
                                }`}
                            style={{ cursor: 'pointer' }}
                        >
                            <span>{icon}</span>
                            <Link
                                to={path}
                                className={`flex-grow-1 text-decoration-none ${isActive ? 'fw-semibold text-white' : 'text-dark'
                                    }`}
                            >
                                {label}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}
