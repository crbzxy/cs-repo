import React from 'react';
import Head from 'next/head';
import { Header } from 'semantic-ui-react';
import HeaderForm from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';

import Layout from '../../components/Layout';
import ListCompanies from '../../components/ListCompanies';
import { Toaster } from 'react-hot-toast';
function HomePage({ companies }) {
  console.log(companies);
  return (
    <>
      <Toaster />

      <Layout>
        <Head>
          <title>Registra tu empresa</title>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <meta property='og:title' content='My page title' key='title' />
        </Head>

        <Header className='place-content-center min-h-[20vh] w-full  flex bg-gradient-to-r from-cyan-500 to-blue-500 items-center	justify-self-center justify-items-center'>
          <Header.Content>
            <Header.Subheader>
              <h1 className='text-center text-white'>
                <span className='text-5xl'>Registra tu empresa</span>
              </h1>
            </Header.Subheader>
          </Header.Content>
        </Header>
        <HeaderForm />
        <ListCompanies companies={companies} />

        <Footer />
      </Layout>
    </>
  );
}
export const getServerSideProps = async (context) => {
  console.log(context);
  const { data: companies } = await axios.get(
    'https://cbo-cschallenge.netlify.app/api/companies'
  );
  return {
    props: { companies },
  };
};
export default HomePage;
