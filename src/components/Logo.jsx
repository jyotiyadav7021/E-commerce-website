import React from 'react'
import { HiShoppingBag } from "react-icons/hi2";
import {Link} from 'react-router'
const Logo = () => {
  return (
    <>
          <Link to={'/'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
              <HiShoppingBag className='text-4xl text-indigo-600' />
              <span className="ml-3 text-xl">ReCommerce</span>
          </Link >
    </>
  )
}

export default Logo
