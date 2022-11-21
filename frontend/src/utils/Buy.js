import React from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Buy() {
  const navigate = useNavigate();
  const gotoCart = () => {
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="d-flex flex-column">
        <Container>


          <h1>Fill your details</h1>
          <form onSubmit={() => gotoCart()}>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input
                type="name"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Address</label>
              <input
                type="Address"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter your Address"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">pincode</label>
              <input
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Enter your city pincode"
                required
              />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Mobile number</label>
              <input
                className="form-control"
                id="exampleInputPassword1"
                placeholder="enter your mobile number"
                required
              />
            </div>
            <br />
            <button
              type="submit"
              
              className="btn btn-primary"
            >
              Submit
            </button>
          </form>
        </Container>
      </div>
      <Footer />
    </div>
  );
}

export default Buy;
