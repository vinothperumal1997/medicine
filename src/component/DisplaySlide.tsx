import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./DisplaySlide.css";
import { useState, useEffect } from "react";
import axios from "axios";

type Category = {
 thumbnail: any;
  name: string;
  image:string;
};

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="arrow next-arrow" onClick={onClick}>
      <span>&gt;</span>
    </div>
  );
  
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <div className="arrow prev-arrow" onClick={onClick}>
      <span>&lt;</span>
    </div>
  );

// const NextArrow = (props: any) => {
//     const { onClick } = props;
//     return (
//       <div className="arrow next-arrow" onClick={onClick}>
//         <span> &gt;</span>
//       </div>
//     );
//   };
  
//   const PrevArrow = (props: any) => {
//     const { onClick } = props;
//     return (
//       <div className="arrow prev-arrow" onClick={onClick}>
//         <span>&lt;</span>
//       </div>
//     );
//   };

const DisplaySlide = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    axios
      .post("https://ecom-shop-api.vercel.app/products",{store:"medicine"})
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
    autoplaySpeed: 30004545,
    pauseOnHover: true,
    // nextArrow: <NextArrow />,
    // prevArrow: <PrevArrow />,
    
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
    <div className="slider-container">
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={category.image.thumbnail} alt={category.name} />
            </div>
            
            <h3 className="card-title">{category.name.substring(0, 30)}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DisplaySlide;
