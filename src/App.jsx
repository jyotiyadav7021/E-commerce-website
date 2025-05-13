

import React, { use, useEffect, useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProducts } from './redux/Products.Slice'
import SingleProductPage from './pages/SingleProductPage'
import Loader from './components/Loader'
function IndexPage() {

  const dispatch = useDispatch()
  
  

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path="/product/:id" element={<SingleProductPage/>}/>
        <Route path='*' component={<ErrorPage/>}></Route>
      </Routes>
      
      
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default IndexPage
