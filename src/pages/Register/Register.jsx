import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import TextError from '../TextError';
import './Register.css';

const initialValues = {
    name: '',
    lastName: '',
    email: '',
    password: ''
}

const onSubmit = values => {
    console.log('Form data', values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
    password: Yup.string().required('Required')
})

function UserRegister() {
    return (
        <div>
            <h1>Cadastro de Usuário</h1>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <div className='form-control'>
                        <label htmlFor='name'>Nome</label>
                        <Field type='text' id='name' name='name' />
                        <ErrorMessage name='name' component={TextError} />
                    </div>
                    <div className='form-control'>
                        <label htmlFor='lastName'>Sobrenome</label>
                        <Field type='text' id='lastName' name='name' />
                        <ErrorMessage name='lastName' component={TextError} />
                    </div>
                    <div className="form-control">
                        <label htmlFor='email'>Email</label>
                        <Field type='email' id='email' name='email' />
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
                    <button type='submit'>Registrar</button>
                </Form>
            </Formik>
        </div>
    )
}

export default UserRegister;
