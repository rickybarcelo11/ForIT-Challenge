import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1 style={{ marginBottom: "2rem" }}>Bienvenido al Gestor de Tareas</h1>

      <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
        <Link to="/nueva">
          <button>➕ Nueva tarea</button>
        </Link>
        <Link to="/lista">
          <button>📋 Ver tareas</button>
        </Link>
      </div>
    </div>
  );
};

export default Inicio;
