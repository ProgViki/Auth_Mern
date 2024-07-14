import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const [formData, setFormData] = useState({email: "", password: ""});
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
      };

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', { email, password})
        .then(res => {
            alert("Successfully registered")
        }).catch(err => console.log(err))
    }



    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100' >
            <div className='bg-white p-3 rounded-0 w-25'>
                <h2>Register</h2>
                <form
                 onSubmit={handleSubmit}
                 >
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email'  id='email'
                        placeholder='Enter Name'
                        className='form-control rounded-0'
                        autoComplete='off'
                        name='email'
                        onChange={handleChange}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password'  id='password'
                        placeholder='Enter Name'
                        className='form-control rounded-0'
                        autoComplete='off'
                        name='email'
                        onChange={handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Login
                    </button>
                </form>
                <p>Don't have an account</p>
                <Link to="/" className="btn btn-default w-100 bg-light border rounded-0">
                    Register
                </Link>
            </div>
        </div>
    )
}

export default Login
