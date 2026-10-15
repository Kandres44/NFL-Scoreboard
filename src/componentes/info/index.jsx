import "./style.css";


function Info() {


    return (


        <section className="info">


            <h1>
                🏈 NFL Scoreboard
            </h1>



            <div className="contenido-info">



                <h2>
                    Sobre el proyecto
                </h2>


                <p>

                    Esta aplicación permite consultar partidos de la NFL utilizando datos obtenidos desde una API deportiva.

                </p>




                <h2>
                    Funciones principales
                </h2>



                <div className="funciones">


                    <div>
                        🏈
                        <h3>
                            Partidos
                        </h3>

                        <p>
                            Consulta encuentros actuales de la NFL.
                        </p>

                    </div>



                    <div>
                        ⭐
                        <h3>
                            Favoritos
                        </h3>

                        <p>
                            Guarda tus partidos favoritos usando almacenamiento local.
                        </p>

                    </div>




                    <div>
                        🔎
                        <h3>
                            Detalles
                        </h3>

                        <p>
                            Visualiza información completa de cada partido.
                        </p>

                    </div>



                </div>





                <h2>
                    Tecnologías utilizadas
                </h2>



                <ul>

                    <li>
                        ⚛️ React
                    </li>


                    <li>
                        🟨 JavaScript
                    </li>


                    <li>
                        🎨 CSS
                    </li>


                    <li>
                        🌐 API REST ESPN
                    </li>


                </ul>



            </div>



        </section>


    )


}


export default Info;