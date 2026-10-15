import { BrowserRouter, Routes, Route } from "react-router-dom";


import Navbar from "./componentes/navbar";

import Inicio from "./componentes/inicio";

import Partidos from "./componentes/partidos";

import Favoritos from "./componentes/favoritos";

import Detalle from "./componentes/detalle";

import Info from "./componentes/info";


import "./App.css";



function App() {


    return (


        <BrowserRouter>


            <div className="app">



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
                        path="/detalle/:id"
                        element={<Detalle />}
                    />



                    <Route
                        path="/info"
                        element={<Info />}
                    />



                </Routes>



            </div>


        </BrowserRouter>


    )


}


export default App;