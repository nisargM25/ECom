import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import Products from "./pages/Products";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css";
import VRegister from "./pages/VRegister";
import VLogin from "./pages/VLogin";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";

function App() {
  const { currentUser, vlogout } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <div className="d-flex flex-column site-container">
          <header className="App-header">
            <Navbar bg="dark" variant="dark" >

              <Container>
               <LinkContainer to={currentUser ? `/Home` : `/`}>
                  <Navbar.Brand>E-mart</Navbar.Brand>
                </LinkContainer>

                {/* {currentUser ? <LinkContainer to="/Home">
                  <Navbar.Brand>E-mart</Navbar.Brand>
                </LinkContainer> : <LinkContainer to="/">
                  <Navbar.Brand>E-mart</Navbar.Brand>
                </LinkContainer>} */}
                {currentUser && <LinkContainer to="/add">
                  <Navbar.Brand>Add Product</Navbar.Brand>
                </LinkContainer>}
              </Container>
              <div className="UserName">
                <span></span>
                {currentUser && <span className="logoutUser" onClick={vlogout}>Logout {currentUser?.v_name}</span>}
              </div>
            </Navbar>
          </header>
          <main>
            <Routes>
              <Route path="/Home" element={currentUser?<Products />:<VLogin />} />
              <Route path="/VRegister" element={!currentUser?<VRegister />:<Products/>} />
              <Route path="/" element={!currentUser?<VLogin />:<Products/>} />
              <Route path="/add" element={currentUser?<Add />:<VLogin />} />
              <Route path="/update/:id" element={currentUser?<Update />:<VLogin />} />
            </Routes>
          </main>
          <footer>
            <div className="text-center">All rights reserved</div>
          </footer>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
