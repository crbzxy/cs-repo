import React from 'react';
import { Header } from 'semantic-ui-react';
import Layout from '../../components/layout';

function CompanyPage(props) {
  return (
    <>
      <Layout>
        <Header>
          <Header.Content>
            <Header.Subheader>
              <h1 className='text-center text-black'>
                <span className='text-5xl'>`{props.id}`</span>
              </h1>
            </Header.Subheader>
          </Header.Content>
        </Header>
      </Layout>
    </>
  );
}

export default CompanyPage;
