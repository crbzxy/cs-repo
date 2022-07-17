import React from 'react';

import { Container, Button, Checkbox, Form, TextArea } from 'semantic-ui-react';
function HeaderHome() {
  return (
    <>
      <Container text className='py-8'>
        <Form className='max-w-md '>
          <Form.Field>
            <label>Nombre de la empresa</label>
            <input placeholder='Escriba el nombre de su empresa' />
          </Form.Field>
          <Form.Field>
            <label>
              Fecha de Constitución <span className='text-red-500'>*</span>
            </label>
            <input placeholder='fecha' type='date' />
          </Form.Field>

          <Form.Field>
            <label>
              Tipo de empresa <span className='text-red-500'>*</span>
            </label>
            <select name='companiType' id='companyType'>
              <option value='1'>Distribuidor</option>
              <option value='2'>Mayorista</option>
              <option value='3'>Usuario Final</option>
              <option value='4'>Privada</option>
            </select>
          </Form.Field>
          <Form.Field>
            <label>
              Comentarios <span className='text-red-500'>*</span>
            </label>
            <TextArea placeholder='Comentarios' />

          </Form.Field>

          {/* <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field> */}
          <Button type='submit'>Registrar</Button>
        </Form>
      </Container>
    </>
  );
}

export default HeaderHome;
