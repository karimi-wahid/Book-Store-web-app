import React from 'react'

const SpeakingEvent = () => {
  return (
    <div className='h-[50vh] w-full' style={{
        backgroundImage: "url('https://websitedemos.net/book-store-02/wp-content/uploads/sites/834/2021/05/speech-event.jpg')",
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    }}>
        <div className='w-full bg-neutral-700 bg-opacity-40 h-full flex items-center justify-evenly  px-10'>
            <div className='flex items-center justify-evenly w-[70%]'>
            <div className='text-white w-[70%]'>
            <h1 className='text-4xl font-semibold mb-3'>Speaking - Event</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            </div>
            <button className='w-[20%] border-white border text-white px-4 py-3 hover:bg-white hover:text-neutral-700 duration-500'>Contact Me</button>
            </div>
        </div>

    </div>
  )
}

export default SpeakingEvent