import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Partidos(){

    const [partidos, setPartidos] = useState([]);

    useEffect(()=>{

        const cargarPartidos = async()=>{

            try{

                const respuesta = await fetch(
                    "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
                );

                const datos = await respuesta.json();

                setPartidos(datos.events);

            }catch(error){

                console.log(
                    "Error cargando partidos:",
                    error
                );
            }
        }

        cargarPartidos();
    },[]);

    const agregarFavorito = (partido) => {

        let guardados = JSON.parse(
            localStorage.getItem("favoritosNFL")
        ) || [];

        const existe = guardados.find(
            (item) => item.id === partido.id
        );

        if(!existe){

            guardados.push(partido);
            localStorage.setItem(
                "favoritosNFL",
                JSON.stringify(guardados)
            );

            alert("⭐ Partido agregado a favoritos");

        }else{

            alert("Este partido ya está en favoritos");

        }

    };

    return(
        <section className="partidos">
            <h1>
                Partidos NFL
            </h1>
            <div className="lista-partidos">
                {
                partidos.length > 0 ?
                (
                    partidos.map((partido)=>(
                        <div
                        className="tarjeta"
                        key={partido.id}
                        >
                            <h2>
                                {partido.name}
                            </h2>

                            <p>
                                📅 Fecha:
                                {
                                new Date(partido.date)
                                .toLocaleDateString()
                                }

                            </p>
                            <p>
                                ⏱️ Estado:
                                {
                                partido.status.type.description
                                }
                            </p>

                            <Link
                            to={`/detalle/${partido.id}`}
                            >
                                <button>
                                    🔎 Ver detalles
                                </button>
                            </Link>
                            <button
                            onClick={
                                ()=>agregarFavorito(partido)
                            }
                            >
                                ⭐ Guardar favorito
                            </button>
                        </div>
                    ))
                ):
                <h2>
                    Cargando partidos...
                </h2>
                }

            </div>
        </section>
    )
}

export default Partidos;