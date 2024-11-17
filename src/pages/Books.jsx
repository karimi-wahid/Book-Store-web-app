import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import MoreBooks from '../components/MoreBooks'

const Books = () => {
  return (
    <div>
        <Header imgUrl={'https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/book-store-hero-bg-img.svg'} title={'Books'}/>
        <Hero fontSize={'4xl'} secondBtn={false}/>
        <MoreBooks />
    </div>
  )
}

export default Books