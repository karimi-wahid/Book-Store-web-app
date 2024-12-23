import React from 'react'
import { Link } from 'react-router-dom'

const Hero = ({fontSize, secondBtn}) => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 place-items-center lg:gap-24 gap-10 w-full mt-10 p-10'>
            <div className='space-y-7 lg:order-1 order-2'>
                <p className='text-primary'>New Release</p>

                <h1 className={`text-2xl md:text-4xl lg:text-${fontSize} font-[600] lg:leading-[120%]`}>The Sons of the Empire</h1>

                <p className='w-[95%] lg:w-[65%] text-grayLight'>Justo habitant at augue ac sed proin consectetur ac urna nisl elit nulla facilisis viverra dolor sagittis nisi risus egestas adipiscing nibh euismod.</p>

                <div className='flex gap-5 lg:w-[40%]'>
                  
                <button className='w-2/4 py-3 bg-primary text-white rounded-lg'>
                <Link to='/books' className='w-full'>Buy Now</Link></button>
                
                {secondBtn ? <button className='w-2/4 py-3 border-neutral-300 border hover:bg-primary hover:text-white rounded-lg duration-300'>Read Sample</button> : ''}
                
                </div>
            </div>
            <div className=' lg:h-[100vh] lg:order-2 order-1'>
                <img src="https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-hero-book-cover-img.jpg" alt="" />
            </div>
        </div>
  )
}

export default Hero