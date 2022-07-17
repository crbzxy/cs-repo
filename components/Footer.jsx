import React from 'react'
import { Container } from 'semantic-ui-react'

function Footer() {
  return (
    <footer className='py-6 mt-4 bg-slate-900 text-white'>
      <Container textAlign='center'>
        <p>Carlo Boyzo Oregon &copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  )
}

export default Footer