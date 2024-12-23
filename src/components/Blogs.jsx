import React from 'react'
import { Link } from 'react-router-dom'
import {blogText} from '../constants/index'

const Blogs = () => {
  return (
    <div className='w-[90%] bg-slate-50 lg:p-10 m-16'>
        {blogText.map((blog, i) => (
        <div className='text-grayLight space-y-5 mb-10 lg:p-10'>
            <img src={blog.imgUrl} alt={blog.title} />
            <h1 className='text-2xl'>{blog.title}</h1>
            <p>{blog.comment}</p>
            <p className='mb-5'>{blog.text}</p>
            
                <button className='hover:text-primary'>
                <Link to='#'>Read More </Link>
                </button>
        </div>
        ))}
    </div>
  )
}

export default Blogs