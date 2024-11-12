import React from 'react';
import Slider from 'react-slick';
import './BannerSlickCarousel.css';

type Props = {}

const BannerSlickCarousel: React.FC<Props> = () => {
  const settings = {
    dots: true,
    infinite: true, // Enable infinite scrolling
    speed: 500, // Animation speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    fade: true // Use fade transition
  };

  return (
    <Slider {...settings}>
      {/* Slide 1 */}
      <div className="banner-slide banner-slide-1">
        <div className="banner-content">
          <div className="shipping-badge">Free Shipping - orders over $100</div>
          <h1>
            Free Shipping on orders over <span className="highlight">$100</span>
          </h1>
          <p>
            Free Shipping to First-Time Customers Only, After promotions and discounts are applied.
          </p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>

      {/* Slide 2 */}
      <div className="banner-slide banner-slide-2">
        <div className="banner-content">
          <div className="shipping-badge">Special Discount</div>
          <h1>Get 20% Off on Your First Order</h1>
          <p>Use code FIRST20 at checkout and save on your first purchase!</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>

      {/* Slide 3 */}
      <div className="banner-slide banner-slide-3">
        <div className="banner-content">
          <div className="shipping-badge">Limited Time Offer</div>
          <h1>Buy One Get One Free on Select Items</h1>
          <p>Don’t miss out on this limited time offer. Shop now!</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </div>
    </Slider>
  );
}

export default BannerSlickCarousel;
