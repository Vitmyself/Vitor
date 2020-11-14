import React, { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { history } from '../../history'

import './Login.css'

const Login = () => {
    const handleSubmit = values => {
        axios.post('http:localhost:8080/v1/api/auth')
            .then(resp => {
                const { data } = resp
                if (data) {
                    localStorage.setItem('app-token', data)
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
                            <label htmlFor='email'>Email</label>
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
                            <label htmlFor='password'>Password</label>
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
                        <Link to="/register">
                            Registrar
                        </Link>
                    </Form>
                </Formik>
            </div>
        </>
    )
}

export default Login;
