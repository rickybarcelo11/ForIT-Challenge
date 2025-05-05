import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
        navegar("/"); // Redirige al inicio después de crear
      } else {
        alert("Error al crear la tarea.");
      }
    } catch (error) {
      console.error("Error de conexión:", error);
    }
  };

  return (
    <div>
      <h2>Crear nueva tarea</h2>
      <form onSubmit={manejarEnvio}>
        <div>
          <label>Título:</label><br />
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div>
          <label>
            <input
              type="checkbox"
              checked={completada}
              onChange={(e) => setCompletada(e.target.checked)}
            />
            ¿Está completada?
          </label>
        </div>

        <button type="submit">Guardar tarea</button>
      </form>
    </div>
  );
};

export default CrearTarea;
