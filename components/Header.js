import axios from 'axios';

import { Container, Button, Form, TextArea } from 'semantic-ui-react';
function HeaderHome() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/companies', {
      name: 'Casas Geo',
      creationDate: '2022-07-02',
      companyType: 'Distribuidor',
      description:
        'Casas Geo es una empresa que se dedica a la distribución de productos geolocalizados, como casas, apartamentos, terrenos, etc.',
    });
    console.log(res);
  };

  return (
    <>
      <Container text className='py-8 '>
        <Form onSubmit={handleSubmit} className='max-w-md '>
          <Form.Field>
            <label>
              Nombre de la empresa <span className='text-red-500'>*</span>
            </label>
            <input placeholder='Escriba el nombre de su empresa' name='name' />
          </Form.Field>
          <Form.Field>
            <label>
              Fecha de Constitución <span className='text-red-500'>*</span>
            </label>
            <input
              
              placeholder='fecha'
              type='date'
              name='creationDate'
            />
          </Form.Field>

          <Form.Field>
            <label>
              Tipo de empresa <span className='text-red-500'>*</span>
            </label>
            <select  name='companiType' id='companyType'>
              <option defaultValue={true}>Seleccione una opción</option>
              <option value='Distribuidor'>Distribuidor</option>
              <option value='Mayorista'>Mayorista</option>
              <option value='FinalUser'>Usuario Final</option>
              <option value='Private'>Privada</option>
            </select>
          </Form.Field>
          <Form.Field>
            <label>
              Comentarios <span className='text-red-500'>*</span>
            </label>
            <TextArea
              name='description'
              id='description'
              placeholder='Descripción de la empresa'
            />
          </Form.Field>

          {/* <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field> */}
          <Button className='py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'>
            Guardar
          </Button>
        </Form>
        <small>
          <span className='text-cyan-800'>
            {' '}
            Datos requeridos <span className='text-red-500'>*</span>
          </span>
        </small>
      </Container>
    </>
  );
}

export default HeaderHome;
