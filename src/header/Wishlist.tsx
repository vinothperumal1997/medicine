import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/Store';
import { Nav } from 'react-bootstrap';
import { CiHeart } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const WishAction: React.FC = () => {
  const wishItems = useSelector((state: RootState) => state.wish.items);

  return (
    <>
      <Nav.Link as={Link} to="/wishlistpage">
        <CiHeart className="nav-icon heart" />
        <span className="n-top cart-number">{wishItems.length}</span>
      </Nav.Link>
    </>
  );
};

export default WishAction;
