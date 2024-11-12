import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button, Badge, Container, Row, Col } from 'react-bootstrap';
import { PRODUCT_API_URL } from '../../constants';

const ProductCard = ({ product }) => (
  <Card style={{ width: '20rem', margin: '10px', position: 'relative' }} className="shadow-sm">
    {product.onSale && (
      <Badge pill bg="danger" style={{ position: 'absolute', top: '10px', left: '10px' }}>
        Sale
      </Badge>
    )}
    <Card.Img variant="top" src={product.image.thumbnail} alt={product.title} />
    <Card.Body>
      <Card.Text className="text-muted" style={{ fontSize: '14px' }}>
        {product.category}
      </Card.Text>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
        <span style={{ fontSize: '18px', fontWeight: 'bold' }}>${product.price}</span>{' '}
        {product.originalPrice && (
          <span style={{ textDecoration: 'line-through', color: '#888' }}>
            ${product.originalPrice}
          </span>
        )}
      </Card.Text>
      
      <Button variant="success" style={{ width: '100%' }}>+ Add</Button>
    </Card.Body>
  </Card>
);

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .post(PRODUCT_API_URL, { store: "medicine" })
      .then((response) => {
        setProducts(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <Container>
      <h2 className="mb-4">Product Categories</h2>
      {/* Adjust the number of columns for larger card display */}
      <Row xs={1} sm={2} md={3} lg={4} xl={5} className="g-1">
        {products.map((product, index) => (
          <Col key={index}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductGrid;
