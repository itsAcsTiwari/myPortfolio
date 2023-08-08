import React from 'react'
import "./services.css";
import Card from '../card/Card';
import Heartemoji from "../../img/emoji.png";
import Emoji2 from "../../img/emoji2.png";
import Emoji3 from "../../img/emoji3.png";
import Resume from "./My_Resume.pdf";
import { useContext } from 'react';
import { themeContext } from "../../context";
import { motion } from 'framer-motion';

const Services = () => {
  const transition={duration:2,type:'spring'}
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="services" id='Services'>
      <div className="s__left">
        <span>My Awesome</span>

        <span>Services</span>

        <span  style={{color:darkMode? 'white':''}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Soluta adipisci repellat, tenetur tempora voluptatibus quidem tempore minus cumque eos quas.</span>
         <a href={Resume} download>
        <button className='btn2'>Download CV</button>
        </a>
       

      </div>

      <div className="s__right">

        <motion.div className='card1'
        initial={{left:"40%"}}
        whileInView={{left:"43%"}}
        transition={transition}
         style={{ left: "18rem" }}>
          <Card

            emoji={Heartemoji}
            heading={"Design"}
            details={"Figma, Sketch, PhotoShop, Adobe,Adobe Xd"}

          />
        </motion.div>
        <motion.div className='card2'
        initial={{left:"5%"}}
        whileInView={{left:"0%"}}
        transition={transition}
        style={{left:"0rem", top:"8rem"}}>
              <Card
              emoji={Emoji2}
              heading={"Developer"}
              details={"HTML, CSS, JavaScript, React"}
              />
            </motion.div >
            <motion.div className='card3' 
            initial={{left:"43%"}}
            whileInView={{left:"39%"}}
            transition={transition}
            style={{ left: "15rem",top:"17rem" }}>
              <Card

              emoji={Emoji3}
              heading={"UI/UX"}
              details={"adjalfn sdnaln sancln ajjln asna"}
              />
            </motion.div>
           

           

      </div>
    </div>
  )
}

export default Services
