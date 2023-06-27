import { db, storage } from './firebase'
import React, { useState, useEffect } from 'react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Cad_Cliente() {

    const navigate = useNavigate();

    function fazerUploadArquivo(e) {
        e.preventDefault();
        let firstname = document.querySelector('[name=firstname]').value;
        let lastname = document.querySelector('[name=lastname]').value;
        let email = document.querySelector('[name=email]').value;
        let number = document.querySelector('[name=number]').value;
        let addres = document.querySelector('[name=addres]').value;
        let doc = document.querySelector('[name=document]').value;

        db.collection('clientes').add({
            nome: firstname,
            sobrenome: lastname,
            email: email,
            numero: number,
            endereco: addres,
            documento: doc,
        })
        alert('Cliente Cadastrado!')

    }

    function btnReturn() {
        navigate('/Home');
    }

    return (
        <body>
            <div className="form">
                <form action="#">

                    <div className="form-header">
                        <div className="title">
                            <h1>Cadastro de Usuários</h1>
                            <div className='return'>
                                <button onClick={btnReturn}><BsFillArrowLeftSquareFill /></button>
                            </div>
                        </div>
                    </div>

                    <div className="input-group">
                        <div className="input-box">
                            <label for="firstname">Nome</label>
                            <input id="firstname" type="text" name="firstname" placeholder="Digite o nome" />
                        </div>

                        <div className="input-box">
                            <label for="lastname">Sobrenome</label>
                            <input id="lastname" type="text" name="lastname" placeholder="Digite o sobrenome" />
                        </div>

                        <div className="input-box">
                            <label for="email">E-mail</label>
                            <input id="email" type="text" name="email" placeholder="Digite o e-mail" />
                        </div>

                        <div className="input-box">
                            <label for="number">Celular</label>
                            <input id="text" type="text" name="number" placeholder="(xx) xxxx-xxxx" />
                        </div>

                        <div className="input-box">
                            <label for="addres">Endereço</label>
                            <input id="addres" type="text" name="addres" placeholder="Digite o endereço" />
                        </div>

                        <div className="input-box">
                            <label for="document">Cnpj</label>
                            <input id="document" type="text" name="document" placeholder="Digite Cnpj" />
                        </div>

                    </div>

                    <div className="continue-button">
                        <button onClick={(e) => fazerUploadArquivo(e)}>Enviar</button>
                    </div>
                </form>
            </div>
        </body >
    )
}

export default Cad_Cliente;