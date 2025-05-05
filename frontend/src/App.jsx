import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaTareas from "./pages/ListaTareas";
import CrearTarea from "./pages/CrearTarea";
import EditarTarea from "./pages/EditarTarea";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaTareas />} />
        <Route path="/crear" element={<CrearTarea />} />
        <Route path="/editar/:id" element={<EditarTarea />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
