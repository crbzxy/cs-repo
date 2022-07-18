import Image from 'next/image';
import React from 'react';
import Logo from '../public/logo.png';
function Navbar() {
  return (
    <>
      <nav>
        <div className='p-4 '>
          <Image  src={Logo}  alt='Carlos Boyzo' centered width={"30px"} height={"30px"} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
