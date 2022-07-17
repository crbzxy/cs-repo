import Image from 'next/image';
import React from 'react';
import { Container } from 'semantic-ui-react';
import Gif from '/public/me.gif';
function about() {
  return (
    <>
     
      <section className='place-content-center bg-slate-800 text-sky-300 about flex items-center  h-screen'>
      <Container className='flex flex-column'>
        <div className='col   '>
          <Image src={Gif} alt='about' width={200} height={200}></Image>
        </div>
        <div className='col '>
          <small>About</small>
          <div className=' '>
            <small>MX/CDMX</small>
            <br />
            <h1 className='text-4xl text-white'>Carlos Boyzo Oregón</h1>
            <br />
            <p className='titulo' style={{ fontSize: '100%' }}>
              Diseñador y desarrollador web UI-UX
            </p>
            <p>
              Hola, me enfoco en crear soluciones y experiencias digitales
              positivas, que conecten los objetivos comerciales de mis clientes
              en diferentes verticales de negocio.
            </p>
        
            <h3 className='text-2xl m-2 text-white'>Competencias técnicas</h3>
            <ul>
              <li>
                Diseño gráfico y comunicación visual para wireframes y
                prototipos
              </li>
              <li>Diseño de interfaces y experiencias de usuario</li>
              <li>Experiencia como como lider en equipos</li>
              <li>Desarrollador Web Front End (REACT)</li>
            </ul>
            <h3 className='text-2xl m-2 text-white'>Sígueme en mis redes sociales</h3>
            <div className='contenedor-botones'>
              <a href='https://github.com/crbzxy' className='btn-primario'>
                {' '}
                GITHUB{' '}
              </a>
              <a
                href='https://objkt.com/profile/tz1QFG3JhYPB6LUK76qBoB1E7TYYCABsmND9/created'
                className='btn-primario'>
                {' '}
                objkt.com{' '}
              </a>
              <a
                href='https://www.instagram.com/perrodimensional/'
                className='btn-primario'>
                {' '}
                Instagram{' '}
              </a>
              <a
                href='https://www.linkedin.com/in/carlosboyzo/'
                className='btn-primario'>
                {' '}
                LinkedIn{' '}
              </a>
              <br />
              <a
                href='https://firebasestorage.googleapis.com/v0/b/cbo-assets.appspot.com/o/CV-Carlos-Boyzo-Oregon-DesarrolladorWeb-UI-UX%20(1).pdf?alt=media&token=5efde9a5-30ed-4912-b7c7-711fb90c0218'
                download
                className='btn-descarga'>
                {' '}
                Descarga mi CV{' '}
              </a>
            </div>
          </div>
        </div>
      </Container>
      </section>
    </>
  );
}

export default about;
