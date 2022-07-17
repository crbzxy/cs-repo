import React from 'react'
import { Container } from 'semantic-ui-react'

function Footer() {
  return (
    <footer>
      <Container textAlign='center'>
        <p>Carlo Boyzo Oregon &copy; {new Date().getFullYear()}</p>
      </Container>
    </footer>
  )
}

export default Footer