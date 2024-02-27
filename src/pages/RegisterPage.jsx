import React from 'react'
import { Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function RegisterPage() {
    const [isChecked, setIsChecked] = useState(false);
    let navigate = useNavigate();

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    
    const [registerInput, setRegister] = useState({
        first_name: '',
        last_name: '',
        username: '',
        email: '',
        password: '',
    });

    const handleInput = async (e) => {
        e.persist();
        setRegister({...registerInput, [e.target.name]: e.target.value });
    }

    const registerSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            first_name: registerInput.first_name,
            last_name: registerInput.last_name,
            username: registerInput.username,
            email: registerInput.email,
            password: registerInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`/api/register`, data).then(res => {
                if(res.data.status === 200){
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    Swal.fire('Registrasi Berhasil', 'Anda telah berhasil mendaftar!', 'success');
                    navigate("/")
                }else{
                    setRegister({...registerInput, error_list: res.data.validation_errors});
                }
            });
        });

    }

    return (
        <div className="wrapper d-flex align-items-center justify-content-center w-100 min-vh-100">
            <Form nonvalidate="true" onSubmit={registerSubmit} className="register">
                <div className='form-header'>
                    <h2>CREATE AN ACCOUNT</h2>
                    <p>Enter your information below to proceed. If you already have an account, please log in instead.</p>
                </div>
                <div className="fields">
                    <div className="field">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="firstname"
                                type="text"
                                placeholder="firstname"
                                name='first_name'
                                value={registerInput.first_name}
                                onChange={handleInput}
                            />
                            <label htmlFor="firstname">First Name</label>
                        </Form.Floating>
                    </div>
                    <div className="field">
                        <Form.Floating className="mb-3">
                            <Form.Control
                                id="lastname"
                                type="text"
                                placeholder="lastname"
                                name='last_name'
                                value={registerInput.last_name}
                                onChange={handleInput}
                            />
                            <label htmlFor="lastname">Last Name</label>
                        </Form.Floating>
                    </div>
                </div>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="username"
                        type="text"
                        placeholder="xxxxx"
                        name='username'
                        value={registerInput.username}
                        onChange={handleInput}
                    />
                    <label htmlFor="username">Username</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        name='email'
                        value={registerInput.email}
                        onChange={handleInput}
                    />
                    <label htmlFor="email">Email address</label>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="password"
                        type="password"
                        placeholder="*****"
                        name='password'
                        value={registerInput.password}
                        onChange={handleInput}
                    />
                    <label htmlFor="password">Password</label>
                </Form.Floating>
                <Form.Group className="check-form mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        id="check-form"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="check-form">By creating an account you have agreed to ngipop.com's <Link>Terms & Conditions</Link> and <Link>Privacy Policy.</Link></label>
                </Form.Group>
                <button type='submit'
                    className="w-100"
                    disabled={!isChecked}
                >SIGN UP</button>
                <div className='switch-signup'>
                    <p>Already have an account? <Link to='/login'>Login</Link></p>
                </div>
            </Form>
        </div>
    )
}

export default RegisterPage