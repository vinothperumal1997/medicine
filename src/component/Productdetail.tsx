import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCT_DETAIL_API } from '../constants';

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
        <h1>Loading...</h1>
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
    </div>
  );
}
