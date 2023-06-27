import firebase from 'firebase';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import 'firebase/auth'

import './App.css'

function Home1() {
    const navigate = useNavigate();
    function btnLogin(e) {
        e.preventDefault();
        let email = document.querySelector('[name=login]').value;
        let password = document.querySelector('[name=password]').value;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                if (userCredential.user.uid == 'fEvjtSySGhbLoE0fffM3JI55RyP2') {
                    navigate('/Home');
                } else if (userCredential.user.uid == '5kNPa1HDo5gLKwEIO1spibB9ftr2') {
                    navigate('/Cliente');
                }
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
                console.log(errorCode);
                if (errorCode == 'auth/wrong-password') {
                    alert('Senha Inválida')
                } else if (errorCode == 'auth/user-not-found') {
                    alert('Email Inválido!')
                }
            });
    }
    return (
        <form>
            <h3>Entrar no Sistema</h3>
            <div className="input-box">
                <label htmlFor="login">Usuario</label>
                <input id="login" type="text" name="login" placeholder="Digite o email" />
            </div>
            <div className="input-box">
                <label htmlFor="passord">Senha</label>
                <input id="password" type="password" name="password" placeholder="Digite a senha" />
            </div>
            <div>
                <input onClick={btnLogin} type='submit' value="Login" />
            </div>
        </form >
    )
}

export default Home1;