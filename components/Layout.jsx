import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <>
    <Navbar />
      <div className='bg-gray-100'>
        <div className='h-full '>{children}</div>
      </div>{' '}
    </>
  );
};

export default Layout;
