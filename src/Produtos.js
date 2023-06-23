import './Produtos.css'
import { db } from './firebase'
import React, { useState, useEffect } from 'react'

function Produtos() {
    const [arquivos, setArquivos] = useState([]);

    useEffect(() => {
        db.collection('produtos').onSnapshot((snapshot) => {
            setArquivos(snapshot.docs.map(l => {
                return l.data();
            }))
        })

    }, []);

    return (
        <body id='home-body'>
            <div class="form" id="home-container">
                <div class="form-header" id="home-header">
                    <div class="title">
                        <h1>Lista de Produtos</h1>
                    </div>
                </div>

                <div className='boxTable'>
                    <table width={'100%'}>
                        <thead>
                            <tr>
                                <th width={'30%'}>Nome</th>
                                <th width={'30%'}>Preço</th>
                                <th width={'30%'}>Quantidade</th>
                            </tr>
                        </thead>
                    </table>
                    {
                        arquivos.map(function (data) {
                            return (
                                <div>
                                    <table width={'100%'}>
                                        <td width={"30%"}>{data.produto}</td>
                                        <td width={"30%"}>{data.preço}</td>
                                        <td width={"30%"}>{data.quantidade}</td>
                                    </table>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </body >
    )
}

export default Produtos;