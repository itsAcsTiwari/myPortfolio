import React from 'react'
import "./works.css";
import Amazon from "../../img/social.png";
import Instagram from "../../img/instagram (1).png";
import Pay from "../../img/paypal.png";
import fb from "../../img/facebook.png";
import building from "../../img/office-building.png";
import { useContext } from 'react';
import { themeContext } from "../../context";
import { motion } from 'framer-motion';

const Portfolio = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    return (
        <div className='works' id='Works'>
            <div className="s__left">
                <span>Works for All these</span>

                <span>Brands & Clients</span>

                <span style={{ color: darkMode ? 'white' : '' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                    Soluta adipisci repellat, tenetur tempora voluptatibus quidem <br />tempore minus cumque eos quas.</span>

                <button className='btn2'>Hire Me</button>



            </div>

            <div className="p__right">
                <motion.div
                 initial={{ rotate: 45 }}
                    whileInView={{ rotate: 0 }}
                    viewport={{ margin: "-40px" }}
                    transition={{ duration: 3.5, type: 'spring' }}

                    className="main_circle">

                    <div className="c_circle" style={{ left: "-3rem" }}>
                        <img src={Amazon} alt="" />
                    </div>

                    <div className="c_circle" style={{ left: "8rem", top: "-3.5rem" }}>


                        <img src={fb} alt="" />
                    </div>
                    <div className="c_circle" style={{ top: "17rem", left: "7.5rem" }}>
                        <img src={Instagram} alt="" />
                    </div>

                    <div className="c_circle" style={{ left: "19rem" }}>
                        <img src={Pay} alt="" />
                    </div>

                    <div className="c_circle" style={{ left: "7.5rem" }}>
                        <img src={building} alt="" />
                    </div>
            </motion.div>
            <div className="b_circle">
                <div className="blue_circle"></div>
            </div>

            <div className="b_circle">
                <div className="yellow_circle"></div>
            </div>
        </div>
        </div >
    )
}

export default Portfolio
