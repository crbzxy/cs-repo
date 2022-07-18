import axios from 'axios';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

//import { Layout } from 'components/Layout';
import Moment from 'moment';
function CompanyPage({ company }) {
  const router = useRouter();
  console.log(company);
  const handleDelete = async (id) => {
    try {
      await axios.delete('/api/companies/' + id);
      toast.success('Company deleted');
      router.push('/companies');
    } catch (error) {
      console.error(error.response.data.message);
    }
  };

  return (
    <>
      <div className='p-6 bg-white dark:bg-gray-800 text-white'>
        <p>Name: {company[0].name}</p>
        <p>Description: {company[0].description}</p>
        <p>Crated At: {Moment(company[0].creationDate).format('DD/MM/YYYY')}</p>
      </div>

      <div className='mt-7 flex justify-center'>
        <button
          className='bg-red-500 hover:bg-red-700 py-2 px-3 rounded'
          onClick={() => handleDelete(company[0].id)}>
          delete
        </button>
        <button
          className='bg-gray-500 hover:bg-gray-800 ml-2 py-2 px-5 rounded'
          onClick={() => router.push('/companies/edit/' + company[0].id)}>
          Edit
        </button>
      </div>
      <Toaster />
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { data: company } = await axios.get(
    'http://localhost:3000/api/companies/' + query.id
  );

  return {
    props: {
      company,
    },
  };
};

export default CompanyPage;
