import { useEffect, useState } from "react";

import "./style.css";


function Favoritos() {


    const [favoritos, setFavoritos] = useState([]);




    useEffect(() => {


        const guardados = JSON.parse(

            localStorage.getItem("favoritosNFL")

        ) || [];


        setFavoritos(guardados);


    }, []);





    const eliminarFavorito = (id) => {


        const nuevosFavoritos = favoritos.filter(

            (partido) => partido.id !== id

        );



        setFavoritos(nuevosFavoritos);



        localStorage.setItem(

            "favoritosNFL",

            JSON.stringify(nuevosFavoritos)

        );



    };





    return (


        <section className="favoritos">


            <h1>
                ⭐ Mis partidos favoritos
            </h1>




            <div className="lista-favoritos">


                {


                    favoritos.length > 0 ?



                        favoritos.map((partido) => (



                            <div

                                className="tarjeta-favorito"

                                key={partido.id}

                            >



                                <h2>
                                    {partido.name}
                                </h2>




                                <div className="datos-favorito">


                                    <p>

                                        ⏱️

                                        {partido.status.type.description}

                                    </p>



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
                                                .venue?.fullName ||
                                            "No disponible"

                                        }

                                    </p>



                                </div>





                                <button

                                    onClick={() => eliminarFavorito(partido.id)}

                                >

                                    ❌ Quitar favorito

                                </button>



                            </div>



                        ))



                        :


                        <h2 className="vacio">

                            No tienes partidos favoritos todavía ⭐

                        </h2>



                }



            </div>



        </section>


    )


}



export default Favoritos;