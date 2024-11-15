import React from 'react';
import { createBrowserRouter, RouterProvider, RouteObject } from 'react-router-dom';
import Layout from './Layout';
import DisplaySlide from './component/DisplaySlide';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Bannerslide from './component/Bannerslide';
import ProductCard from './component/ProductCard';
import ContentRead from './component/ContentRead';
import ProductDetail from './component/Productdetail';
import CartModal from './component/CartModal';


// Define a type for your app routes
const appRoutes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Container>
            <Bannerslide />
            <DisplaySlide />
            <ProductCard />
            <ContentRead />
            <CartModal />
          </Container>
        ),
      },

      {
        path: '/about',
        element: (
          <Container>
            
            <ProductCard />
          </Container>
        ),
      },

      {
        path: '/productdetail/:slug',
        element: <ProductDetail />
    },
     
    ],
  },
];

// Create the router instance
const router = createBrowserRouter(appRoutes);

const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
