import { useEffect, useState } from "react";
import Tarea from "../components/Tarea";

const ListaTareas = () => {
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
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
          <Tarea
            key={tarea.id}
            tarea={tarea}
            onDelete={(id) =>
              setTareas((tareasActuales) =>
                tareasActuales.filter((t) => t.id !== id)
              )
            }
          />
        ))
      )}
    </div>
  );
};

export default ListaTareas;
