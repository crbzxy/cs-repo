import React from 'react';
import Head from 'next/head';
import { Header } from 'semantic-ui-react';
import HeaderHome from '../../components/Header';
function HomePage() {
  return (
    <div>
      <Head>
        <title>CBO CHALLENGE </title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='My page title' key='title' />
      </Head>

      <Header className='place-content-center min-h-[20vh] w-full  flex bg-gradient-to-r from-cyan-500 to-blue-500 items-center	justify-self-center justify-items-center'>
        <Header.Content>
          <Header.Subheader>
            <h1 className='text-center text-white'>
              <span className='text-5xl'>CBO CHALLENGE</span>
            </h1>
          </Header.Subheader>
        </Header.Content>
      </Header>
      <HeaderHome />
    </div>
  );
}

export default HomePage;
