import React from 'react'

import "../../assets/admin/css/styles.css"
import "../../assets/admin/js/scripts"

import Navbar from './NavbarAdmin'
import Sidebar from './SidebarAdmin'
import FooterAdmin from './FooterAdmin'
import Dashboard from '../../component/admin/Dashboard'
import Profile from '../../component/admin/Profile'

import { Routes, Route, Outlet } from "react-router-dom"

const MainAdmin = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        <Outlet />
                    </main>
                    <FooterAdmin />
                </div>
            </div>
        </div>
    )
}

export default MainAdmin