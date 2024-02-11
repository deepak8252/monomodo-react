import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { populardata } from "../util/cartdata";
import { Card } from "@mui/material";
const Container=styled.div`
    width: 100%;
    background-image:linear-gradient(40deg, rgba(0, 0, 0, 0.8)100%, transparent 50%);
    background-repeat:no-repeat;
    background-size: cover;
    background-position:center;
    margin-top:20px 0px;
 `;
function Blog() {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 0,
        className:"center",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
 <>
  <Container>
      <div className="slider-container w-5/6 mx-auto py-9">
        <h3 className="text-center py-5 text-white text-3xl uppercase">latest blog</h3>
        <p className="text-white text-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore ex soluta in unde, id vitae natus ea. Dignissimos a corrupti dolore distinctio ab ratione repellendus doloribus animi. Debitis, cumque a.</p>
        <Slider {...settings}>
       
    
     {
           populardata.map((item)=>(
               <>
               <Card className=" my-5 mx-2 flex flex-row p-6 gap-5  justify-center items-center" key={item.id}>
                <div className=" w-64">
                <img src={item.image} alt={item.title} className="w-full" />
                </div>
               <div className="w-2/3">
                <p>10 sept 2023</p>
               <h2 className="text-black font-bold text-3xl capitalize ">{item.title}</h2>
                 <p className="text-black">{item.des}</p>
               </div>
               </Card>
               </>
           ))
       }
         </Slider>
    </div>
  </Container>
 </>
  );
}

export default Blog;
