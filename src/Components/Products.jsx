import React from 'react'
import { FaStar } from "react-icons/fa";
import { FaStarHalf } from "react-icons/fa6";

const Products = () => {
  return (
    <>
        <div className='pl-[16px] font-primary md:px-[50px] xl:px-[100px]'>
            <div className='bg-[#f1eeec] w-[198px] h-[200.01px] p-8 rounded-2xl md:w-[295px] md:h-[298px]'>
                <img src="/assets/shirt-removebg-preview.png" alt="" className=''/>
            </div>
            <p className='font-primary text-[14px] font-bold md:pt-[16px] md:text-[16px]'>T-shirt with Tape Details</p>
            <div className='pt-[4.25px] flex md:pt-[8px]'>
                <div className='flex gap-[4.45px]'>
                    <FaStar className='text-[#FFC633] w-[15.47px] h-[15.47px] md:w-[18.79px] md:h-[18.79px]'/>
                    <FaStar className='text-[#FFC633] w-[15.47px] h-[15.47px] md:w-[18.79px] md:h-[18.79px]'/>
                    <FaStar className='text-[#FFC633] w-[15.47px] h-[15.47px] md:w-[18.79px] md:h-[18.79px]'/>
                    <FaStar className='text-[#FFC633] w-[15.47px] h-[15.47px] md:w-[18.79px] md:h-[18.79px]'/>
                    <FaStar className='text-[#FFC633] w-[15.47px] h-[15.47px] md:w-[18.79px] md:h-[18.79px]'/>
                    <FaStarHalf className='text-[#FFC633] w-[15.47px] h-[15.47px] md:w-[18.79px] md:h-[18.79px]'/>
                </div>
                <span className='text-[12px] md:text-[14px]'>4.5/ <span className='text-[#8d8d8c]'>5</span></span>
            </div>
            <p className='text-[20px] font-bold md:text-[24px]'>$120</p>
        </div>
    </>
  )
}

export default Products