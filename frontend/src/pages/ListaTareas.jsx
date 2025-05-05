import { useEffect, useState } from "react";
import Tarea from "../components/Tarea"; // Lo crearemos después

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    // Trae las tareas desde el backend
    fetch("http://localhost:3000/api/tasks")
      .then(res => res.json())
      .then(data => setTareas(data))
      .catch(err => console.error("Error al obtener tareas:", err));
  }, []);

  return (
    <div>
      <h1>Listado de Tareas</h1>
      {tareas.length === 0 ? (
        <p>No hay tareas disponibles.</p>
      ) : (
        tareas.map(tarea => (
          <Tarea key={tarea.id} tarea={tarea} />
        ))
      )}
    </div>
  );
};

export default ListaTareas;
