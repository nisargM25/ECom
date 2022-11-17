import { BrowserRouter, Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css";
import VRegister from "./pages/VRegister";
import VLogin from "./pages/VLogin";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Home from "./pages/Home";
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import MobileScreen from "./pages/Mobilescreen";
import LaptopScreen from "./pages/LaptopScreen";
import AccessoriesScreen from "./pages/AccessoriesScreen";
import "./index.css"
import Cartscreen from "./pages/Cartscreen";
import CLogin from "./pages/CLogin";
import CRegister from "./pages/CRegister";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          <Routes>
            <Route path="/vendor/Home" element={currentUser ? <Home /> : <VLogin />} />
            <Route path="/vendor/VRegister" element={!currentUser ? <VRegister /> : <Home />} />
            <Route path="/vendor/" element={!currentUser ? <VLogin /> : <Home />} />
            <Route path="/vendor/add" element={currentUser ? <Add /> : <VLogin />} />
            <Route path="/vendor/update/:id" element={currentUser ? <Update /> : <VLogin />} />

            {/* Aniket  */}
            <Route path="/product/:p_id" element={currentUser ? <ProductScreen /> : <CLogin />} />
            <Route path="/Home" element={currentUser ? <HomeScreen /> : <CLogin />} />
            <Route path="/" element={!currentUser ? <CLogin />:<HomeScreen />  } />
            <Route path="/cregister" element={!currentUser ? <CRegister /> : <HomeScreen />} />
            <Route path="/mobile" element={currentUser ? <MobileScreen /> : <CLogin />} />
            <Route path="/laptop" element={currentUser ? <LaptopScreen /> : <CLogin />} />
            <Route path="/accessories" element={currentUser ? <AccessoriesScreen /> : <CLogin />} />
            <Route path="/mycart" element={currentUser ? <Cartscreen /> : <CLogin />}
            />
          </Routes>
          {/* <div className="d-flex flex-column">
          <Container>
            
          </Container>
      </div> */}
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
