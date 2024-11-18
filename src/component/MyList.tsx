import React, { useEffect, useState } from 'react';

const MyList: React.FC = () => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    // Retrieve the cart data from localStorage
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart.items);
    }
  }, []);

  return (
    <div>
      <h2>My Cart List</h2>
      {cartItems.length > 0 ? (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: '20px' }}>
              <p><strong>Name:</strong> {item.name}</p>
              <p><strong>Price:</strong> ${item.price.toFixed(2)}</p>
              <p><strong>Quantity:</strong> {item.quantity}</p>
              <p><strong>Total:</strong> ${(item.price * item.quantity).toFixed(2)}</p>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default MyList;
