import React from 'react'

const AuthorInfo = () => {
  return (
    <div className='flex lg:justify-end items-center my-10 p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[70%] items-center gap-8'>
            <img src="https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/04/author-book-store-author-img.jpg" alt=""
            className='w-[400px] h-[400px] order-2 lg:order-1' />
            <div className='space-y-5 order-1 lg:order-2'>
            <svg className='w-[40px]' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" stroke=""><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M5.29289 1.29291L6.70711 2.70712L3 6.41423V7.00001H7V14H1V5.5858L5.29289 1.29291Z" fill="#4d3dc6"></path> <path d="M15 7.00001H11V6.41423L14.7071 2.70712L13.2929 1.29291L9 5.5858V14H15V7.00001Z" fill="#4d3dc6"></path> </g></svg>
                <p className='text-grayLight w-[90%] text-xl'>
                Elementum neque nulla mauris faucibus lorem nisl, eget quis duis amet lobortis non enim viverra feugiat vitae.</p>
                <p className='font-[600] text-grayLight'>John Roberts</p>
            </div>
        </div>
    </div>
  )
}

export default AuthorInfo