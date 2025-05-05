import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Bienvenido al Gestor de Tareas</h1>
      <div style={{ marginTop: "2rem" }}>
        <Link to="/nueva">
          <button style={{ marginRight: "1rem" }}>➕ Nueva tarea</button>
        </Link>
        <Link to="/lista">
          <button>📋 Ver tareas</button>
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
