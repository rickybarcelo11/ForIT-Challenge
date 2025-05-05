import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import ListaTareas from "./pages/ListaTareas";
import CrearTarea from "./pages/CrearTarea";
import EditarTarea from "./pages/EditarTarea";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />           {/* Home principal */}
        <Route path="/lista" element={<ListaTareas />} /> {/* Ver tareas */}
        <Route path="/nueva" element={<CrearTarea />} />
        <Route path="/editar/:id" element={<EditarTarea />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
