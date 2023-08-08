import React from 'react'
import "./intro.css";
import Bootstrap from "../../img/bootstrap.png"
import Instagram from "../../img/instagram.png";
import Linkedin from "../../img/linkedin.png";
import Blood from "../../img/blood.png";
import Spots from "../../img/spots.png";
import Mypic from "../../img/my_pic-removebg-preview.png";
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import King from "../../img/king (1).png";
import Verify from "../../img/verify.png";
import Cartoon from "../../img/cartoon.png";
import { useContext } from 'react';
import { themeContext } from "../../context";
import { motion } from 'framer-motion';


const Intro = () => {

  const transition={duration:2,type:'spring'}
  const theme=useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className='intro'>
        <div className="i__left">
            <div className="i__name">
                <span style={{color:darkMode? 'white':''}}>Hi! I Am</span>
                <span>Ashish Tiwari</span>
                <span style={{color:darkMode? 'white':''}}>Front Developer with high level of experience of web designing and development,Producting the Quality work</span>
            </div>
            <button className="i__button">Hire Me</button>

            <div className="i__icons">
                <a href="https://getbootstrap.com"><img src={Bootstrap} alt="" /></a>
               <a href="https://www.instagram.com"> <img src={Instagram} alt="" /></a>
               <a href="https://www.linkedin.com/in/ashish-kumar-a61b218b"> <img src={Linkedin} alt="" /></a>
            </div>
        </div>

        <div className="i__right">
           <img src={Blood} alt="" />
           <img src={Spots} alt="" />
           <img src={Mypic} alt="" />
           <motion.img 
           initial={{left:"-20%"}}
          whileInView={{left:"0%"}}
           
           transition={transition}
           src={Cartoon} alt=""  />
          

           <motion.div
           initial={{left:"63%"}}
           whileInView={{left:"50%"}}
           transition={transition} className='crown' style={{top:"-4%",left:"60%"}}>
            <FloatingDiv image={King} txt1={"Web"} txt2={"Developer"}/>
           </motion.div>

           <motion.div 
           initial={{left:"15%"}}
           whileInView={{left:"0%"}}
           transition={transition}
           style={{bottom:"30%"}}>
            <FloatingDiv image={Verify} txt1={"Best Design"} txt2={"Award"}/>
           </motion.div>

           
        </div>
      
    </div>
  )
}

export default Intro
