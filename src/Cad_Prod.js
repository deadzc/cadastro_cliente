import { db, storage } from './firebase'
import firebase from 'firebase';
import React, { useState, useEffect } from 'react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import 'firebase/auth';

function Cad_Prod() {

    const [user, setUser] = useState(() => {
        const user = firebase.auth().currentUser;

        return user;
    });

    console.log(user)
    const navigate = useNavigate();

    function fazerUploadArquivo(e) {
        e.preventDefault();
        let item = document.querySelector('[name=product]').value;
        let price = document.querySelector('[name=price]').value;
        let amount = document.querySelector('[name=amount]').value;

        db.collection('produtos').add({
            produto: item,
            preço: price,
            quantidade: amount,
        })
        alert('Produto cadastrado!')

    }

    function btnReturn() {
        navigate('/Cliente');
    }

    return (
        <body>
            <div class="form">
                <form action="myForm">
                    <div class="form-header">
                        <div class="title">
                            <h1>Cadastro de Produtos</h1>
                            <div className='return'>
                                <button onClick={btnReturn}><BsFillArrowLeftSquareFill /></button>
                            </div>
                        </div>
                    </div>

                    <div class="input-group" >
                        <div class="input-box">
                            <label for="firstname">Nome do produto</label>
                            <input id="product" type="text" name="product" placeholder="Digite o nome" />
                        </div>

                        <div class="input-box">
                            <label for="price">Preço</label>
                            <input id="price" type="text" name="price" placeholder="Digite o preço" />
                        </div>

                        <div class="input-box">
                            <label for="number" >Quantidade</label>
                            <input id="number" type="text" name="amount" placeholder="Digite a quantidade" />
                        </div>



                    </div>

                    <div class="continue-button">
                        <button onClick={(e) => fazerUploadArquivo(e)}>Enviar</button>
                    </div>
                </form>
            </div>

        </body>
    )
}

export default Cad_Prod;