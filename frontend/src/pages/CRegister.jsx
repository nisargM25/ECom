import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const CRegister = () => {
    const [inputs, setInputs] = useState({
        c_name: "",
        c_contact: "",
        c_email: "",
        c_address: "",
        c_password: "",
    })
    const navigate = useNavigate();
    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/api/auth/cregister", inputs)
            navigate("/");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='auth'>
            
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h1>Register</h1>
                    <div className="mb-3">
                        <input required onChange={handleChange} className="form-control" name="c_name" type="text" placeholder="Enter Name" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} className="form-control" name="c_email" type="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} className="form-control" name="c_contact" type="number" placeholder="Enter Mobile Number" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} className="form-control" name="c_password" type="password" placeholder="Enter Password" />
                    </div>
                    <div className="mb-3">
                    <textarea required onChange={handleChange} className="form-control" col={5} name="c_address" placeholder="Enter Address" />
                    </div>
                    
                    <button type='submit' className="btn btn-outline-dark" >Sign up</button>{" "}
                    <span>Already have a Account? <Link to="/">Login</Link></span><br/>{" "}<br/>
                    <p>Become A Vendor at E-Mart <Link to="/vendor/VRegister">Click Here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default CRegister