import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projects from "./scenes/Projects";
import Awards from "./scenes/Awards";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useState } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";


function App() {
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  
  return (<div className="app bg-emerald-400">
    <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
    <div className="w-5/6 mx-auto md:h-full">
      {isAboveMediumScreens && (
        <DotGroup
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        />
      )}
      <Landing setSelectedPage={setSelectedPage} />
    </div>
    <LineGradient />
     <div className="w-5/6 mx-auto md:h-full">
        <MySkills/>
     </div>
     <br/>
     <br/>
     <LineGradient/>
     <div className="w-5/6 mx-auto">
     <Projects/>
     </div>
     <LineGradient/>
     <div className="w-5/6 mx-auto md:h-full">
     <Awards/>
     </div>
     <LineGradient/>
     <div className="w-5/6 mx-auto md:h-full">
     <Contact/>
     </div>
     <Footer/>

     
  </div>

  );
  
}

export default App;
