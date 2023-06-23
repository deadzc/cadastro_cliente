import './Home.css'
import { Link } from 'react-router-dom'

function Cliente() {
    return (
        <body id='home-body'>
            <div class="form" id="home-container">
                <div class="form-header" id="home-header">
                    <div class="title">
                        <h1>Menu Cliente</h1>
                    </div>
                </div>
                <div class="buttons" id='home-buttons'>
                    <div class="continue-button" id='home-continue-buttons'>
                        <Link to="/Produtos"><button>Lista de Produtos</button></Link>
                    </div>

                    <div class="continue-button" id='home-continue-buttons'>
                        <Link to="/Cad_Prod"><button>Cadastrar Produtos</button></Link>
                    </div>

                    <div class="continue-button" id='home-continue-buttons'>
                        <Link to="/"><button>Sair </button></Link>
                    </div>
                </div>

            </div>

        </body >
    )
}

export default Cliente;