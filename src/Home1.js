import { Link } from "react-router-dom";

import './App.css'

function Home1() {
    return (
        <form>
            <h3>Entrar no Sistema</h3>
            <div>
                <Link to="/Home"><input type="submit" name="acao" value="Login Adm" /></Link>
                <Link to="/Cliente"><input type="submit" name="acao" value="Login Cliente" /></Link>
            </div>

        </form>
    )
}

export default Home1;