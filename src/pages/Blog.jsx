import React from 'react'
import Blogs from '../components/Blogs'
import BeTheFirst from '../components/BeTheFirst'

const Blog = () => {
  return (
    <div className='flex items-center justify-center flex-col'>
        <Blogs />
        <BeTheFirst bool={true}/>
    </div>
  )
}

export default Blog