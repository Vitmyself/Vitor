import React, { useState, Component } from 'react';

import { Formik, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import { Link } from 'react-router-dom';
import { history } from '../../history'

import './Register.css';

export default class Register extends Component {

    handleSubmit = props => {

        var data = JSON.stringify(props)
        let config = {
            method: 'post',
            url: 'http://127.0.0.1:5000/cadastro',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        // if (data) {
        //     history.push('/login')
        // }

        axios(config)
            .then((response) => {
                console.log(JSON.stringify(response.data));
            })
            .catch((error) => {
                console.log(error);
            });
    }

    validations = yup.object().shape({
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        email: yup.string().email('Invalid email format').required('Required'),
        password: yup.string().min(8).required('Required')
    })


    render() {
        return (
            <div>
                <h1>Registro</h1>
                <Formik
                    initialValues={{
                        usuario_nome: '',
                        usuario_sobrenome: '',
                        usuario_login: '',
                        usuario_senha: ''
                    }}
                    validationSchema={validations}
                    onSubmit={(values, action) => {
                        alert(JSON.stringify(values, null, 2));
                        action.setSubmitting(false);
                    }, 1000}
                >
                    {props => (
                        <form className="Register" onSubmit={props.handleSubmit}>
                            <div className="Register-group">
                                <Field
                                    type='name'
                                    name='usuario_nome'
                                    className="Register-Field"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.usuario_nome}
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
                                    name='usuario_sobrenome'
                                    className="Register-Field"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.usuario_sobrenome}
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
                                    name='usuario_login'
                                    className="Register-Field"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.usuario_login}
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
                                    name='usuario_senha'
                                    className="Register-Field"
                                    onChange={props.handleChange}
                                    onBlur={props.handleBlur}
                                    value={props.values.usuario_senha}
                                />
                                <ErrorMessage
                                    component="span"
                                    name='password'
                                    className="Register-Error"
                                />
                            </div>
                            <button
                                type="button"
                                className="Register-Btn"
                                onClick={async () => {

                                }}
                            >Registrar
                             </button>
                        </form>
                    )}
                </Formik>
            </div >
        );
    }
}
