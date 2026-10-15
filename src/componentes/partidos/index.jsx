import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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


                setPartidos(datos.events);



            } catch (error) {


                console.log(error);


            }


        }


        cargarPartidos();


    }, []);





    const agregarFavorito = (partido) => {


        let guardados = JSON.parse(

            localStorage.getItem("favoritosNFL")

        ) || [];



        const existe = guardados.find(

            (item) => item.id === partido.id

        );



        if (!existe) {


            guardados.push(partido);



            localStorage.setItem(

                "favoritosNFL",

                JSON.stringify(guardados)

            );


        }


    };






    return (


        <section className="partidos">


            <h1>
                🏈 Partidos NFL
            </h1>




            <div className="lista-partidos">



                {

                    partidos.length > 0 ?



                        partidos.map((partido) => (


                            <div
                                className="tarjeta-partido"
                                key={partido.id}
                            >



                                <h2>
                                    {partido.name}
                                </h2>




                                <div className="datos">


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



                                    <p>
                                        🏟️
                                        {
                                            partido.competitions[0]
                                                .venue?.fullName ||
                                            "No disponible"
                                        }
                                    </p>


                                </div>




                                <div className="botones">



                                    <Link
                                        to={`/detalle/${partido.id}`}
                                    >


                                        <button className="detalle">

                                            🔎 Detalles

                                        </button>


                                    </Link>





                                    <button

                                        className="favorito"

                                        onClick={() => agregarFavorito(partido)}

                                    >


                                        ⭐ Favorito


                                    </button>



                                </div>



                            </div>



                        ))



                        :


                        <h2>
                            Cargando partidos...
                        </h2>



                }



            </div>


        </section>


    )


}



export default Partidos;