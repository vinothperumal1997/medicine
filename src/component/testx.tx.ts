import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slicers/cartSlice';
import axios from 'axios';
import "./css/ProductCard.css";
import { PRODUCT_API_URL } from '../constants';

interface Product {
  image: { thumbnail: string };
  category: string;
  name: string;
  rating: number;
  reviewsCount: number;
  sale_price: number;
  price: number;
  min_price: number;
  max_price: number;
  slug: string;
  id: number;
}

const ProductCard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .post(`${PRODUCT_API_URL}products`, { store: "medicine" })
      .then(response => setProducts(response.data.data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  const handleAddToCart = (product: Product) => {
    dispatch(addToCart({ id: product.id, name: product.name, price: product.sale_price || product.price, quantity: 1 }));
  };

  return (
    <div>
      {products.length === 0 ? (
        <h1 className='loading'>Loading....</h1>
      ) : (
        <div className="row">
          {products.map((product) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-custom mb-4" key={product.id}>
              <div className="card card-product">
                <div className="sale-badge">Sale</div>
                <div className="product-img">
                  <img src={product.image.thumbnail} alt="Product Image" />
                </div>
                <div className="product-name">{product.name}</div>
                <div className="rating">
                  <span className="rating-text">{product.rating} ({product.reviewsCount})</span>
                </div>
                <div className="g-price-add">
                  <div className="price">
                    ${product.sale_price ?? product.price}
                  </div>
                  <button className="add-btn" onClick={() => handleAddToCart(product)}>+ Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;
