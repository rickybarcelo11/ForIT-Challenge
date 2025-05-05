import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const EditarTarea = () => {
  const { id } = useParams(); // Obtenemos el id desde la URL
  const navegar = useNavigate();

  const [titulo, setTitulo] = useState("");
  const [completada, setCompletada] = useState(false);
  const [cargando, setCargando] = useState(true);

  // Traemos los datos de la tarea al cargar la página
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
    <div>
      <h2>Editar tarea</h2>
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

        <button type="submit">Actualizar tarea</button>
      </form>
    </div>
  );
};

export default EditarTarea;
