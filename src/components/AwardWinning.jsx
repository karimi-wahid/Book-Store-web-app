import React from 'react'
import { award1, award2, award3 } from '../constants'

const AwardWinning = () => {
  return (
    <div className='flex items-center justify-center'>
        <div className='lg:w-[50%] space-y-16'>
            <h1 className='text-4xl font-[600] text-center'>Award Winning Author</h1>
            <div className='space-y-5'>
            <p className='text-grayLight'>{award1.text}</p>
            <p className='text-grayLight'>{award2.text}</p>
            <p className='text-grayLight'>{award3.text}</p>
            </div>
            <div className='flex justify-between items-center flex-wrap text-grayLight my-8'>
              <p className='text-center space-y-2 w-full'>
                <span className='block text-3xl font-[800]'>100K+</span>
                <span>Copies Sold</span>
              </p>
              <p className='text-center space-y-2 w-2/4'>
                <span className='block text-3xl font-[800]'>19</span>
                <span>Books</span>
              </p>
              <p className='text-center space-y-2 w-2/4'>
                <span className='block text-3xl font-[800]'>4</span>
                <span>Awards</span>
              </p>
            </div>
        </div>
    </div>
  )
}

export default AwardWinning