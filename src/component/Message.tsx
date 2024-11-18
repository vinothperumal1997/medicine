import React, { useState } from "react";

const AddToCart: React.FC = () => {
  // State to hold the success message
  const [message, setMessage] = useState<string>("");

  // Function to handle the button click
  const handleAddToCart = () => {
    setMessage("Added to Cart Successfully");
    setTimeout(() => {
      setMessage(""); // Clear the message after 3 seconds
    }, 3000);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {/* <button
        onClick={handleAddToCart}
        style={{
          padding: "10px 20px",
          backgroundColor: "blue",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Add to Cart
      </button> */}
      {/* Display the success message */}
      {message && (
        <p style={{ color: "green", marginTop: "10px", fontWeight: "bold" }}>
          {message}
        </p>
      )}
    </div>
  );
};

export default AddToCart;
