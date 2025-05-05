import { useEffect, useState } from "react";
import Tarea from "../components/Tarea";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);

  const cargarTareas = () => {
    fetch("http://localhost:3000/api/tasks")
      .then(res => res.json())
      .then(data => setTareas(data))
      .catch(err => console.error("Error al obtener tareas:", err));
  };

  useEffect(() => {
    cargarTareas();
  }, []);

  const eliminarTarea = (id) => {
    // Filtra la tarea eliminada del estado
    setTareas(prev => prev.filter(tarea => tarea.id !== id));
  };

  return (
    <div>
      <h1>Listado de Tareas</h1>
      {tareas.length === 0 ? (
        <p>No hay tareas disponibles.</p>
      ) : (
        tareas.map(tarea => (
          <Tarea key={tarea.id} tarea={tarea} onDelete={eliminarTarea} />
        ))
      )}
    </div>
  );
};

export default ListaTareas;
