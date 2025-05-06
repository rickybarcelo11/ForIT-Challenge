// src/components/BotonVolver.jsx
import { useNavigate } from "react-router-dom";

const BotonVolver = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
      <button
        onClick={() => navigate("/")}
        style={{
          backgroundColor: "#646CFF",
          color: "#fff",
          padding: "0.4rem 1.2rem",
          fontSize: "0.9rem",
          fontWeight: "500",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
          transition: "background-color 0.25s ease"
        }}
        onMouseOver={(e) => (e.target.style.backgroundColor = "#535bf2")}
        onMouseOut={(e) => (e.target.style.backgroundColor = "#646CFF")}
      >
        Volver al inicio
      </button>
    </div>
  );
};

export default BotonVolver;
