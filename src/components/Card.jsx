import React from 'react'
/**
 * 
 * @returns <div className="border border-black ">
      <img className="h-96 w-full object-cover md:h-96 md:w-full" src="https://singlecart.io/wp-content/uploads/2021/10/SC_FEATUREIMAGE_02-700x700.jpg" alt="Man looking at item at a store"/>
    </div>
    <div className="border border-black px-[5rem] flex justify-center flex-col p-8">
      <h3 className='font-bold text-size justify-center text-3xl'>Finding customers for your new business</h3>
      <p className="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
 */
const Card = ({children,className}) => {
  return (
    <div className="max-w-md  my-[5rem] mx-auto bg-white rounded-xl shadow-xl scale-100 md:max-w-full">
  <div className={className}>
        {children}
  </div>
</div>
  )
}

export default Card