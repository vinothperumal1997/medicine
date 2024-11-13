// Layout.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavScrollExample from './header/Navbarhead'; // Your Navbar
import Footershop from './component/Footer'; // Your Footer
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout: React.FC = () => {
  return (
    <div>
      <NavScrollExample />
      
      <main>
        <Outlet />
      </main>
      
      <Footershop />
    </div>
  );
};

export default Layout;
