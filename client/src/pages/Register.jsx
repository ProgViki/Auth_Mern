import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

const Register = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    return (
        <div className='d-flex justify-content-center align-items-center bg-secondary vh-100' >
            <div>
                <h2>Register</h2>
                <form>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Name</strong></label>
                        <input type='text'  id='name'
                        placeholder='Enter Name'
                        className='form-control rounded-0'
                        autoComplete='off'
                        name='email'
                        onChange={(e) = setName(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>
                        <label htmlFor='email'><strong>Name</strong></label>
                        <input type='text'  id='name'
                        placeholder='Enter Name'
                        className='form-control rounded-0'
                        autoComplete='off'
                        name='email'
                        onChange={(e) = setName(e.target.value)}
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Register
