/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/alt-text */

  
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import UIButton from 'components/UI/Button/Button';
import AccounticoLogo from "../../images/accounticoLogo.jpg"
import calculadora from "../../images/calculadora.jpg"
import './Login.css';

const UserLogin = () => {
  return (
    <div className="user-login">
      <img className="logo" src={AccounticoLogo} />
      <div className="imagem"> 
      <img className="calculadora" src={calculadora} />
      </div>

      <form autoComplete="nope">
        <div className="user-login__form-control">
        
          <label htmlFor="email">Login:</label>
         
          <input id="email" type="text" name="email" autoComplete="off" />
        </div>
        <div className="user-login__form-control">
          <label htmlFor="password">Senha:</label>
          <input id="password" type="password" name="password" />
        </div>
        <UIButton
          type="submit"
          theme="contained-green"
          className="user-login__submit-button"
          rounded
        >
          Entrar
        </UIButton>
      </form>
    </div>
  );
}
export default UserLogin;
