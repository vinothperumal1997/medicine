import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT_DETAIL_API } from '../constants';
import amazonLogo from '../assets/amazon.png';
import './css/Productdeltail.css';
import { CiHeart } from 'react-icons/ci';
import RelatedItems from './RelatedItems';


interface Product {
  image: {
    original: string;
  };
  name: string;
  description: string;
  max_price: number;
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();

  const [product, setProduct] = useState<Product | null>(null);

  const [count, setCount] = useState<number>(1);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => (prevCount > 1 ? prevCount - 1 : 1)); // Minimum count set to 1
  };

  useEffect(() => {
    axios
      .get<{ data: Product }>(`${PRODUCT_DETAIL_API}/products:${slug}`, {
        params: { store: 'medicine' },
      })
      .then((response) => {
        setProduct(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [slug]);

  return (
    <div className='container'>
      {product === null ? (
        // <h1>Loading...</h1>
        
        <div className="row">
          <div className=" col-lg-6 col-md-6 col-sm-12">
            <div className="single-productimg">
            <img src={amazonLogo} alt="Amazon Logo" />

            </div>

        </div>
        <div className=" col-lg-6 col-md-6 col-sm-12">
          <p className='sproduct-categorie'>Bakery Biscuits</p>
          <h2 className='sproduct-name'>Product Name </h2>
          <p className='sproduct-rating'></p>
          <div className="sproduct-prices">
           <h4><span className='sellprice'>$32</span> <span className="mrp">$35</span> <span className="discount">26% off</span></h4>
          </div>
          <hr />
          <div className="mesure">
            <span className="mesurebox">
            250g
            </span>
            <span className="mesurebox">
            500g  
              </span>
              <span className="mesurebox">
              1kg
              </span>

          </div>
          <div className="counter">
      <button className="counter-btn" onClick={decrement}>-</button>
      <span className="counter-value">{count}</span>
      <button className="counter-btn" onClick={increment}>+</button>
    </div>
    <div className="actionbutton">
      <button className="addtocart" value={'25'}> 
        
        Add to Cart
        </button>
        <CiHeart className="nav-icon heart addwish" />

    </div>
    <hr />
    <div className="product-details">
    <div className="product-info">
  <div className="info-row">
    <span className="label">Product Code:</span>
    <span className="value">FBB00255</span>
  </div>
  <div className="info-row">
    <span className="label">Availability:</span>
    <span className="value">In Stock</span>
  </div>
  <div className="info-row">
    <span className="label">Type:</span>
    <span className="value">Fruits</span>
  </div>
  <div className="info-row">
    <span className="label">Shipping:</span>
    <span className="value">01 day shipping. <span className="free-pickup">(Free pickup today)</span></span>
  </div>
</div>

    </div>


          </div> 
        </div>

        
      ) : (
        <div className="row">
          <div className="col-6">
            <img className="product-image" src={product.image.original} alt={product.name} />
          </div>
          <div className="col-6">
            <div className="card-content">
              <h2 className="product-title">{product.name}</h2>
              <p>{product.description}</p>
              <div className="product-price">${product.max_price}</div>
            </div>
          </div>
        </div>
      )}
      <RelatedItems />
    </div>
  );
}
