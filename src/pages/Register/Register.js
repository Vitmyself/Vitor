import React, { useState } from 'react';

import { Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'

import { history } from '../../history'

import './Register.css';

function initialState() {
    return {
        usuario_nome: '',
        usuario_sobrenome: '',
        usuario_login: '',
        usuario_senha: '',
    }
}

const Register = () => {
    const [values, setValues] = useState(initialState)

    function onChange(event) {
        const { value, name } = event.target;

        setValues({
            ...values,
            [name]: value
        });
    }

    async function handleSubmit(event) {
        event.preventDefault()
        setValues(initialState)
        console.log(values)
        var data = JSON.stringify(initialState)

        let config = {
            url: 'http://127.0.0.1:5000/cadastro',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };


        let res = await axios.post(config)
        .then(res => {
            if(res.data) {
                this.setState(data)
                console.log(JSON.stringify(res.data));
                history.push('/login')
            }
        }).catch((error) => {
            console.log(error)
        });
}
    


    const validations = yup.object().shape({
        firstName: yup.string().required('Required'),
        lastName: yup.string().required('Required'),
        email: yup.string().email('Invalid email format').required('Required'),
        password: yup.string().min(8).required('Required')
})

return (
    <div>
        <h1>Registro</h1>
        <Formik
            initialValues={{}}
            validationSchema={validations}
            // onSubmit={handleSubmit}
        >
            {props => (
                <form className="Register" onSubmit={props.handleSubmit}>
                    <div className="Register-group">
                        <Field
                            type='name'
                            name='usuario_nome'
                            className="Register-Field"
                            onChange={onChange}
                            value={values.usuario_nome}
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
                            onChange={onChange}
                            value={values.usuario_sobrenome}
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
                            onChange={onChange}
                            value={values.usuario_login}
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
                            onChange={onChange}
                            value={values.usuario_senha}
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
                        onClick={handleSubmit}
                    >Registrar
                             </button>
                </form>
            )}
        </Formik>
    </div >
);
}

export default Register