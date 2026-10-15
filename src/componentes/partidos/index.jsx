import { useEffect, useState } from "react";
import "./style.css";

function Partidos() {

    const [partidos, setPartidos] = useState([]);
    useEffect(() => {
        const cargarPartidos = async () => {
            try {

                const respuesta = await fetch(
                    "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
                );

                const datos = await respuesta.json();
                console.log(datos);
                setPartidos(datos.events);

            } catch (error) {

                console.log(
                    "Error cargando partidos:",
                    error
                );
            }
        }
        cargarPartidos();
    }, []);

    return (

        <div className="partidos">
            <h1>
                Partidos NFL
            </h1>
            <div className="lista-partidos">
                {
                    partidos.length > 0 ?
                        (
                            partidos.map((partido) => (
                                <div
                                    className="tarjeta"
                                    key={partido.id}
                                >
                                    <h2>
                                        {partido.name}
                                    </h2>

                                    <p>
                                        📅
                                        {
                                            new Date(partido.date)
                                                .toLocaleDateString()
                                        }
                                    </p>


                                    <p>
                                        ⏱️
                                        {
                                            partido.status.type.description
                                        }
                                    </p>
                                </div>
                            ))
                        )
                        :
                        <h2>
                            Cargando partidos...
                        </h2>
                }
            </div>
        </div>
    )
}

export default Partidos;