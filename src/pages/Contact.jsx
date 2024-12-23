import React from 'react'
import Header from '../components/Header'
import ContactForm from './ContactForm'
import SpeakingEvent from '../components/SpeakingEvent'
import BeTheFirst from '../components/BeTheFirst'

const Contact = () => {
  return (
    <div className='w-full mb-10'>
        <Header title={'Contact'}/>
        <ContactForm />
        <SpeakingEvent />
        <BeTheFirst />
    </div>
  )
}

export default Contact