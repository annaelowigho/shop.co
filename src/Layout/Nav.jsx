import React from 'react'
import { LiaTimesSolid } from "react-icons/lia";
import { IoMenu } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { VscAccount } from "react-icons/vsc";

const Nav = () => {
  return (
    <>
        <div className='bg-black w-full h-[38px] px-[44.5px] md:px-[100px] xl:px-[545px] flex items-center justify-between'>
            <p className='text-white text-center text-[12px] md:text-[16px]'>Sign up and get 20% off to your first order. <span className='underline cursor-pointer hover:text-[red]'>Sign Up Now</span></p>
            <LiaTimesSolid className='text-white text-end hidden md:block'/>
        </div>
        <div className='px-[16px] py-[20px] flex items-center justify-between xl:justify-around xl:px-[117px] xl-pt-[28px] xl:pb-[20px]'>
            <div className='flex items-center gap-[16px]'>
                <IoMenu className='xl:hidden w-[24px] h-[24px] border-[1px] border-black'/>
                <img src="/assets/SHOP.CO.svg" alt="" className='md:w-[160px] md:h-[22px]'/>
            </div>
            <div className='hidden xl:block'>
                <ul className='flex gap-[24px] text-[16px] items-center'>
                    <li className='hover:text-[red] hover:bg-[#F0F0F0] hover:p-2 hover:rounded-md hover:md:shadow-md cursor-pointer'>
                        <select name="" id="" className='w-[65px] outline-none'>
                            <option value="">Shop</option>
                        </select>
                    </li>
                    <li className='hover:text-[red] hover:bg-[#F0F0F0] hover:p-2 hover:rounded-md hover:md:shadow-md cursor-pointer'>On Sale</li>
                    <li className='hover:text-[red] hover:bg-[#F0F0F0] hover:p-2 hover:rounded-md hover:md:shadow-md cursor-pointer'>New Arrivals</li>
                    <li className='hover:text-[red] hover:bg-[#F0F0F0] hover:p-2 hover:rounded-md hover:md:shadow-md cursor-pointer'>Brands</li>
                </ul>
            </div>
            <div className='hidden xl:flex bg-[#F0F0F0] w-[577px] h-[48px] rounded-[50px] items-center px-[17.86px] gap-[12px] text-[16px]'>
                <FaSearch className='text-[gray]'/>
                <input type="search" placeholder='Search for products...' className='bg-transparent outline-none w-full'/>
            </div>
            <div className='flex items-center gap-[12px] md:gap-[20px]'>
                <FaSearch className='w-[24px] h-[24px] md:hidden'/>
                <FiShoppingCart className='w-[24px] h-[24px]' />
                <VscAccount className='w-[24px] h-[24px]'/>
            </div>
            
        </div>
    </>
  )
}

export default Nav