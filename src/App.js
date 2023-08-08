
import './App.css';
import Navbar from './component/Navbar/Navbar';
import Intro from "./component/intro/Intro";
import Services from './component/services/Services';
import Experience from './component/experience/Experience';
import Works from "./component/works/Works"
import Portfolio from './component/portfolio/Portfolio';
import Testimonial from './component/Testimonial/Testimonial';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import { themeContext } from './context';
import { useContext } from 'react';



function App() {
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;
  return (
    <div className="App" style={{background:darkMode? 'black': '',
    color: darkMode? 'white':''}}>
     <Navbar/>
     <Intro/>
     <Services/>
     <Experience/>
     <Works/>
     <Portfolio/>
     <Testimonial/>
     <Contact/>
     <Footer/>
    
    </div>
  )
   
  
}

export default App;
