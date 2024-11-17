import React from 'react'
import CardList from './CardList'
import BeTheFirst from './BeTheFirst'

const MoreBooks = () => {
  return (
    <div className='my-20 px-5'>
        <h1 className='text-4xl my-10'>More Books</h1>
        <CardList num={9}/>
        <BeTheFirst />
    </div>
  )
}

export default MoreBooks