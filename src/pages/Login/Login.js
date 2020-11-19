import React, { Component } from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { history } from '../../history'

import './Login.css'


const Login = () => {
    const handleSubmit = values => {
        let axiosConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };
        axios.post('http://127.0.0.1:5000/login', axiosConfig)
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('access_token', data)
                    history.push('/home')
                }
            })
    }
    const validations = yup.object().shape({
        email: yup.string().email('Invalid email format').required('Required'),
        password: yup.string().min(8).required('Required')
    })

    return (
        <>
            <div>
                <h1>Seja Bem Vindo</h1>
                <Formik
                    initialValues={{}}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    <Form className="Login">
                        <div className="Login-group">
                            <Field
                                type='email'
                                name='email'
                                className="Login-Field"
                            />
                            <ErrorMessage
                                component="span"
                                name='email'
                                className="Login-Error"
                            />
                        </div>
                        <div className='Login-control'>
                            <p>Senha:</p>
                            <Field
                                type='password'
                                name='password'
                                className="Login-Field"
                            />
                            <ErrorMessage
                                component="span"
                                name='password'
                                className="Login-Error"
                            />
                        </div>
                        <button className="Login-Btn" type='submit'>Entrar</button>
                        <Nav.Link href="/register">Registrar</Nav.Link>
                    </Form>
                </Formik>
            </div>
        </>
    )
}
export default Login;
