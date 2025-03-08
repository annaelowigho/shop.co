import React from 'react'
import Hero from './Layout/Hero'
import Products from './Components/Products'

const Homepage = () => {
  return (
    <>
        <Hero />
        <div className='pt-[50px] md:pt-[72px]'>
          <h1 className='text-center text-[32px] font-black font-primary md:text-[48px] pb-[32px] md:pb-[52px]'>NEW ARRIVALS</h1>
          <Products />
        </div>
    </>
  )
}

export default Homepage