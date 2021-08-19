import React from 'react';

import Header from '../components/header';
import Footer from '../components/footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen my-0 mx-auto">
      <div className="flex-grow">
        <Header />
        { children }
      </div>
      <Footer />
    </div>
  );
};

export default Layout;