
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import TechStack from "./components/TechStack";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import ProjectDetail from "./components/ProjectDetail"; // Assuming this is a new component
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
        <Hero />
    < About /> 
        <Projects />
 <ProjectDetail />
 <ProjectDetail />
   <TechStack />
      <Resume />
      <Contact />
    </div>
  
  );
}

export default App;
