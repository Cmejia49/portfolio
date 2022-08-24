import React from 'react'

const ToolCard = ({text}) => {
  return (
    <div className='p-1 underline font-sans m-1 text-xs bg-[#613DF2] rounded-md uppercase text-white md:p-1 md:px-2 md:text-xs'>
        <p>{text}</p>
    </div>
  )
}

export default ToolCard