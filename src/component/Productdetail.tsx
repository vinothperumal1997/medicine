import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {PRODUCT_DETAIL_API_SLUG } from '../constants';
import amazonLogo from '../assets/amazon.png';
import './css/Productdeltail.css';
import { CiHeart } from 'react-icons/ci';
import RelatedItems from './RelatedItems';
import { addToCart } from '../redux/slicers/cartSlice';
import { useDispatch } from 'react-redux';
import { addToWishlist } from '../redux/slicers/WishSlice';

interface Product {
  image: {
    original: string;
  };
  name: string;
  description: string;
  max_price: number;
  id:string;
  product_type:string;
  price:string;
  min_price:string;
  categories:string;
  sku:string;
  sale_price:string;
  images:string;
}

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();

  const [product, setProduct] = useState<Product | null>(null);
  const [count, setCount] = useState<number>(1);
  const dispatch = useDispatch();

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1)); // Minimum count set to 1
  };

  useEffect(() => {
    axios
      .get<{ data: Product }>(`${PRODUCT_DETAIL_API_SLUG}/products/${slug}`, {
        params: { store: 'medicine' },
      })
      .then((response) => {
        setProduct(response.data); // Accessing the nested `data` property
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [slug]);
  
  const handleAddToWishlist = () =>{
    if (product) {
      dispatch(
        addToWishlist({
          id: product.id, // Replace with a dynamic ID if available
          name: product.name,
          price: product.max_price,
          quantity: count,
          images:product.image.original,

        })
      );
    }

  }
  

  const handleAddToCart = () => {
    if (product) {
      dispatch(
        addToCart({
          id: product.id, // Replace with a dynamic ID if available
          name: product.name,
          price: product.max_price,
          quantity: count,
          images:product.image.original,
        })
      );
    }
  };

  return (
    <div className="container">
      {product === null ? (
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="single-productimg">
              <img src={amazonLogo} alt="Amazon Logo" />
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="sproduct-categorie">Bakery Biscuits</p>
            <h2 className="sproduct-name">Product Name</h2>
            <p className="sproduct-rating"></p>
            <div className="sproduct-prices">
              <h4>
                <span className="sellprice">$32</span>{' '}
                <span className="mrp">$35</span>{' '}
                <span className="discount">26% off</span>
              </h4>
            </div>
            <hr />
            <div className="mesure">
              <span className="mesurebox">250g</span>
              <span className="mesurebox">500g</span>
              <span className="mesurebox">1kg</span>
            </div>
            <div className="counter">
              <button className="counter-btn" onClick={decrement}>
                -
              </button>
              <span className="counter-value">{count}</span>
              <button className="counter-btn" onClick={increment}>
                +
              </button>
            </div>
            <div className="actionbutton">
              <button className="addtocart" onClick={handleAddToCart}>
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
                  <span className="value">
                    01 day shipping.{' '}
                    <span className="free-pickup">(Free pickup today)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <div className="single-productimg">
            <img src={product.image.original} alt="Amazon Logo" />
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12">
            <p className="sproduct-categorie">{product.product_type}</p>
            <h2 className="sproduct-name">{product.name}</h2>
            <p className="sproduct-rating"></p>
            <div className="sproduct-prices">
              <h4>
                <span className="sellprice">${product.sale_price ??product.price ?? product.min_price}</span>{' '}
                <span className="mrp">${product.max_price}</span>{' '}
                <span className="discount">26% off</span>
              </h4>
            </div>
            <hr />
            <div className="mesure">
            {product.categories.map((typepd, index) => (
              <span className="mesurebox" key={typepd.id || index}>
                {typepd.name}
              </span>
            ))}


          {/* {product.categories && product.categories.map((type, index) => (
            <span className="mesurebox" key={index}>
              {type.name}
            </span>
          ))} */}
            </div>
            <div className="counter">
              <button className="counter-btn" onClick={decrement}>
                -
              </button>
              <span className="counter-value">{count}</span>
              <button className="counter-btn" onClick={increment}>
                +
              </button>
            </div>
            <div className="actionbutton">
              <button className="addtocart" onClick={handleAddToCart}>
                Add to Cart
              </button>

              <CiHeart className="nav-icon heart addwish"   onClick={handleAddToWishlist}  />

            </div>
            <hr />
            <div className="product-details">
              <div className="product-info">
                <div className="info-row">
                  <span className="label">Product Code:</span>
                  <span className="value">{product.sku}</span>
                </div>
                <div className="info-row">
                  <span className="label">Availability:</span>
                  <span className="value">In Stock</span>
                </div>
                <div className="info-row">
                  <span className="label">Type:</span>
                  <span className="value">{product.product_type}</span>
                </div>
                <div className="info-row">
                  <span className="label">Shipping:</span>
                  <span className="value">
                    01 day shipping.{' '}
                    <span className="free-pickup">(Free pickup today)</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <RelatedItems />
    </div>
  );
}
