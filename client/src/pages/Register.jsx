import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import axios from "axios";



const Register = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")    
    // const [confirmPassword, setConfirmPassword] = useState('')
    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     axios.post('http://localhost:3001/register', {name, email, password})
    //     .then(res => {
    //         alert("Successfully registered")
    //     }).catch(err => console.log(err))
    // }



    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100 vw-100' >
            <div className='bg-white p-3 rounded-0 w-25'>
                <h2>Register</h2>
                <form
                //  onSubmit={handleSubmit}
                 >
                    <div className='mb-3'>
                        <label htmlFor='name'><strong>Name</strong></label>
                        <input type='text'  id='name'
                        placeholder='Enter Name'
                        className='form-control rounded-0'
                        autoComplete='off'
                        name='email'
                        // onChange={(e) = setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Email</strong></label>
                        <input type='email'  id=''
                        placeholder='Enter Name'
                        className='form-control rounded-0'
                        autoComplete='off'
                        name='email'
                        // onChange={(e) = setEmail(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='password'><strong>Password</strong></label>
                        <input type='password'  id=''
                        placeholder='Enter Name'
                        className='form-control rounded-0'
                        autoComplete='off'
                        name='email'
                        // onChange={(e) = setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                    </button>
                </form>
                <p>Already Have an Account</p>
                <button type="submit" className="btn btn-default w-100 bg-light border rounded-0">
                    Login
                </button>
            </div>
        </div>
    )
}

export default Register
