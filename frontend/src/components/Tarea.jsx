import { Link } from "react-router-dom";

const Tarea = ({ tarea, onDelete }) => {
  const handleDelete = async () => {
    const confirmar = window.confirm(`¿Eliminar la tarea "${tarea.titulo}"?`);
    if (!confirmar) return;

    try {
      const respuesta = await fetch(`http://localhost:3000/api/tasks/${tarea.id}`, {
        method: "DELETE"
      });

      if (!respuesta.ok) {
        throw new Error("Error al eliminar la tarea");
      }

      onDelete(tarea.id); // Notifica al padre que elimine esta tarea de la lista
    } catch (error) {
      console.error("Error al eliminar:", error);
      alert("Hubo un problema al eliminar la tarea.");
    }
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "12px" }}>
      <h3>{tarea.titulo}</h3>
      <p>
        Estado: <strong>{tarea.completada ? "✅ Completada" : "⏳ Pendiente"}</strong>
      </p>

      <Link to={`/editar/${tarea.id}`}>
        <button>✏️ Editar</button>
      </Link>

      <button onClick={handleDelete} style={{ marginLeft: "10px", color: "red" }}>
        🗑️ Eliminar
      </button>
    </div>
  );
};

export default Tarea;
