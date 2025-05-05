const Tarea = ({ tarea }) => {
    return (
      <div style={{ border: "1px solid #ccc", marginBottom: "10px", padding: "10px" }}>
        <h3>{tarea.titulo}</h3>
        <p>
          Estado: {tarea.completada ? "✅ Completada" : "❌ Pendiente"}
        </p>
      </div>
    );
  };
  
  export default Tarea;
  