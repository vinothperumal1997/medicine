import React, { useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { MdOutlineDeleteForever } from 'react-icons/md';

interface Product {
  id: number;
  name: string;
  quantity: string;
  price: number;
  status: 'In Stock' | 'Out of Stock';
  image: string;
}

const Wishlist: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  // Load the wishlist from sessionStorage on component mount
  useEffect(() => {
    const storedWish = sessionStorage.getItem('wish');
    if (storedWish) {
      const parsedWish = JSON.parse(storedWish);
      setProducts(parsedWish.items || []);
    }
  }, []); // Dependency array is empty to prevent re-triggering on every render.

  // Handle product deletion and update sessionStorage
  const handleDelete = (id: number) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);

    // Update the sessionStorage after deletion
    sessionStorage.setItem(
      'wish',
      JSON.stringify({ items: updatedProducts })
    );
  };

  return (
    <div className="container mt-4">
      <h3>My Wishlist</h3>
      <p>There are {products.length} products in this wishlist.</p>
      <Table responsive bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>Product</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Actions</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src={product.image} // Fixed `product.images` to `product.image`
                    alt={product.name}
                    style={{ width: '50px', marginRight: '10px' }}
                  />
                  <div>
                    <p className="mb-1">{product.name}</p>
                    <small>{product.quantity}</small>
                  </div>
                </div>
              </td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <span
                  className={`badge ${
                    product.status === 'In Stock' ? 'bg-success' : 'bg-danger'
                  }`}
                >
                  {product.status}
                </span>
              </td>
              <td>
                {product.status === 'In Stock' ? (
                  <Button variant="success" size="sm">
                    Add to Cart
                  </Button>
                ) : (
                  <Button variant="dark" size="sm">
                    Contact us
                  </Button>
                )}
              </td>
              <td>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => handleDelete(product.id)}
                >
                  <MdOutlineDeleteForever />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Wishlist;
