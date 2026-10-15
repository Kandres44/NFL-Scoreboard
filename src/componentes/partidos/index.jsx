import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Partidos() {

    const [partidos, setPartidos] = useState([]);

    useEffect(() => {
        fetch(
            "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
        )

            .then(res => res.json())
            .then(data => {
                setPartidos(data.events);
            })

    }, []);

    return (


        <section className="partidos">

            <h1>
                Partidos NFL
            </h1>

            <div className="contenedor-partidos">


                {
                    partidos.map((partido) => (

                        <div
                            className="tarjeta-partido"
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
                                🏟️
                                {
                                    partido.competitions[0]
                                        .venue?.fullName
                                }
                            </p>

                            <p>
                                Estado:
                                <span>
                                    {
                                        partido.status.type.description

                                    }
                                </span>
                            </p>

                            <Link
                                to={`/detalle/${partido.id}`}
                            >
                                <button>
                                    Ver partido
                                </button>
                            </Link>

                        </div>

                    ))

                }

            </div>

        </section>

    )

}


export default Partidos;