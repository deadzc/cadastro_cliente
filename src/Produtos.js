import { db } from './firebase'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { BsFillArrowLeftSquareFill } from "react-icons/bs";

function Produtos() {
    const [arquivos, setArquivos] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        db.collection('produtos').onSnapshot((snapshot) => {
            setArquivos(snapshot.docs.map(l => {
                return l.data();
            }))
        })

    }, []);

    function btnReturn() {
        navigate('/Cliente');
    }

    return (
        <body id='home-body'>
            <form className="form">

                <div className="form-header" >
                    <div className="title">
                        <h1>Lista de Produtos</h1>
                        <div className='return'>
                            <button onClick={btnReturn}><BsFillArrowLeftSquareFill /></button>
                        </div>
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
                                        <td width={"30%"}>{"R$"} {data.preço}</td>
                                        <td width={"30%"}>{data.quantidade}</td>
                                    </table>
                                </div>
                            )
                        })
                    }
                </div>
            </form>

        </body >
    )
}

export default Produtos;