import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";
import { useState, useEffect } from "react";

function App() {
  const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
  const [pacientes, setPacientes] = useState(pacientesLS);
  const [paciente, setPaciente] = useState({});

  // useEffect(() => {
  // },[]); //se ejecuta una sola vez al inicio

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  },[pacientes]);

  const eliminarPaciente = (id) => {
    console.log("Eliminando paciente: ", id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }
  return (
    <div className="container mx-auto mt-20 w-screen">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          paciente={paciente}
          setPaciente={setPaciente}
          pacientes={pacientes}
          setPacientes={setPacientes}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
    </div>
  );
}

export default App;
