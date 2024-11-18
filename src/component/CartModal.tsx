import React, { useEffect, useState } from 'react';
import { Modal } from 'react-bootstrap';
import './css/CartModal.css';
import amazonLogo from '../assets/amazon.png';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  images:string;
}

interface CartModalProps {
  show: boolean;
  handleClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ show, handleClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Fetch cart items from sessionStorage on component load
  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart.items || []);
    }
  }, [handleClose]);

  // Increment quantity of a cart item
  const increment = (id: string) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setCartItems(updatedCartItems);

    // Update sessionStorage
    sessionStorage.setItem('cart', JSON.stringify({ items: updatedCartItems }));
  };

  // Decrement quantity of a cart item (minimum quantity is 1)
  const decrement = (id: string) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
        : item
    );
    setCartItems(updatedCartItems);

    // Update sessionStorage
    sessionStorage.setItem('cart', JSON.stringify({ items: updatedCartItems }));
  };

  // Remove an item from the cart
  const removeItem = (id: string) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCartItems);

    // Update sessionStorage
    sessionStorage.setItem('cart', JSON.stringify({ items: updatedCartItems }));
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h5>Shop Cart</h5>
          <p className="locationmain">
            Location in <span className="location-id">382480</span>
          </p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div>

            <div className="cmpc" key={item.id}>
              <div className="productcartimg">
                <img src={item.images} alt="Product" />
              </div>
              <div className="productcartdetails">
                <p className="pcname">{item.name}</p>
                <p className="pcmesure">250g</p>
                <p
                  className="pcremove"
                  onClick={() => removeItem(item.id)}
                  style={{ cursor: 'pointer', color: 'red' }}
                  >
                  Remove
                </p>
              </div>
              <div className="counter">
                <button
                  className="counter-btn"
                  onClick={() => decrement(item.id)}
                  >
                  -
                </button>
                <span className="counter-value">{item.quantity}</span>
                <button
                  className="counter-btn"
                  onClick={() => increment(item.id)}
                  >
                  +
                </button>
              </div>
              <div className="pcprice">
                <p className="saleprice-pc">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            
            </div>
              <hr />
                  </div>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
        <div className="buttoncm">
          <button className="cs-shopping">Continue Shopping</button>
          <button className="uc-cart">Update Cart</button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default CartModal;
