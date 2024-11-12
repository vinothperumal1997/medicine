import React from 'react';
import { Card, Button, Badge } from 'react-bootstrap';
import { AiFillStar } from 'react-icons/ai';

interface Product {
  image: string;
  category: string;
  title: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  onSale: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCardww: React.FC<ProductCardProps> = ({ product }) => (
  <Card style={{ width: '18rem', margin: '10px', position: 'relative' }} className="shadow-sm">
    {product.onSale && (
      <Badge pill bg="danger" style={{ position: 'absolute', top: '10px', left: '10px' }}>
        Sale
      </Badge>
    )}
    <Card.Img variant="top" src={product.image} alt={product.title} />
    <Card.Body>
      <Card.Text className="text-muted" style={{ fontSize: '14px' }}>
        {product.category}
      </Card.Text>
      <Card.Title>{product.title}</Card.Title>
      
      <div className="d-flex align-items-center mb-2">
        <div style={{ color: '#ffc107', fontSize: '16px', marginRight: '5px' }}>
          {[...Array(5)].map((_, index) => (
            <AiFillStar key={index} />
          ))}
        </div>
        <span style={{ fontSize: '14px', color: '#666' }}>
          {product.rating} ({product.reviews})
        </span>
      </div>

      <Card.Text>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>${product.price}</span>{' '}
        {product.originalPrice && (
          <span style={{ textDecoration: 'line-through', color: '#888', fontSize: '14px' }}>
            ${product.originalPrice}
          </span>
        )}
      </Card.Text>
      
      <Button variant="success" style={{ width: '100%' }}>+ Add</Button>
    </Card.Body>
  </Card>
);

export default ProductCardww;
    