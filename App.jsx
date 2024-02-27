import { Routes, Route, Navigate, useNavigate } from "react-router-dom"
import Header from "./src/component/Header"
import Footer from "./src/component/Footer"
import LandingPage from "../ngipop-ecomm/src/pages/LandingPage"
import LoginPage from "./src/pages/LoginPage"
import RegisterPage from "./src/pages/RegisterPage"
import CartPage from "./src/pages/CartPage"
import ProductPage from "./src/pages/ProductPage"
import NotFound from "./src/pages/NotFound"
import AdminPrivateRoute from './src/AdminPrivateRoute'

import React from "react"
import axios from 'axios';
import { useEffect } from "react"

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';
axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config) {
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});

function App() {
  const isAdminPath = window.location.pathname.startsWith('/admin');

  return (
    <div className="App">
      {!isAdminPath ? (
        <>
          <Header />
          <Routes>
            <Route path="/" element={ <LandingPage />} />
            <Route
              path="/login" element={localStorage.getItem('auth_token') ? (<Navigate to="/" />) : (<LoginPage />)}
            />
            <Route
              path='/register' element={localStorage.getItem('auth_token') ? (<Navigate to="/" />) : (<RegisterPage />)}
            />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/product' element={<ProductPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      ) : (
        <Routes>
          <Route path="/admin/*"
            element={
              (<AdminPrivateRoute />)
            }
          />
          <Route path='/admin' element={<Navigate to='/admin/dashboard' />} />
        </Routes>
      )}

    </div>
  )
}

export default App
