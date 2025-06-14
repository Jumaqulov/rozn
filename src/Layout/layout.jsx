import React, { Fragment } from 'react'
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <Fragment>
            <Navbar />
            <Outlet />
            <Footer />
        </Fragment>
    )
}