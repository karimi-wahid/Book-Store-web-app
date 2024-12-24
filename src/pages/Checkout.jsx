import React from 'react'
import { useSelector } from 'react-redux'

const Checkout = () => {
    const cartItem = useSelector(state => state.cart.cartItems)
    const totalPrice = useSelector(state => state.cart.price)
   
  return (
    <div className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t px-10 mb-10'>
        
      {/* --------------- Left Side -------------- */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <p>Information</p>
        <div className='flex gap-3'>
          <input type="text" placeholder='Enter your name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Enter your last name' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="email" placeholder='Enter your email address' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <input type="text" placeholder='Street' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='State' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='ZipCode' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
          <input type="text" placeholder='Country' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
        </div>
        <input type="number" placeholder='Phone' className='border border-gray-300 rounded py-1.5 px-3.5 w-full' />
      </div>

      <div className='flex flex-col justify-between border border-neutral-300 p-8 w-2/5'>
        

        <div className='space-y-3'>
        <h1 className='mb-7 font-semibold text-gray-700 text-2xl'>Your order</h1>
            <p className='font-semibold text-grayLight flex justify-between items-center'>
                <span>Product</span>
                <span>Subtotal</span>
            </p>
            {cartItem.map((item) => (
            <div className='flex justify-between items-center text-grayLight border-t border-neutral-300 py-2'>
                <p>{item.name}</p>
                <p>${item.price}</p>
            </div>
            ))}
            
        </div>
        <div className='text-center space-y-7'>
        <p className='flex items-center justify-between text-grayLight'>
                <span>Total</span>
                <span>${totalPrice}</span>
        </p>
        <button className='w-[90%] py-3 text-primary border border-secondary hover:bg-secondary duration-200'>Proceed</button>
        </div>
      </div>

        </div>
  )
}

export default Checkout