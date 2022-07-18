import React from 'react';
import Head from 'next/head';
import { Header } from 'semantic-ui-react';
import HomeImg from '/public/img.svg';
import Logo from '/public/logo.png';
import Image from 'next/image';
import Link from 'next/link';
function HomePage() {
  return (
    <div>
      <Head>
        <title>CBO CHALLENGE </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='My page title' key='title' />
      </Head>

      <Header className='place-content-center min-h-[100vh] w-full  flex bg-gradient-to-r from-cyan-500 to-blue-500 items-center	justify-self-center justify-center'>
        <Header.Content>
          <Header.Subheader>
            <div className='contenedor  '>
              <div className='col basis-2/4'>
              <span className='text-2xl flex flex-col items-center'>
                    <Image layout="fixed" width={100} height={100} src={Logo} alt='logo' className=' imglogo' />
                    
                  </span>
                <h1 className='text-center text-6xl text-white py-6'>
                  Registra tu empresa
                 
                </h1>
                <Image src={HomeImg} alt={'HomePage'} />
              </div>
              <div className='col basis-2/4 w-full flex flex-row justify-center items-center'>
                <div className='contenedor-botones  '>
                  <Link href={'/companies/'}>
                    <a>
                      <button className='ui primary button'>Registrar</button>
                    </a>
                  </Link>

                  <Link href={'/about'}>
                    <a>
                      <button className='ui inverted primary button text-white'>
                        Saber más
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </Header.Subheader>
        </Header.Content>
      </Header>
    </div>
  );
}

export default HomePage;
