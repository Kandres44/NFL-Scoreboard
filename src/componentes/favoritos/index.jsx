import { useEffect, useState } from "react";
import "./style.css";

function Favoritos() {

    const [favoritos, setFavoritos] = useState([]);

    useEffect(() => {

        const datos = JSON.parse(

            localStorage.getItem("favoritosNFL")

        ) || [];
        
        setFavoritos(datos);

    }, []);

    return (
        <section className="favoritos">
            <h1>
                ⭐ Mis favoritos
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

                                <p>
                                    {
                                        partido.status.type.description
                                    }
                                </p>
                            </div>
                        )):
                        <h2>
                            No tienes favoritos todavía
                        </h2>
                }

            </div>
        </section>
    )
}

export default Favoritos;