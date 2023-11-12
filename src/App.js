
import "./App.css";
import Inputs from "./components/Inputs";
import Productos from "./components/Productos";
import Valores from "./components/Valores";
import React, { useState } from "react";
import { FaGithub, FaLinkedin } from 'react-icons/fa';


import Aceite from './components/img/Aceite.jpg';
import arroz from './components/img/arroz.jpg';
import asado from './components/img/asado.jpg';
import banana from './components/img/banana.jpg';
import  cebolla from './components/img/cebolla.jpg';
import cocacolaImage from './components/img/cocacola.jpg';
import  dolar from './components/img/dolar.jpg';
import fideos from './components/img/fideos.jpg';
import huevos from './components/img/huevos.jpg';
import  leche from './components/img/leche.jpg';
import pan from './components/img/pan.jpg';
import papel from './components/img/papel.jpg';
import pollo from './components/img/pollo.jpg';
import queso from './components/img/queso.png';
import tomate from './components/img/tomate.jpg';
import  yerba from './components/img/yerba.jpg';
import  Yogur from './components/img/Yogur.png';
import zanahoria from './components/img/zanahoria.jpg';


function App() {
  const [value1, setValue1] = useState(175);
  const [value2, setValue2] = useState(200);
  const [value3, setValue3] = useState(225);
  const [value4, setValue4] = useState(250);
  const [otro, setOtro] = useState(0);
  const [seleccion, setSeleccion] = useState({
    nombre: "Aceite (1.5l)",
      precio: 1000,
      imagen: Aceite,
  });

  const handleSeleccion = (producto) => {
    setSeleccion(producto);
  };
  const productos = [
    {
      nombre: "Aceite (1.5l)",
      precio: 1000,
      imagen: Aceite,
    },
    {
      nombre: "Arroz (1kg)",
      precio: 950,
      imagen: arroz,
    },
    {
      nombre: "Asado (1kg)",
      precio: 3900,
      imagen: asado,
    },
    {
      nombre: "Banana (1kg)",
      precio: 800,
      imagen: banana,
    },
    {
      nombre: "Cebollas (1kg)",
      precio: 280,
      imagen: cebolla,
    },
    {
      nombre: "Coca-Cola (chica)",
      precio: 300,
      imagen: cocacolaImage,
    },
    {
      nombre: "1 Dolar",
      precio: 960,
      imagen: dolar,
    },
    {
      nombre: "Fideos",
      precio: 190,
      imagen: fideos,
    },
    {
      nombre: "Huevos (1 docena)",
      precio: 1200,
      imagen: huevos,
    },
    {
      nombre: "Leche",
      precio: 400,
      imagen: leche,
    },
    {
      nombre: "Pan (1Kg)",
      precio: 800,
      imagen: pan,
    },
    {
      nombre: "Papel Higiénico (30m x4)",
      precio: 900,
      imagen: papel,
    },
    {
      nombre: "Pollo (1Kg)",
      precio: 1100,
      imagen: pollo,
    },
    {
      nombre: "Queso Cremoso (1kg)",
      precio: 3100,
      imagen: queso,
    },
    {
      nombre: "Tomates(1kg)",
      precio: 650,
      imagen: tomate,
    },
    {
      nombre: "Yerba (500g)",
      precio: 600,
      imagen: yerba,
    },
    {
      nombre: "Yogur (1l)",
      precio: 600,
      imagen: Yogur,
    },
    {
      nombre: "Zanahorias (1kg)",
      precio: 500,
      imagen: zanahoria,
    },
  ];
  
  return (
    <div>
      <header>
      <div className="redes">
          <a href="https://github.com/EsteEsChoque"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/sebastian-choque/"><FaLinkedin /></a>
          <p>EsteEsChoque</p>
        </div>
        <div className="contenedor">
          <div className="titulo">

        <h1>Calculadora de Massa</h1>
        <p>¿Cuánto estaran las cosas dentro de 1, 2, 3 o 4 años?</p>
        <p>Realiza la estimación ahora mismo</p>
        
          </div>
        </div>
        
        <Inputs
          value1={value1}
          value2={value2}
          value3={value3}
          value4={value4}
          onChange1={setValue1}
          onChange2={setValue2}
          onChange3={setValue3}
          onChange4={setValue4}
        />

        <Productos
          productos={productos}
          onSeleccion={handleSeleccion}
          seleccion={seleccion}
          otro={otro}
          onChange={setOtro}
        />

        <Valores
          seleccion={seleccion}
          otro={otro}
          value1={value1}
          value2={value2}
          value3={value3}
          value4={value4}
        />
      </header>
    </div>
  );
}

export default App;
