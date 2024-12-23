import React from 'react'
import { FaMailBulk } from 'react-icons/fa'
import {footerSocial} from '../constants/footer'
const ContactForm = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-4 my-10 px-10 gap-10'>
        <div className='order-2 lg:order-1'>
            <div className='flex gap-4'>
                <FaMailBulk size={25} className='text-primary'/>
                <p className='text-grayLight grid'>
                    <span className='font-semibold text-black'>Mail Me</span>
                    <span>mail@example.com</span>
                    <span>info@example.com</span>
                </p>
            </div>
        </div>
        <form className='col-span-2 order-1 lg:order-2'>
            <h1 className='text-4xl font-semibold mb-3'>Send a Message</h1>
            <p className='text-grayLight mb-14'>Ultrices dui maecenas quisque cras dui sed porttitor aliquam morbi libero egestas lacus sed.</p>

            <div className='space-y-5'>
                <input type="text" required placeholder='Full name'
                className='w-full p-4 outline-none border border-neutral-300' />
                <input type="text" required placeholder='Your email'
                className='w-full p-4 outline-none border border-neutral-300' />
                <input type="text" required placeholder='Subject'
                className='w-full p-4 outline-none border border-neutral-300' />
                <textarea rows={5} required placeholder='Your message' className='w-full p-4 outline-none border border-neutral-300'></textarea>
                <button type='submit' className='p-3 border border-primary hover:bg-primary hover:text-white duration-1000'>Send Message</button>
            </div>
        </form>
        <div className='flex gap-5 text-secondary order-3'>
            {footerSocial.map((icon ,i) => (
            <div className='hover:text-black cursor-pointer hover:scale-125 duration-1000' key={i}>{icon.icon}</div>
        ))}
        </div>
    </div>
  )
}

export default ContactForm