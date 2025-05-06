const FormularioTarea = ({ titulo, setTitulo, completada, setCompletada, onSubmit, modo }) => {
    return (
      <form onSubmit={onSubmit} style={{ maxWidth: "400px", margin: "0 auto", textAlign: "left" }}>
        <h2 style={{ textAlign: "center" }}>{modo === "editar" ? "Editar tarea" : "Crear nueva tarea"}</h2>
  
        <div style={{ marginBottom: "12px" }}>
          <label>Título:</label><br />
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
            style={{ width: "100%", padding: "8px", borderRadius: "4px" }}
          />
        </div>
  
        <div style={{ marginBottom: "16px" }}>
          <label>
            <input
              type="checkbox"
              checked={completada}
              onChange={(e) => setCompletada(e.target.checked)}
            />
            {" "}¿Está completada?
          </label>
        </div>
  
        <div style={{ textAlign: "center" }}>
          <button type="submit">
            {modo === "editar" ? "Actualizar tarea" : "Guardar tarea"}
          </button>
        </div>
      </form>
    );
    
  };
  
  export default FormularioTarea;
  