import React from 'react'
import Hero from './Layout/Hero'
import Products from './Components/Products'
import { useState, useEffect } from 'react';





const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products/4');
        const data = await res.json();
        setProducts(data.products); // Ensure you set the correct structure
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);


  return (
    <>
        <Hero />
        <div className='pt-[50px] md:pt-[72px]'>
          <h1 className='text-center text-[32px] font-black font-primary md:text-[48px] pb-[32px] md:pb-[52px]'>NEW ARRIVALS</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-6">
          {products.map((product) => (
            <Products 
              key={product.id} 
              image={product.thumbnail} 
              title={product.title} 
              price={product.price} 
            />
          ))}
        </div>
        </div>
    </>
  )
}

export default Homepage