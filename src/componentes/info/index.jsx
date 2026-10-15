import "./style.css";

function Info() {

    return (

        <section className="info">

            <h1>
                NFL Scoreboard 🏈
            </h1>

            <div className="contenido">

                <h2>
                    Sobre la aplicación
                </h2>

                <p>
                    Aplicación creada con React para consultar partidos de la NFL usando una API de ESPN.
                </p>

                <h2>
                    Funciones
                </h2>

                <ul>

                    <li>
                        🏈 Ver partidos
                    </li>

                    <li>
                        ⭐ Guardar favoritos
                    </li>

                    <li>
                        📊 Consultar información deportiva
                    </li>

                </ul>

                <h2>
                    Tecnologías
                </h2>

                <p>
                    React + JavaScript + CSS + API REST
                </p>
            </div>
        </section>
    )
}

export default Info;