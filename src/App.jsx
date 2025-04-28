

import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
function IndexPage() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/' component={<ErrorPage/>}></Route>
      </Routes>
      
      <Navbar></Navbar>
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default IndexPage
