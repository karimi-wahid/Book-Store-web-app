import React from 'react'

const BookReview = () => {
  return (
    <div>
        <h1 className='text-xl text-grayLight mb-3'>There is no review</h1>
        <div className='border border-neutral-300 p-5 text-grayLight'>
            <p className='text-xl'>Be the first to review "Name of book"</p>
            <p>Your email address will not be published. Required fields are marked *</p>

            <form className='space-y-5 my-5'>
                <div className='grid'>
                    <label htmlFor="review">Your review*</label>
                    <textarea id="review" className='w-[80%] min-h-40 py-2 outline-none px-2 border border-neutral-400 mt-2'></textarea>
                </div>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-x-5'>
                    <div className='grid'>
                    <label htmlFor="name">Name*</label>
                    <input id='name' type="text" className='px-2 py-3 border border-neutral-400 outline-none mt-2'/>
                    </div>
                    <div className='grid'>
                    <label htmlFor="email">Email*</label>
                    <input id='email' type="email" className='px-2 py-3 border border-neutral-400 outline-none mt-2'/>
                    </div>
                </div>
                <div className='flex gap-x-2'>
                <input type="checkbox" />
                <p>Save my name, email, and website in this browser for the next time I comment.</p>
                </div>
                <button className='px-6 py-2 border border-primary rounded-md hover:bg-primary duration-200 hover:text-white'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default BookReview