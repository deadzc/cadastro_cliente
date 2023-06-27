import { Link } from 'react-router-dom'
import './App.css';

function Cliente() {
    return (
        <body id='home-body'>
            <form className="form">

                <div class="form-header">
                    <div class="title">
                        <h1>Menu Cliente</h1>
                    </div>
                </div>

                <div className="buttons">
                    <div class="continue-button">
                        <Link to="/Produtos"><button>Lista de Produtos</button></Link>
                    </div>

                    <div class="continue-button">
                        <Link to="/Cad_Prod"><button>Cadastrar Produtos</button></Link>
                    </div>

                    <div class="continue-button">
                        <Link to="/"><button>Sair </button></Link>
                    </div>
                </div>

            </form>

        </body >
    )
}

export default Cliente;