import React, { useEffect, useState } from 'react';
import "./css/ProductCard.css";
import { PRODUCT_API_URL } from '../constants';
import axios from 'axios';
import { Link } from 'react-router-dom'


// Define the Product type
interface Product {


  image: {
    thumbnail: string;
  };
  category: string;
  name: string;
  rating: number;
  reviewsCount: number;
  sale_price: number;
  price: number;
  min_price:number;
  max_price:number;
  slug:string;
  id:number;
}

const ProductCard: React.FC = () => {

  const [Product, setProduct] = useState<Product[]>([]);

  

  useEffect(() => {
    axios
      .post(`${PRODUCT_API_URL}products`,{store:"medicine"})
      .then((response) => {
        setProduct(response.data.data); 
        console.log(response.data)
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
<div>
  {
     Product.length === 0 ?
     <h1 className='loading'>Loading....</h1>
     :<div>
        <div className="row">
        {Product.map((product, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-custom mb-4" key={index}>
            <div className="card card-product">
              <div className="sale-badge">Sale</div>
              <Link to={`/productdetail/${product.slug}`}  key={product.id}>
              <div className="product-img">
                <img src={product.image.thumbnail} alt="Product Image" />
              </div>
              </Link>
              {/* <div className="category">{product.category}</div> */}
              <div className="product-name">{product.name}</div>
              <div className="rating">
                <span className={`fa fa-star ${product.rating >= 1 ? '' : 'off'}`}></span>
                <span className={`fa fa-star ${product.rating >= 2 ? '' : 'off'}`}></span>
                <span className={`fa fa-star ${product.rating >= 3 ? '' : 'off'}`}></span>
                <span className={`fa fa-star-half-alt ${product.rating >= 4 ? '' : 'off'}`}></span>
                <span className={`fa fa-star ${product.rating >= 5 ? '' : 'off'}`}></span>
                <span className="rating-text">
                  {product.rating} ({product.reviewsCount})
                </span>
              </div>
              <div className="g-price-add">
                <div className="price">
                  ${product.sale_price ?? product.price ?? product.min_price } <span className="original-price">{product.max_price !== (product.sale_price ?? product.price ?? product.min_price)
    ? `${'$'+product.max_price}`
    : null}</span>
                </div>
                <button className="add-btn">+ Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
  }
    </div>
  );
};

export default ProductCard;
