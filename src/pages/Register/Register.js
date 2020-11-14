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
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        email: yup.string().email('Invalid email format').required('Required'),
        password: yup.string().min(8).required('Required')
    })

    return (
        <>
            <div>
                <h1>Registro</h1>
                <Formik
                    initialValues={{}}
                    onSubmit={handleSubmit}
                    validationSchema={validations}
                >
                    <Form className="Register">
                        <div className="Register-group">
                            <Field
                                type='name'
                                name='firstName'
                                className="Register-Field"
                            />
                            <ErrorMessage
                                component="span"
                                name='firstName'
                                className="Register-Error"
                            />
                        </div>
                        <div className="Register-group">
                            <Field
                                type='text'
                                name='lastName'
                                className="Register-Field"
                            />
                            <ErrorMessage
                                component="span"
                                name='lastName'
                                className="Register-Error"
                            />
                        </div>
                        <div className="Register-group">
                            <Field
                                type='email'
                                name='email'
                                className="Register-Field"
                            />
                             <ErrorMessage
                                component="span"
                                name='email'
                                className="Register-Error"
                        />
                        </div>
                        <div className='Register-control'>
                            <Field
                                type='password'
                                name='password'
                                className="Register-Field"
                            />
                            <ErrorMessage
                                component="span"
                                name='password'
                                className="Register-Error"
                            />
                        </div>
                        <button className="Register-Btn" type='submit'>Registrar</button>
                    </Form>
                </Formik>
            </div>
        </>
    )
}


export default Register;
