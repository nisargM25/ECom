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
import { AuthClientContext } from "./context/ClientauthContext";
import Buy from "./utils/Buy";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { currentClient } = useContext(AuthClientContext);


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
            <Route path="/product/:p_id" element={currentClient ? <ProductScreen /> : <CLogin />} />
            <Route path="/Home" element={currentClient ? <HomeScreen /> : <CLogin />} />
            <Route path="/" element={!currentClient ? <CLogin /> : <HomeScreen />} />
            <Route path="/cregister" element={!currentClient ? <CRegister /> : <HomeScreen />} />
            <Route path="/mobile" element={currentClient ? <MobileScreen /> : <CLogin />} />
            <Route path="/laptop" element={currentClient ? <LaptopScreen /> : <CLogin />} />
            <Route path="/accessories" element={currentClient ? <AccessoriesScreen /> : <CLogin />} />
            <Route path="/mycart" element={currentClient ? <Cartscreen /> : <CLogin />} />
            <Route path="/buy" element={currentClient ? <Buy /> : <CLogin />} />
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
