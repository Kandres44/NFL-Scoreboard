import {BrowserRouter,Routes,Route} from "react-router-dom";

import Navbar from "./componentes/navbar";
import Inicio from "./componentes/inicio";
import Partidos from "./componentes/partidos";
import Favoritos from "./componentes/favoritos";
import Info from "./componentes/info";
import Detalle from "./componentes/detalle";


import "./App.css";

function App() {


    return (

        <BrowserRouter>


            <Navbar />


            <Routes>


                <Route
                    path="/"
                    element={<Inicio />}
                />


                <Route
                    path="/partidos"
                    element={<Partidos />}
                />


                <Route
                    path="/favoritos"
                    element={<Favoritos />}
                />


                <Route
                    path="/info"
                    element={<Info />}
                />


                <Route
                    path="/detalle/:id"
                    element={<Detalle />}
                />



            </Routes>


        </BrowserRouter>


    )

}


export default App;