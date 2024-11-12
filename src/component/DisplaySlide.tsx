import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./DisplaySlide.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { PRODUCT_API_URL } from "../constants";

type Category = {
 thumbnail: any;
  name: string;
  image:string;
};



const DisplaySlide = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .post(`${PRODUCT_API_URL}`,{store:"medicine"})
      .then((response) => {
        setCategories(response.data.data); 
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const settings = {
    infinite: true,
    
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  
    
    responsive: [
        {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 1,
            }
          },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="slider-container" >
    <h5>Featured Catrgories</h5>
      <Slider {...settings}>
        {categories.map((data, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={data.image.thumbnail} alt={data.name} />
            </div>
            
            <h3 className="card-title">{data.name.substring(0, 30)}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DisplaySlide;
