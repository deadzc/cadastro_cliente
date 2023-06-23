import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

function Home(props) {
    return (
        <body id='home-body'>
            <div class="form" id="home-container">
                <div class="form-header" id="home-header">
                    <div class="title">
                        <h1>Menu Adm</h1>
                    </div>
                </div>
                <div class="buttons" id='home-buttons'>
                    <div class="continue-button" id='home-continue-buttons'>
                        <Link to="/Lista_Clientes "><button>Lista de clientes</button></Link>

                    </div>

                    <div class="continue-button" id='home-continue-buttons'>
                        <Link to="/Cad_Cliente"><button>Cadastrar Clientes</button></Link>
                    </div>

                    <div class="continue-button" id='home-continue-buttons'>
                        <Link to="/"><button>Sair</button></Link>
                    </div>
                </div>
            </div>
        </body >
    )
}

export default Home;