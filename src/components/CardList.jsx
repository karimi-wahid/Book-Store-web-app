import React from 'react'
import Card from './Card'
import {Data} from '../Data'


const CardList = ({num}) => {
    const data = Data.slice(0,`${num}`)
  return (
    <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 place-items-center'>
        <Card data={data}/>
    </ul>
  )
}

export default CardList