import React from "react";
import { useNavigate } from "react-router-dom";

function Buy() {
  const navigate = useNavigate();
  const gotoCart = () => {
    navigate("/");
  };

  return (
    <div>
      <h1>Fill your details</h1>
      <form>
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
          onClick={() => gotoCart()}
          className="btn btn-primary"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Buy;
