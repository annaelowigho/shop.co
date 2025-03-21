import React from 'react'
import Hero from './Layout/Hero'
import Products from './Components/Products'
import { useState, useEffect } from 'react';





const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [viewAll, setViewAll] = useState(false)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=4');
        const data = await res.json();
        setProducts(data.products);

        console.log(data)
        // setProducts([data])
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();

    if (viewAll) {

      fetchProducts(12)
    }
  }, [viewAll]);


  return (
    <>
        <Hero />

        {/* New Arrivals */}
        <div className='pt-[50px] md:pt-[72px] px-4 md:px-6 xl:px-[100px]'>
          <h1 className='text-center text-[32px] font-black font-primary md:text-[48px] pb-[32px] md:pb-[52px]'>NEW ARRIVALS</h1>
          <div className="flex gap-4 overflow-x-auto scrollbar-hide xl:justify-between">
            {products.map((product) => (
              <Products 
                key={product.id} 
                image={product.thumbnail} 
                title={product.title} 
                price={product.price} 
                rating={product.rating}
              />
            ))}
          </div>
          <div className='flex items-center justify-center pt-[36px] pb-[40px] md:pb-[64px]'>
            <button className='border-[1px] border-[#eeefee] p-3 w-full rounded-full md:w-[218px] h-[52px] font-medium 
            hover:bg-red-600 hover:text-white cursor-pointer active:bg-' onClick={() => setViewAll(true)}>View All</button>
          </div>
          <hr className='border-[#eeefee]'/>
        </div>
    </>
  )
}

export default Homepage