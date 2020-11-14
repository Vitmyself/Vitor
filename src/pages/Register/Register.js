import React, { useState } from 'react';

import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import { Link } from 'react-router-dom';
import { history } from '../../history'

import './Register.css';

const Register = () => {
    const handleSubmit = values => {
        axios.post('http:localhost:8080/v1/api/user')
            .then(resp => {
                const { data } = resp
                if (data) {
                    history.push('/logins')
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
                <h1>Regitro</h1>
                <Formik
                    initialValues={{}}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    <Form className="Home">
                        <div className="Home-group">
                            <label htmlFor='name'>Nome</label>
                            <Field
                                type='email'
                                name='firstName'
                                className="Home-Field"
                            />
                            <ErrorMessage
                                component="span"
                                name='firstName'
                                className="Home-Error"
                            />
                        </div>
                        <div className="Home-group">
                            <label htmlFor='email'>Sobrenome</label>
                            <Field
                                type='email'
                                name='lastName'
                                className="Home-Field"
                            />
                            <ErrorMessage
                                component="span"
                                name='lastName'
                                className="Home-Error"
                            />
                        </div>
                        <div className="Home-group">
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
                        <button className="Login-Btn" type='submit'>Registrar</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}


export default Register;
