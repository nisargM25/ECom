import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const VRegister = () => {
    const [inputs, setInputs] = useState({
        v_name: "",
        v_contact: "",
        v_email: "",
        v_address: "",
        v_pass: "",
    })
    const navigate = useNavigate();
    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await axios.post("http://localhost:8800/api/auth/vregister", inputs)
            navigate("/vendor");
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
                        <input required onChange={handleChange} className="form-control" name="v_name" type="text" placeholder="Enter Name" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} className="form-control" name="v_email" type="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} className="form-control" name="v_contact" type="number" placeholder="Enter Mobile Number" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} className="form-control" name="v_pass" type="password" placeholder="Enter Password" />
                    </div>
                    <div className="mb-3">
                    <textarea required onChange={handleChange} className="form-control" col={5} name="v_address" placeholder="Enter Shop Address" />
                    </div>
                    
                    <button type='submit' className="btn btn-outline-dark" >Sign up</button>{" "}
                    <span>Already have a Account? <Link to="/vendor">Login</Link></span><br/>{" "}<br/>
                    <p>Sign in Customer?<Link to="/">Click Here</Link></p>
                </form>
            </div>
        </div>
    )
}

export default VRegister