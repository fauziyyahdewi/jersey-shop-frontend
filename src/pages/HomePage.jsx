import React from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import LandingPage from './LandingPage'
import LoginPage from './LoginPage'
import RegisterPage from './RegisterPage'
import CartPage from './CartPage'
import ProductPage from './ProductPage'

import { Routes, Route } from "react-router-dom"

function HomePage() {
    return (
        <div>
            <Header />
\               
            <Footer />
        </div>
    )
}

export default HomePage