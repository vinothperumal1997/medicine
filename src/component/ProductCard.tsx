import React from 'react';
import "./ProductCard.css";


// Define the Product type
interface Product {
  imgSrc: string;
  category: string;
  productName: string;
  rating: number;
  reviewsCount: number;
  price: number;
  originalPrice: number;
}

const ProductCard: React.FC = () => {
  // Sample products data
  const products: Product[] = new Array(12).fill({
    imgSrc: 'https://via.placeholder.com/150',
    category: 'Snack & Munchies',
    productName: "Haldiram's Sev Bhujia",
    rating: 3.5,
    reviewsCount: 149,
    price: 18,
    originalPrice: 24,
  });

  return (
<div 
  className="container py-4" 
  style={{ "--bs-gutter-x": "1rem !important" }}
>      <div className="row">
        {products.map((product, index) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-custom mb-4" key={index}>
            <div className="card card-product">
              <div className="sale-badge">Sale</div>
              <div className="product-img">
                <img src={product.imgSrc} alt="Product Image" />
              </div>
              <div className="category">{product.category}</div>
              <div className="product-name">{product.productName}</div>
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
                  ${product.price} <span className="original-price">${product.originalPrice}</span>
                </div>
                <button className="add-btn">+ Add</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
