// CartModal.tsx
import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import './css/CartModal.css';

interface CartModalProps {
  show: boolean;
  handleClose: () => void;
}

const CartModal: React.FC<CartModalProps> = ({ show, handleClose }) => {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title> <h5>Shop Cart</h5>
        <p className='locationmain'>Location in <span className='location-id'>382480</span></p>
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
vinoth vinoth
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary">Understood</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CartModal;
