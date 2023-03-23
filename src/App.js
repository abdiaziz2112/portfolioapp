import Header from "./components/Header";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Showcase from "./components/Showcase";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";

function App() {
  return (
  <Router>

    <div className="max-w-4xl mx-auto p-2">

      <Header/>

      <Routes>
        <Route path="/" element={<Showcase/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/services" element={<Services/>}/>
      </Routes>
      


      
      <Footer/>

    </div>

  </Router>
    
  );
}

export default App;
