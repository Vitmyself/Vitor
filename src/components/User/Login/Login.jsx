/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import {FiLogIn} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import logoImage from "../../images/accounticoLogo.jpg"
import './Login.css';
import calculadora from '../../images/calculadora.jpg'

export default function UserLogin() {

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImage} alt='Accountico'/>

        <form autoComplete="nope">
          <h1>Faça seu login</h1>

          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Senha' />


          <Link to='/Home'>
            <button className='button' type='submit'>
              Entrar
            </button>
          </Link>
          <Link className='back-link' to='/register'>
            <FiLogIn size={16} color='#6376BD'/>
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img className='calculadora' src={calculadora} alt="Calculadora"/>
    </div>
  );
}

