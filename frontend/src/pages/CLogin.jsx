import React, { useState } from 'react'
import { useContext } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { AuthClientContext } from '../context/ClientauthContext'


const CLogin = () => {
    const [inputs, setInputs] = useState({      
        c_email: "",
        c_password: "",
    })
    const navigate=useNavigate();
    const {clogin}=useContext(AuthClientContext);
    const handleChange = e => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            await clogin(inputs)
            navigate("/Home");
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
                        <input required onChange={handleChange} className="form-control" name="c_email" type="email" placeholder="Enter Email" />
                    </div>
                    <div className="mb-3">
                        <input required onChange={handleChange} className="form-control" name="c_password" type="password" placeholder="Enter Password" />
                    </div>
                    <button type='submit' className="btn btn-outline-dark" >Sign in</button>{'  '}
                <span>Don't have a Account? <Link to="/CRegister">Register</Link></span>
                </form>
            </div>
        </div>
    )
}

export default CLogin