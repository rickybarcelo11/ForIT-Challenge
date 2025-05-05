import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListaTareas from "./pages/ListaTareas";
import CrearTarea from "./pages/CrearTarea";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ListaTareas />} />
        <Route path="/crear" element={<CrearTarea />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
