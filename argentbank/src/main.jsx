import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
//import './base/_reset.scss'
import Header from './layout/header/Header'
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import User from './pages/user/User'
import ErrorPage from './pages/errorPage/ErrorPage'
import Footer from './layout/footer/Footer'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>,
)
