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
  const skilRef = useRef(null); 
  const projectRef = useRef(null); 
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
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
        clickSkill={()=>{handleSkill()}}
        clickProject={()=>{handleProject()}}
        clickAbout={()=>{handleAbout()}}
        clickContact={()=>{handleContact()}}/>
      <Particle/>
      <Zoom>
        <Developer/>
      </Zoom>
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
