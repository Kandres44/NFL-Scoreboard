import { useParams } from "react-router-dom";
import "./style.css";

function Detalle() {

    const { id } = useParams();

    return (

        <section className="detalle">


            <h1>
                Detalle del partido
            </h1>


            <p>
                ID del partido:
                {id}

            </p>

            <p>
                Aquí aparecerá la información completa del encuentro.
            </p>
            
        </section>
    )
}


export default Detalle;