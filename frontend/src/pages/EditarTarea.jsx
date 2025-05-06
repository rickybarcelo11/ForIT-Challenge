import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import FormularioTarea from "../components/FormularioTarea";
import BotonVolver from "../components/BotonVolver"; 


const EditarTarea = () => {
  const { id } = useParams();
  const navegar = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [completada, setCompletada] = useState(false);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/tasks/${id}`)
      .then(res => res.json())
      .then(data => {
        setTitulo(data.titulo);
        setCompletada(data.completada);
        setCargando(false);
      })
      .catch(err => {
        console.error("Error al cargar la tarea:", err);
        setCargando(false);
      });
  }, [id]);

  const manejarEnvio = async (e) => {
    e.preventDefault();

    try {
      const respuesta = await fetch(`http://localhost:3000/api/tasks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ titulo, completada }),
      });

      if (respuesta.ok) {
        navegar("/");
      } else {
        alert("Error al actualizar la tarea.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };

  if (cargando) return <p>Cargando tarea...</p>;

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

export default EditarTarea;
