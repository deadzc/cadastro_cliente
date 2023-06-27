import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './App.css';

function Home(props) {

    return (
        <body id='home-body'>
            <form className="form">

                <div class="form-header">
                    <div class="title">
                        <h1>Menu Adm</h1>
                    </div>
                </div>

                <div className="buttons" id='home-buttons'>
                    <div className="continue-button">
                        <Link to="/Lista_Clientes "><button>Lista de clientes</button></Link>

                    </div>

                    <div className="continue-button" >
                        <Link to="/Cad_Cliente"><button>Cadastrar Clientes</button></Link>
                    </div>

                    <div className="continue-button">
                        <Link to="/"><button>Sair</button></Link>
                    </div>
                </div>

            </form>
        </body >
    )
}

export default Home;