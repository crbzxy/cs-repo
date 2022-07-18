import React from 'react';

const Layout = ({ children }) => {
  return (
    <>
      <nav className='navbar'>LOGO</nav>
      <div className='bg-gray-100'>
        <div className='h-full '>{children}</div>
      </div>{' '}
    </>
  );
};

export default Layout;
