import React from 'react'

import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
// import { history } from '../../history'

import './Register.css'

const PagesRegister = () => {
    const handleSubmit = values => {
        axios.post('http://localhost:8080/v1/api/user', values)
            .then(resp => {
                const { data } = resp
                if (data) {
                    // history.push('/login')
                }
            })
    }

    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return (
        <>
            <h1>Cadastro de Clientes</h1>
            
           
            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className="Login">
                    <div className="Login-Group">
                    <label htmlFor="name">Nome: </label>
                        <Field
                            name="Nome: "
                            className="Login-Field"
                        
                        />
                        
                        <ErrorMessage
                            component="span"
                            name="firstName"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                    <label htmlFor="Sobrenome">Sobrenome:  </label>
                        
                            <Field
                                
                                name="Sobrenome: "
                                className="Login-Field-Sobrenome"
                                
                           
                            
                        />
                        
                   
                        
                        <ErrorMessage
                            component="span"
                            name="lastName"
                            className="Login-Error"
                            
                        />
                    </div>
                    <div className="Login-Group">
                    <label htmlFor="name">*E-mail:  </label>
                        <Field
                            name="email: "
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="E-mail"
                            className="Login-Error"
                        />
                    </div>
                    <div className="Login-Group">
                    <label htmlFor="Senha">*Senha:  </label>
                        <Field
                            name="Senha:"
                            className="Login-Field"
                        />
                        <ErrorMessage
                            component="span"
                            name="password"
                            className="Login-Error"
                        />
                    </div>
                    {/* <UIButton>Cadastrar</UIButton> */}
                    <button className="Button-Register" type="submit">REGISTRAR</button>
                </Form>
            </Formik>
        </>
    )
}
export default PagesRegister;