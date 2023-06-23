import './Cad_Cliente.css'
import { db, storage } from './firebase'
import React, { useState, useEffect } from 'react'

function Cad_Cliente() {

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

    return (
        <body>
            <div class="form">
                <form action="#">
                    <div class="form-header">
                        <div class="title">
                            <h1>Cadastro de Usuários</h1>
                        </div>
                    </div>

                    <div class="input-group">
                        <div class="input-box">
                            <label for="firstname">Primeiro Nome</label>
                            <input id="firstname" type="text" name="firstname" placeholder="Digite o primeiro nome" />
                        </div>

                        <div class="input-box">
                            <label for="lastname">Sobrenome</label>
                            <input id="lastname" type="text" name="lastname" placeholder="Digite o sobrenome" />
                        </div>

                        <div class="input-box">
                            <label for="email">E-mail</label>
                            <input id="email" type="text" name="email" placeholder="Digite o e-mail" />
                        </div>

                        <div class="input-box">
                            <label for="number">Celular</label>
                            <input id="text" type="text" name="number" placeholder="(xx) xxxx-xxxx" />
                        </div>

                        <div class="input-box">
                            <label for="addres">Endereço</label>
                            <input id="addres" type="text" name="addres" placeholder="Digite o endereço" />
                        </div>

                        <div class="input-box">
                            <label for="document">Cnpj</label>
                            <input id="document" type="text" name="document" placeholder="Digite Cnpj" />
                        </div>

                    </div>

                    <div class="continue-button">
                        <button onClick={(e) => fazerUploadArquivo(e)}><a href="#">Enviar</a> </button>
                    </div>
                </form>
            </div>
        </body >
    )
}

export default Cad_Cliente;