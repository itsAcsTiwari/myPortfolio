import React from 'react'
import "./footer.css";
import Wave from "../../img/wave1-removebg-preview.png";

import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Fb from "@iconscout/react-unicons/icons/uil-facebook";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Wave} alt="" style={{ width: "100%", height: "17rem" }} />
            <div className="f_content">
                <span>ashishkumar45naman@gmail.com </span>
                <div className='f_icons'>
                    <Insta color='white' size='2rem' />
                    <Fb color='white' size='2rem' />
                    <Linkedin color='white' size='2rem' />
                </div>




            </div>
        </div>





    )
}

export default Footer
