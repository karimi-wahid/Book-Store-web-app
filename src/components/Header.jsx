import React from 'react'

const Header = ({imgUrl, title}) => {
  return (
    <div className='h-[60vh] flex items-center justify-center flex-col space-y-5' style={{backgroundImage: `url(${imgUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>

        <h1 className='text-6xl font-[600]'>{title}</h1>
        <p className='text-grayLight text-center lg:w-[60%]'>Porttitor in nibh id aliquet quam aliquam aliquet pulvinar integer dolor quis elementum, dui cursus nisi, nunc viverra nulla fringilla.</p>

    </div>
  )
}

export default Header