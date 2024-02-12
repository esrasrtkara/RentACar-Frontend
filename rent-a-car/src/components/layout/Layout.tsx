import React from 'react';
import Navbar from './navbar/Navbar';
import Footer from './footer/Footer';
import './layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = (props: LayoutProps) => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="children">{props.children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
