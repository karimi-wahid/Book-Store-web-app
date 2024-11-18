import React from 'react'
import { authorFirstBook } from '../constants'

const FirstBook = () => {
  return (
    <div className='grid place-items-center border-t border-neutral-300 mt-20 py-10'>
        <ul className='w-full md:w-[70%] lg:w-[45%]'>
            {authorFirstBook.map((item, i) => (
            <li className='space-y-2 mb-5' key={i}>
                <p className='text-primary text-[14px] font-bold'>{item.date}</p>
                <h1 className='text-xl font-[600]'>{item.title}</h1>
                <p className='text-grayLight'>{item.text}</p>
            </li>
            ))}
        </ul>
    </div>
  )
}

export default FirstBook