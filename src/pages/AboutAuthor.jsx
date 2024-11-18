import React from 'react'
import Header from '../components/Header'
import AuthorInfo from '../components/AuthorInfo'
import AwardWinning from '../components/AwardWinning'
import Awards from '../components/Awards'
import BeTheFirst from '../components/BeTheFirst'
import FirstBook from '../components/FirstBook'
const AboutAuthor = () => {
  return (
    <div>
        <Header imgUrl={''} title={'About Author'}/>
        <AuthorInfo />
        <AwardWinning />
        <Awards />
        <FirstBook />
        <BeTheFirst />
    </div>
  )
}

export default AboutAuthor