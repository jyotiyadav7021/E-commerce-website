

import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router'
import HomePage from './pages/HomePage'

function IndexPage() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default IndexPage
