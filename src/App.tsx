import React from 'react';
import DisplaySlide from './component/DisplaySlide';
import NavScrollExample from './header/Navbarhead';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

// Define categories with title and image properties


const categories = [
  {
    id: 1,
    title: 'Category 1',
    image: 'https://via.placeholder.com/150', // URL for the image
  },
  {
    id: 2,
    title: 'Category 2',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 3,
    title: 'Category 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 4,
    title: 'Category 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 5,
    title: 'Category 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 6,
    title: 'Category 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 7,
    title: 'Category 3',
    image: 'https://via.placeholder.com/150',
  },
  {
    id: 8,
    title: 'Category 3',
    image: 'https://via.placeholder.com/150',
  },
];

function App() {
  
  return (
    <>
      <NavScrollExample />
      <Container>
        <DisplaySlide categories={categories} />
      </Container>
    </>
  );
}

export default App;
