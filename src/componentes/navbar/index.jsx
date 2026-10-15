import { Link } from "react-router-dom";
import "./style.css";

function Navbar(){

    return(

        <nav className="navbar">

            <h2>
                🏈 NFL Scoreboard
            </h2>

            <div className="links">

                <Link to="/">
                    Inicio
                </Link>

                <Link to="/partidos">
                    Partidos
                </Link>

                <Link to="/favoritos">
                    Favoritos
                </Link>

                <Link to="/info">
                    Info
                </Link>
            </div>
        </nav>
    )
}

export default Navbar;