import React from 'react'
import HeroSection from '../components/Home/HeroSection'
import ProductCard from '../components/Home/ProductCard'

const HomePage = () => {
  return (
    <div className=''>
        <HeroSection></HeroSection>
          <section className="text-gray-600 body-font">
              <div className="container px-5 py-10 mx-auto">
                  <div className="flex flex-col text-center w-full mb-20">
                      <h1 className="text-3xl font-medium title-font mb-4 text-gray-900">Product</h1>
                      
                  </div>
                  <div className="flex flex-wrap -m-4">
                      {
                        Array(5).fill(0).map((cur,i)=>{
                            return <ProductCard key={i}></ProductCard>
                        })
                      }
                      
                  </div>
              </div>
          </section>

    </div>
  )
}

export default HomePage
