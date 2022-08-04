import React,{useRef} from 'react';
import About from "./components/About";
import Developer from "./components/Developer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Particle from "./components/Particle";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
function App() {
  const topRef = useRef(null)
  const skilRef = useRef(null); 
  const projectRef = useRef(null); 
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const handleTop = () =>{
    topRef.current.scrollIntoView({behavior : 'smooth'})
  }
  const handleSkill = ()=>{
    skilRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleProject = ()=>{
    projectRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleAbout = ()=>{
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  const handleContact = ()=>{
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <div>
      <Navbar
        clickTop={()=>{handleTop()}}
        clickSkill={()=>{handleSkill()}}
        clickProject={()=>{handleProject()}}
        clickAbout={()=>{handleAbout()}}
        clickContact={()=>{handleContact()}}/>
      <Particle/>
      <div ref={topRef}>
      <Zoom>
        <Developer/>
      </Zoom>
      </div>
      <div ref={skilRef}>
        <Skills/>
      </div>
      <div ref={projectRef}>
        <Projects/>
      </div>
      <div ref={aboutRef}>
      <Slide bottom>
      <About/>
      </Slide>
      </div>
      <div ref={contactRef}>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
