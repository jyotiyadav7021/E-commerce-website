import React from 'react'
import { Link } from 'react-router'
import Logo from './logo';
import { IoMdLogIn } from "react-icons/io";

const Navbar = () => {
  return (
    <>
          <header className="text-gray-600 body-font">
              <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                  <Logo></Logo>
                  <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                      <Link to={'/'} className="mr-5 hover:text-gray-900">Home</Link>
                      <Link to={'/'} className="mr-5 hover:text-gray-900">Cart</Link>
                      <Link to={'/'} className="mr-5 hover:text-gray-900">Third Link</Link>
                      <Link to={'/'} className="mr-5 hover:text-gray-900">Fourth Link</Link>
                  </nav>
                  <button className="inline-flex items-center bg-indigo-600 border-0 py-1 px-3 
                  focus:outline-none hover:bg-indigo-600 text-white rounded text-base mt-4 md:mt-0 gap-x-2">
                    <span>Login</span>
                    <IoMdLogIn />
                      
                  </button>
              </div>
          </header>

    </>
  )
}

export default Navbar
