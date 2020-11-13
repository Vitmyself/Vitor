import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import TextError from '../TextError'
import './Login.css'
import { Link } from 'react-router-dom';

const initialValues = {
    email: '',
    password: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    password: Yup.string().required('Required')
})

function UserLogin() {
    return (
        <div>
            <h1>Seja Bem Vindo</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className="form-control">
                        <label htmlFor='email'>Email</label>
                        <Field type='email' id='email' name='email'/>
                        <ErrorMessage name='email'>
                            {
                                (errorMsg) => <div className='error'>{errorMsg}</div>
                            }
                        </ErrorMessage>
                    </div>
                    <div className='form-control'>
                        <label htmlFor='password'>Password</label>
                        <Field type='password' id='email' name='password' />
                        <ErrorMessage name='password' component={TextError} />
                    </div>
                    <button type='submit'>Entrar</button>
                    <Link to='/register'>
                        <button>Registrar</button>
                    </Link>
                </Form>
            </Formik>
        </div>
    )
}

export default UserLogin;
