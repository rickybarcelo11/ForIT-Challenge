import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormularioTarea from "../components/FormularioTarea";
import BotonVolver from "../components/BotonVolver";

const CrearTarea = () => {
  const [titulo, setTitulo] = useState("");
  const [completada, setCompletada] = useState(false);
  const navegar = useNavigate();

  const manejarEnvio = async (e) => {
    e.preventDefault();

    if (titulo.trim() === "") {
      alert("El título es obligatorio.");
      return;
    }

    try {
      const respuesta = await fetch("http://localhost:3000/api/tasks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, completada }),
      });

      if (respuesta.ok) {
        navegar("/");
      } else {
        alert("Error al crear la tarea.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };

  return (
    <div style={{ textAlign: "center" }}>
      <FormularioTarea
        titulo={titulo}
        setTitulo={setTitulo}
        completada={completada}
        setCompletada={setCompletada}
        onSubmit={manejarEnvio}
        modo="crear"
      />
      <BotonVolver />
    </div>
  );
};

export default CrearTarea;
