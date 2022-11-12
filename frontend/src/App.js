import { BrowserRouter, Route, Routes } from "react-router-dom";
import Products from "./pages/Products";
import Add from "./pages/Add";
import Update from "./pages/Update";
import "./style.css";
import VRegister from "./pages/VRegister";
import VLogin from "./pages/VLogin";
import { useContext } from "react";
import { AuthContext } from "./context/authContext";
import Home from "./pages/Home";

function App() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="App">
      <BrowserRouter>
          <div>
            <Routes>
              <Route path="/Home" element={currentUser?<Home />:<VLogin />} />
              <Route path="/VRegister" element={!currentUser?<VRegister />:<Products/>} />
              <Route path="/" element={!currentUser?<VLogin />:<Products/>} />
              <Route path="/add" element={currentUser?<Add />:<VLogin />} />
              <Route path="/update/:id" element={currentUser?<Update />:<VLogin />} />
            </Routes>
          </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
