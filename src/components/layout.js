import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <div>
      <div>
        <Header />
        { children }
      </div>
      <Footer />
    </div>
  );
};

export default Layout;