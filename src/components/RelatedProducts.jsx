import React from 'react'
import Card from './Card'
import { Data } from '../Data'

const RelatedProducts = ({bookType}) => {
    const relatedBooks = Data.filter((item) => item.type == bookType);
  return (
    <div>
        <div>
            <h1 className='font-semibold text-2xl mt-10 mb-5'>RELATED BOOKS</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            <Card data={relatedBooks} />
            </div>
        </div>
    </div>
  )
}

export default RelatedProducts