import React from 'react'
import "./testimonial.css";
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css';
import p1 from "../../img/girl.png";
import p2 from "../../img/user.png";
import p3 from "../../img/programmer.png";
import p4 from "../../img/man.png";
import { Pagination } from 'swiper';
import 'swiper/css/pagination';
import { useContext } from 'react';
import { themeContext } from "../../context";

const Testimonial = () => {
    const theme=useContext(themeContext);
    const darkMode=theme.state.darkMode;
  
    const clients=[
        {
            img : p1,
            review : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque quam veniam qui reiciendis laborum aperiam voluptatum assumenda itaque? Dolorum quia, quidem nulla accusamus sit omnis modi obcaecati sequi nobis ullam a aspernatur libero fugiat ab',
        },
        {
            img: p2,
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ut voluptas recusandae incidunt fuga laborum, quo nemo veniam distinctio corrupti impedit hic suscipit aperiam necessitatibus a quasi! Ut error itaque assumenda veritatis voluptates, ex temporibus magnam officiis repellat ipsum debitis commodi minus unde quo sequi?',
        },
        {
            img: p3,
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ut voluptas recusandae incidunt fuga laborum, quo nemo veniam distinctio corrupti impedit hic suscipit aperiam necessitatibus a quasi! Ut error itaque assumenda veritatis voluptates, ex temporibus magnam officiis repellat ipsum debitis commodi minus unde quo sequi?',
        },
        {
            img: p4,
            review: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia ut voluptas recusandae incidunt fuga laborum, quo nemo veniam distinctio corrupti impedit hic suscipit aperiam necessitatibus a quasi! Ut error itaque assumenda veritatis voluptates, ex temporibus magnam officiis repellat ipsum debitis commodi minus unde quo sequi?',
        },
        

    ]
    return (
    <div className='t-wrapper' id='Testimonial'>
        <div className="t-heading">
            <span>Clients Always Get </span>
            <span> Exceptional Work</span>
            <span> From Me...</span>
           </div>

        <Swiper 
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{clickable: true}}
        >
             {clients.map((client,index)=>{
                return(
                    <SwiperSlide key={index}>
                        <div className="testimonial">
                        <img src={client.img} alt="" />
                        <span style={{color:darkMode? 'white':''}}>{client.review}</span>
                        </div>
                    </SwiperSlide>
                );
             })};

        </Swiper>

      
    </div>
  )
}

export default Testimonial
