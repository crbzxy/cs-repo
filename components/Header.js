import React from 'react';

import { Container, Button, Checkbox, Form } from 'semantic-ui-react';
function HeaderHome() {
  return (
    <>
      <Container text className='py-8'>
        <Form className='max-w-lg'>
          <Form.Field>
            <label>Nombre de la empresa</label>
            <input placeholder='Escriba el nombre de su empresa' />
          </Form.Field>
          <Form.Field>
            <label>Fecha de constirución <span className='text-red-500'>*</span></label>
            <input placeholder='Last Name' />
          </Form.Field>
          <Form.Field>
            <Checkbox label='I agree to the Terms and Conditions' />
          </Form.Field>
          <Button type='submit'>Submit</Button>
        </Form>
      </Container>
    </>
  );
}

export default HeaderHome;
