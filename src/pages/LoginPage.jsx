import React from 'react'
import { Form } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

function LoginPage() {
    let navigate = useNavigate();
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const [loginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });

    const handleInput = (e) => {
        e.persist();
        setLogin({ ...loginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();

        const data = {
            email: loginInput.email,
            password: loginInput.password,
        }

        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post(`api/login`, data).then(res => {
                if (res.data.status === 200) {
                    localStorage.setItem('auth_token', res.data.token);
                    localStorage.setItem('auth_name', res.data.username);
                    Swal.fire('Success', res.data.message, 'success');
                    navigate("/")
                } else if (res.data.status === 401) {
                    Swal.fire('Warning', res.data.message, 'warning');
                } else {
                    setLogin({ ...loginInput, error_list: res.data.validation_errors });
                }
            });
        });

    }

    return (
        <div className="wrapper d-flex align-items-center justify-content-center w-100 min-vh-100">
            <Form nonvalidate="true" onSubmit={loginSubmit} className="login">
                <div className='form-header'>
                    <h2>LOGIN</h2>
                    <p>If you have an account with us, please log in.</p>
                </div>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="email"
                        type="email"
                        placeholder="name@example.com"
                        name='email'
                        value={loginInput.email}
                        onChange={handleInput}
                    />
                    <label htmlFor="email">Email address</label>
                    <span>{loginInput.error_list.email}</span>
                </Form.Floating>
                <Form.Floating className="mb-3">
                    <Form.Control
                        id="password"
                        type="password"
                        placeholder="*****"
                        name='password'
                        value={loginInput.password}
                        onChange={handleInput}
                    />
                    <label htmlFor="password">Password</label>
                    <span>{loginInput.error_list.password}</span>
                </Form.Floating>
                <Form.Group className="check-form mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        type="checkbox"
                        id="check-form"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor="check-form">By logging in you have agreed to ngipop.com's <Link>Terms & Conditions</Link> and <Link>Privacy Policy.</Link></label>
                </Form.Group>
                <button type='submit'
                    className="w-100"
                    disabled={!isChecked}
                >SIGN IN</button>
                <div className='switch-signup'>
                    <p>Don't have an account? <Link to='/register'>Create an account</Link>
                        <br /><Link to='/forgotpw'>Forgot your password?</Link></p>
                </div>
            </Form>
        </div>
    )
}

export default LoginPage