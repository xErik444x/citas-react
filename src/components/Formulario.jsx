import { useState, useEffect } from "react";
import Error from "./Error";
import { FormInput } from "./form/FormInput";
import { FormTextArea } from "./form/FormTextArea";

const Formulario = ({ setPaciente, paciente, pacientes, setPacientes }) => {
  const [nombre, setNombre] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [alta, setAlta] = useState("");
  const [sintomas, setSintomas] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    if (Object.keys(pacientes).length) {
      setNombre(paciente.nombre);
      setPropietario(paciente.propietario);
      setEmail(paciente.email);
      setAlta(paciente.alta);
      setSintomas(paciente.sintomas);
    }
  }, [paciente]);

  const generarId = () => Math.random().toString(36).substring(2);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        nombre.trim(),
        propietario.trim(),
        email.trim(),
        alta.trim(),
        sintomas.trim(),
      ].includes("")
    ) {
      setError(true);
      return;
    }
    let newPaciente = {
      nombre,
      propietario,
      email,
      alta,
      sintomas,
      id: generarId(),
    };
    if (!paciente.id) {
      setPacientes([...pacientes, newPaciente]);
    } else {
      newPaciente.id = paciente.id;
      setPacientes((p) =>
        p.map((item) =>
          item.id === newPaciente.id ? { ...item, ...newPaciente } : item,
        ),
      );
    }
    setPaciente({});
    setNombre("");
    setPropietario("");
    setEmail("");
    setAlta("");
    setSintomas("");
    setError(false);
  };

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
      <p className="text-lg mt-5 text-center mb-10">
        Añade Pacientes y {""}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded-md py-10 px-5"
      >
        {error && <Error message="Todos los campos son obligatorios" />}
        <FormInput
          texto="Nombre Mascota"
          placeholder="Nombre de la mascota"
          value={nombre}
          setValue={setNombre}
        />
        <FormInput
          texto="Nombre Propietario"
          placeholder="Nombre del Propietario"
          value={propietario}
          setValue={setPropietario}
        />
        <FormInput
          texto="Email Propietario"
          placeholder="Email del Propietario"
          type="email"
          value={email}
          setValue={setEmail}
        />
        <FormInput
          texto="Fecha Alta"
          type="date"
          value={alta}
          setValue={setAlta}
        />

        <FormTextArea
          texto="Sintomas"
          value={sintomas}
          setValue={setSintomas}
        />
        <input
          type="submit"
          className="cursor-pointer hover:bg-indigo-700 bg-indigo-600 w-full p-3 text-white uppercase font-bold rounded-md transition-all"
          value={paciente.id ? "Editar Paciente" : "Agregar paciente"}
        />
      </form>
    </div>
  );
};

export default Formulario;
