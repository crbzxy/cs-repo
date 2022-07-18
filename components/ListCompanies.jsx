import React from 'react';
import Moment from 'moment';
import Link from 'next/link';
function ListCompanies({ companies }) {
  return (
    console.log(companies),
    (
      <>
        {companies.length === 0 && (
          <section className='flex py-8 flex-col items-center justify-center h-full'>
            <h1 className='text-3xl text-center'>
              No hay compañias registradas
            </h1>
          </section>
        )}
        <section className=' listCompanies grid grid-cols-3 gap-4'>
          {companies
          .sort()
            .map((company) => (
            <Link href={`/companies/${company.id}`} key={company.id}>
              <a className='bg-gray-200 hover:bg-gray-300 shadow-md p-2 rounded-lg'>
                <div className='company p-2' key={company.id}>
                  <h2 className='text-2xl'>Empresa: {company.name}</h2>

                  <p> Comentarios: {company.description}</p>
                  <p>Tipo:{company.companyType}</p>
                  <p>
                    Fecha de Constitución:{' '}
                    {Moment(company.creationDate).format('DD/MM/YYYY')}
                  </p>
                </div>
              </a>
            </Link>
          ))}
        </section>
      </>
    )
  );
}

export default ListCompanies;
