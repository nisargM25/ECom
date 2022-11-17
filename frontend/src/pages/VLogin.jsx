import React, { useState } from 'react'
import { useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../context/authContext'


const VLogin = () => {
    const [inputs, setInputs] = useState({      
        v_email: "",
        v_pass: "",
    })
    const navigate=useNavigate();
    const {vlogin}=useContext(AuthContext);
    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await vlogin(inputs)
            navigate("/vendor/Home");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='auth'>
            <div className='form'>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <div className="mb-3">
                        <input required onChange={handleChange} className="form-control" name="v_email" type="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} className="form-control" name="v_pass" type="password" placeholder="Enter Password" />
                    </div>
                    <button type='submit' className="btn btn-outline-dark" >Sign in</button>{'  '}
                <span>Don't have a Account? <Link to="/vendor/VRegister">Register</Link></span>
                </form>
            </div>
        </div>
    )
}

export default VLogin