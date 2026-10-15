import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import "./style.css";


function Detalle() {


    const { id } = useParams();


    const [partido, setPartido] = useState(null);



    useEffect(() => {


        const cargarDetalle = async () => {


            try {


                const respuesta = await fetch(
                    "https://site.api.espn.com/apis/site/v2/sports/football/nfl/scoreboard"
                );



                const datos = await respuesta.json();



                const encontrado = datos.events.find(

                    (item) => item.id === id

                );



                setPartido(encontrado);



            } catch (error) {


                console.log(
                    "Error cargando detalle:",
                    error
                );


            }


        };



        cargarDetalle();



    }, [id]);





    if (!partido) {


        return (

            <h2 className="cargando">

                Cargando información del partido...

            </h2>

        )


    }





    const competencia = partido.competitions[0];


    const equipos = competencia.competitors;



    const local = equipos.find(

        (equipo) => equipo.homeAway === "home"

    );



    const visitante = equipos.find(

        (equipo) => equipo.homeAway === "away"

    );






    return (


        <section className="detalle">



            <h1>
                🏈 Detalle del partido
            </h1>




            <div className="tarjeta-detalle">



                <h2>

                    {partido.name}

                </h2>




                <div className="equipos">



                    <div>

                        <h3>
                            🏠 Local
                        </h3>


                        <p>
                            {local?.team.displayName}
                        </p>


                        <h2>

                            {
                                local?.score || "-"
                            }

                        </h2>


                    </div>





                    <div className="vs">

                        VS

                    </div>





                    <div>


                        <h3>
                            🚩 Visitante
                        </h3>


                        <p>
                            {visitante?.team.displayName}
                        </p>


                        <h2>

                            {
                                visitante?.score || "-"
                            }

                        </h2>


                    </div>



                </div>





                <div className="informacion">



                    <p>

                        📅 Fecha:

                        {
                            new Date(partido.date)
                                .toLocaleString()

                        }

                    </p>



                    <p>

                        ⏱️ Estado:

                        {
                            partido.status.type.description

                        }

                    </p>



                    <p>

                        🏟️ Estadio:

                        {
                            competencia.venue?.fullName ||
                            "No disponible"

                        }

                    </p>



                </div>




            </div>



        </section>


    )


}



export default Detalle;