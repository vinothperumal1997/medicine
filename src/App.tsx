import React from 'react';
import DisplaySlide from './component/DisplaySlide';
import NavScrollExample from './header/Navbarhead';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Bannerslide from './component/Bannerslide';
import ProductCard from './component/ProductCard';


function App() {
  
  return (
    <>
      <NavScrollExample />
      <Container>
        <Bannerslide />
        <DisplaySlide  />
        {/* <ProductCard product={'vinoth'}/> */}
        <ProductCard />
      </Container>
    </>
  );
}

export default App;
