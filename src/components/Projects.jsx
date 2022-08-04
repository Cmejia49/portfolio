import {data} from '../constant/projectData'
import React, { useState } from 'react'
import Button from './Button'
import Card from './Card'
import Fade from 'react-reveal/Fade';
import ToolCard from './ToolCard';
const Projects = () => {
  const [limit,setLimit] = useState(3);
  const handleSeeMore = () =>{
    if(limit < data.length){
    setLimit(limit + limit);
    }
  }
  return (
    <div className='w-full py-[5rem]  px-4  bg-white'>
        <h1 className='font-bold text-center text-5xl scale-100 '>TOP PROJECTS</h1>
        <div className=' mx-10'>
          {data.slice(0,limit).map((i,index)=>
          <div key={index}>
          {index % 2 === 0 ? (
              <Fade left >
                <Card className={"md:flex"}>
                  <div className=" md:w-1/2">
                    <img className="h-96 w-full object-cover md:h-96 md:w-full" src="https://singlecart.io/wp-content/uploads/2021/10/SC_FEATUREIMAGE_02-700x700.jpg" alt="Man looking at item at a store"/>
                  </div>
                  <div className="px-[5rem] flex justify-center flex-col p-8 md:w-1/2">
                    <h3 className='font-bold text-size justify-center text-3xl'>{i.Title}</h3>
                    <p className="mt-2 text-slate-500">{i.Description}</p>
                    <div className='flex mt-2 border-b p-3 md:flex flex-row'>
                      {i.Tools.map((t,ind)=>
                        <ToolCard text={t}/>
                      )}
                    </div>
                    <div className='flex justify-between p-5'>
                      <Button>Visit</Button>
                      <Button>CODE</Button>
                    </div>
                  </div>
                </Card>
              </Fade>

          ):(
              <Fade right >
                <Card className={"flex flex-col-reverse md:flex md:flex-row"}>
                  <div className="px-[5rem] flex justify-center flex-col p-8 md:w-1/2">
                    <h3 className='font-bold text-size justify-center text-3xl'>Finding customers for your new business</h3>
                    <p className="mt-2 text-slate-500">{i.Description}</p>
                    <div className='flex mt-2 border-b p-3 md:flex flex-row'>
                      {i.Tools.map((t,ind)=>
                        <ToolCard text={t}/>
                      )}
                    </div>
                    <div className='flex justify-between'>
                      <Button>Visit</Button>
                      <Button>CODE</Button>
                    </div>
                  </div>
                  <div className=" md:w-1/2">
                    <img className="h-96 w-full object-cover md:h-96 md:w-full" src="https://singlecart.io/wp-content/uploads/2021/10/SC_FEATUREIMAGE_02-700x700.jpg" alt="Man looking at item at a store"/>
                  </div>
                </Card>
              </Fade>
          )}
          </div>
          )}
        
        </div>
        {limit < data.length ? (
        <div className='flex justify-center scale-100'>
          <Button onClick={()=>{handleSeeMore()}}>SEE MORE</Button>
        </div>
        ):(<></>)}
        
    </div>
  ) 
}

export default Projects