

import React, { use, useEffect } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addProducts } from './redux/Products.Slice'
function IndexPage() {

  const dispatch = useDispatch()

  const fetchProduct = async()=>{
    try {
      const response = await axios.get("https://fakestoreapi.com/products")
      const data = await response.data
      console.log(data)
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
    fetchProduct()
  },[])
  

  return (
    <>
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='*' component={<ErrorPage/>}></Route>
      </Routes>
      
      
      <Footer></Footer>
      </BrowserRouter>
    </>
  )
}

export default IndexPage
