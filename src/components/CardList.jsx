import React from 'react'
import Card from './Card'
import {Data} from '../Data'


const CardList = ({num}) => {
    const data = Data.slice(0,`${num}`)
  return (
    <ul className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center px-10'>
        <Card data={data}/>
    </ul>
  )
}

export default CardList