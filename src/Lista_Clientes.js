import { db, storage } from './firebase'
import React, { useState, useEffect } from 'react'
import { BsFillArrowLeftSquareFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

function Lista_Clientes() {
    const [arquivos, setArquivos] = useState([]);

    useEffect(() => {
        db.collection('clientes').onSnapshot((snapshot) => {
            setArquivos(snapshot.docs.map(l => {
                return l.data();
            }))
        })

    }, []);

    const navigate = useNavigate();
    function btnReturn() {
        navigate('/Home');
    }

    return (
        <body id='home-body'>
            <form class="form" id="home-container">

                <div class="form-header" id="home-header">
                    <div class="title">
                        <h1>Lista de Clientes</h1>
                        <div className='return'>
                            <button onClick={btnReturn}><BsFillArrowLeftSquareFill /></button>
                        </div>
                    </div>
                </div>

                <div className='boxFiles'>
                    {
                        arquivos.map(function (data) {
                            return (
                                <div className='boxFileSingle'>

                                    <div>
                                        <label>Nome do Cliente - </label>
                                        {data.nome} {data.sobrenome}
                                    </div>

                                    <div>
                                        <label>Email - </label>
                                        {data.email}
                                    </div>

                                    <div>
                                        <label>Numero - </label>
                                        {data.numero}
                                    </div>

                                    <div>
                                        <label>Endereço - </label>
                                        {data.endereco}
                                    </div>

                                    <div>
                                        <label>Documento - </label>
                                        {data.documento}
                                    </div>

                                </div>
                            )

                        })
                    }
                </div>
            </form>

        </body >
    )
}

export default Lista_Clientes;