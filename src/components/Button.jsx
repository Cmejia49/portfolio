import React from 'react'

const Button = ({children, ...state}) => {
  return (
    <button {...state}  className='mx-3 bg-[#613DF2] w-[200px] text-white rounded-md uppercase font-medium my-6  py-3 md:px-6 md:mx-3 '>{children}</button>
  )
}

export default Button