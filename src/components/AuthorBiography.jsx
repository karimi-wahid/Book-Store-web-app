import React from 'react'

const AuthorBiography = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-36 gap-10 w-full  lg:px-5'>
        <div className='lg:w-[600px] lg:h-[600px]'>
            <img src="https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-author-img.jpg" alt="" />
        </div>
        <div className='space-y-10 flex  justify-center flex-col'>
            <p className='text-primary'>BIOGRAPHY</p>
            <h1 className='text-4xl font-[700]'>John Roberts</h1>
            <p className='text-grayLight lg:w-[85%]'>
                <span className='block mb-5'>Tellus tellus mattis pulvinar nulla euismod fermentum rhoncus sed vestibulum neque praesent pharetra ut fames viverra suscipit gravida dictumst volutpat ullamcorper lacus, malesuada enim proin volutpat mattis nunc amet, eget vitae egestas.</span>
                <span>
                Vulputate vulputate eget cursus nam ultricies mauris, malesuada elementum lacus arcu, sit dolor ipsum, ac felis, egestas vel tortor eget aenean nam.
                </span>
            </p>
            <button className='w-2/4 py-3 border-neutral-300 border hover:bg-primary hover:text-white rounded-lg duration-300'>Read More</button>
        </div>
    </div>
  )
}

export default AuthorBiography