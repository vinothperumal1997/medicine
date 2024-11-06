import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./DisplaySlide.css"
import { useState } from "react";
import axios from "axios";


type Category = {
  image: string;
  title: string;
};

type Props = {
  categories: Category[];
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="arrow next-arrow" onClick={onClick}>
      <span> &gt;</span>
    </div>
  );
};

const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <div className="arrow prev-arrow" onClick={onClick}>
      <span>&lt;</span>
    </div>
  );
};

const DisplaySlide = ({ categories }: Props) => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow:  <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
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
  const [data,setData] = useState([]);
  useEffect(() => {
    axios.post("")
  
    return () => {
      second
    }
  }, [third])
  
 


  return (
    <div className="slider-container">
      <h2>Featured Categories</h2>
      <Slider {...settings}>
        {categories.map((category, index) => (
          <div className="card" key={index}>
            <div className="card-image">
              <img src={category.image} alt={category.title} />
            </div>
            <h3 className="card-title">{category.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default DisplaySlide;
