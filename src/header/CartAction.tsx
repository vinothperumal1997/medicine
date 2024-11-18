import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { MdAddShoppingCart } from 'react-icons/md';
import CartModal from '../component/CartModal';

const CartAction: React.FC = () => {
  const [showModal, setShowModal] = React.useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.items);
  console.log(cartItems+'check cart Items')

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <>
      <div onClick={handleShow} className="heart">
        <MdAddShoppingCart className="nav-icon cart" />
        <span className="n-top cart-number">{cartItems.length}</span>
      </div>
      <CartModal show={showModal} handleClose={handleClose} />
    </>
  );
};

export default CartAction;
