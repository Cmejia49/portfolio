import React from 'react'

const Button = ({children}) => {
  return (
    <button className='bg-[#613DF2] w-[200px] text-white rounded-md uppercase font-medium my-6 mx-auto px-6 py-3'>{children}</button>
  )
}

export default Button