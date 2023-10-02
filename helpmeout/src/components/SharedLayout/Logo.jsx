import React from 'react'
import Brand from '../../assets/images/Logo.jpg'

const Logo = () => {
  return (
    <>
     <div className="flex flex-row space-x-2 items-center">
        <img src={Brand} alt="" className='w-10 h-10'/>
        <p className="text-md text-primary font-semibold font-inter">HelpMeOut</p>
     </div>
    </>
  )
}

export default Logo