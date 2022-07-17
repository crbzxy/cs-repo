import React from 'react';
import Head from 'next/head';
import { Header } from 'semantic-ui-react';
import HeaderHome from '../../components/Header';
import Footer from '../../components/Footer';
import axios from 'axios';
import Moment from 'moment';
import Layout from '../../components/layout';
function HomePage({ companies }) {
  console.log(companies);
  return (
    <>
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
        <HeaderHome />
        <section className='grid grid-cols-3'>
          {companies.map((company) => (
            <div
              className='company border-radius border-gray-500 shadow-md p-4 m-4'
              key={company.id}>
              <h2 className='text-2xl'>{company.name}</h2>

              <p>{company.description}</p>
              <p>{company.companyType}</p>
              <p>{Moment(company.creationDate).format('DD/MM/YYYY')}</p>
            </div>
          ))}
        </section>
        <Footer />
      </Layout>
    </>
  );
}
export const getServerSideProps = async (context) => {
  console.log(context);
  const res = await axios.get('http://localhost:3000/api/companies');
  return {
    props: { companies: res.data },
  };
};
export default HomePage;
