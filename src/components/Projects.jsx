import {data} from '../constant/projectData'
import React, { useState } from 'react'
import Button from './Button'
import Card from './Card'
import Fade from 'react-reveal/Fade';
import ToolCard from './ToolCard';
const noImg = "https://lh3.googleusercontent.com/fNSnVEZv1MmblAj1P-foak8meboQyKWVTjs9pEx4KGLXi5pxoj5A96hxjIBosSXuHT8nqwsfkKuyeX0wVrlVg1muaTem24_mzfNsgm6T4AdfODd-QsN5fAvX6XDAZlvDBBzLtd-0CYRkeHwYNRCPEA8bhz3ZhYCtCF4HL5ATRDxen19rRPdCCwMN77tFlFFVjS5DgzK_tWL5L2dbuwV1a38elqOYoR4v4vkhqi_IrTN5Lzfx8gGmqicos22GrsMJrUU2tV0fDfxMWwXUHhsshT-Q73g042Ks0uj7BI6aqrL1D2-JSNriKrmfUIbr9rofA-DGByszKIh5k3ZleAxBtw6cjpSqOBTcN7fIDVD1wA0CHKz-2PmwNho9I_6Hqhgrbm-orO0JFCSRwzsdGeclEe-thgUJfOIqw9T75IyaQOnBWHYIBKfcBxj1_VwHCerjYxVXwqJbFZ60m7eqc79ndNDM_N6CLlvBwqXo91P9U0PYeQMYMqUGZ8-PMtXQgwWpQAAHn_KCoyUCLtyr87dLuqZc_YkfMm1mbs89GqraSqo81tIgvQXjApNWAxr4FyL7lPQTj4LIfcNW8qLJmHENzFIXK5F1tUIyPJ5_Z-ZimIeiFerb-vOAP1pS17aHQDfFtI5TEvnmFh9ggjbDGbrzZv4wv6vO6Sd2IfGsWD3C66mAdcbLVYIsnww6UfPP03ViqqGxNM3BDJQm0v28wap7E6gnV-mgE6vMQXTB2N5oG0_OtdWTumlUVWP7mnLeJN2uTSBOkhelmrRle47eQjlGwr8bwF9N5GGreJAuDAz3YPhVz84HAxnfgVHon8gv6j4KbbA=s124-no?authuser=0";
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
                  <div className="flex justify-center md:w-1/2">
                  <img className="h-96 w-full  md:h-96 md:w-auto" src={i.ImgSrc !== undefined ? i.ImgSrc : noImg} alt={i.Title}/>
                  </div>
                  <div className="px-[5rem] flex justify-center items-center flex-col p-8 md:w-1/2">
                    <h3 className='font-bold text-size justify-center text-3xl'>{i.Title}</h3>
                    <p className="mt-2 text-slate-500">{i.Description}</p>
                    <div className=' flex flex-row flex-wrap mt-2 border-b p-3 md:flex md:flex-row'>
                      {i.Tools.map((t,ind)=>
                        <ToolCard text={t}/>
                      )}
                    </div>
                    <div className='flex justify-between p-1 md:p-5'>
                      <a className={i.DemoLink === undefined ? "hidden":"visible"} href={i.DemoLink}><Button>Demo</Button></a>
                       <a className={i.CodeLink === undefined ? "hidden":"visible"}  href={i.CodeLink}><Button>CODE</Button></a>
                    </div>
                  </div>
                </Card>
              </Fade>

          ):(
              <Fade right >
                <Card className={"flex flex-col-reverse md:flex md:flex-row"}>
                  <div className="px-[5rem] flex justify-center items-center flex-col p-8 md:w-1/2">
                    <h3 className='font-bold text-size justify-center text-3xl'>{i.Title}</h3>
                    <p className="mt-2 text-slate-500">{i.Description}</p>
                    <div className='flex flex-row flex-wrap mt-2 border-b p-3 md:flex md:flex-row'>
                      {i.Tools.map((t,ind)=>
                        <ToolCard text={t}/>
                      )}
                    </div>
                    <div className='flex justify-between p-5'>

                          <a className={i.DemoLink === undefined ? "hidden":"visible"} href={i.DemoLink}><Button>Demo</Button></a>
                          <a className={i.CodeLink === undefined ? "hidden":"visible"}  href={i.CodeLink}><Button>CODE</Button></a>

                    </div>
                  </div>
                  <div className="flex justify-center md:w-1/2">
                  <img className="h-96 w-full  md:h-96 md:w-auto" src={i.ImgSrc !== undefined ? i.ImgSrc : noImg} alt={i.Title}/>
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