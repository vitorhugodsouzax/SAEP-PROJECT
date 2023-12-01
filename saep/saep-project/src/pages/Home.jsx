import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaUsers,
  FaDoorOpen,
  FaBookOpen,
  FaGraduationCap,
} from "react-icons/fa";
import ListarTurma from "../Components/ListarTurmas";
import ListarDisciplinas from "../Components/ListarDisciplinas";
import { useNavigate } from "react-router-dom";
import "../style/professor.css";

const Home = () => {
  const [mostrarTurma, setMostrarTurma] = useState(false);
  const [mostrarDisciplina, setMostrarDisciplina] = useState(false);

  const toggleTurma = () => {
    setMostrarTurma(true);
    setMostrarDisciplina(false);
  };
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("Logout");
    navigate("/login");
  };

  const toggleDisciplinas = () => {
    setMostrarTurma(false);
    setMostrarDisciplina(true);
  };
  return (
    <div className="container">
      <div className="default-pages-template">
        <header className="header-pagina-professor">
          <h1>Lista</h1>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </header>
        <div className="buttonLightMode"></div>
      </div>
      <section className="home">
        <div>
          <ul className="lista-container">
            <li className="lista-icones-menu" onClick={toggleTurma}>
               <p className="turmas-cursor">Turmas</p>
            </li>
            <li className="lista-icones-menu" onClick={toggleDisciplinas}>
               <p className="disciplinas-cursor">Atividades</p>
            </li>
          </ul>
        </div>
        <div>
          <h3></h3>
          <div>
            {mostrarTurma && <ListarTurma />}
            {mostrarDisciplina && <ListarDisciplinas />}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
