import React from 'react'

const Hero = () => {
  return (
    <>
        <div className='bg-[#f2f0f1] md:bg-[url(/assets/hero-bg.svg)] w-full h-[853px] md:h-[500px] xl:h-[663px] bg-contain bg-center
        bg-no-repeat md:flex items-start'>
            <div className='px-[16px] md:w-1/2 xl:pl-[100px] pt-[40px] md:pt-[70px] xl:pt-[101px]'>
                <h1 className='text-[36px] font-black font-primary leading-[35px]
                xl:text-[64px] xl:leading-[70px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                <p className='font-secondary pt-[16px] w-[356px] text-[14px] text-[gray] pb-[14px]
                xl:w-[545px] xl:text-[16px] xl:pt-[32px] xl:pb-[32px]'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                <button className='w-full bg-black h-[62px] rounded-full text-white text-[16px] font-medium font-primary hover:text-[#F0F0F0] hover:bg-[red] cursor-pointer
                lg:w-[210px]'>Shop Now</button>
                <div className='pt-[20px] px-[56px] flex justify-between pb-[30px] flex-wrap items-center
                lg:pt-[48px] lg:px-[0px] lg:w-[596px]'>
                    <div className=''>
                        <p className='text-[24px] font-bold font-primary lg:text-[40px]'>200+</p>
                        <p className='text-[10px] font-primary text-[gray] lg:text-[16px]'>International Brands</p>
                    </div>
                    <span className="border-[0.5px] border-[#dad9d8] border-solid h-[60px] lg:h-[76px]"></span>
                    <div className=''>
                        <p className='text-[24px] font-bold font-primary lg:text-[40px]'>2,000+</p>
                        <p className='text-[10px] font-primary text-[gray] lg:text-[16px]'>High-Quality Products</p>
                    </div>
                    <span className="border-[0.5px] border-[#dad9d8] border-solid h-[60px] lg:h-[76px] hidden lg:block"></span>
                    <div className='mx-auto pt-[12px] lg:mx-0 lg:pt-0'>
                        <p className='text-[24px] font-bold font-primary lg:text-[40px]'>30,000+</p>
                        <p className='text-[10px] font-primary text-[gray] lg:text-[16px]'>Happy Customers</p>
                    </div>
                </div>
            </div>
            <div className='relative '>
                <img src="/assets/small-twink.svg" alt="" className='absolute top-[130px] left-[20px] w-[44px] h-[44px]'/>
                <img src="/assets/big-twink.svg" alt="" className='absolute left-[300px] top-[40px] w-[76px] h-[76px]'/>
                <img src="/assets/small.svg" alt="" className='w-full h-[448px] md:hidden'/>
            </div>
        </div>
        <div className='bg-black  w-full h-[110px] mt-16 flex flex-wrap items-center justify-around px-5 md:mt-0'>
            <img src="/assets/versace.svg" alt="" className='w-[116px] xl:w-[166.48px]'/>
            <img src="/assets/zara.svg" alt="" className='w-[63.81px] xl:w-[91px]'/>
            <img src="/assets/gucci.svg" alt="" className='w-[109.39px] xl:w-[156px]'/>
            <img src="/assets/prada.svg" alt="" className='w-[127px] xl:w-[194px]'/>
            <img src="/assets/ck.svg" alt="" className='w-[134.84px] xl:w-[206.79px]'/>
        </div>
    </>
  )
}

export default Hero