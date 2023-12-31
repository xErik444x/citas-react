import Paciente from "./Paciente";
function ListadoPacientes({ pacientes, setPaciente, eliminarPaciente }) {
  return (
    <div className={`md:w-1/2 lg:w-3/5`}>
      <h2 className="font-black text-3xl text-center">Listado Pacientes</h2>
      <p className="text-xl mt-5 mb-5 text-center">
        {pacientes.length ? "Administra tus " : "Actualmente no existen "}
        {""}
        <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
        {!pacientes.length && <><br />Genera nuevos en el formulario!</>}
      </p>
    <div className={`flex-col md:h-screen ${pacientes.length>1 ? 'md:overflow-y-scroll' : 'md:overflow-y-hidden'}`}>
    {pacientes.map((paciente) => (
        <Paciente
          key={paciente.id}
          paciente={paciente}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      ))}
    </div>

    </div>
  );
}

export default ListadoPacientes;
