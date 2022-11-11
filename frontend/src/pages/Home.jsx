import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Home = () => {
  return (
    <div>
        <header className="App-header">
          <Navbar bg="dark" variant="dark" >
            <Container>
              <LinkContainer to="/">
                <Navbar.Brand>E-mart</Navbar.Brand>
              </LinkContainer>
              <LinkContainer to="/add">
                <Navbar.Brand>Add Product</Navbar.Brand>
              </LinkContainer>
              
            </Container>
          </Navbar>
        </header>
        
    </div>
  )
}

export default Home