const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Simulación de base de datos en memoria
let tareas = [
  {
    id: 1,
    titulo: "Estudiar Node.js",
    completada: false
  },
  {
    id: 2,
    titulo: "Comenzar el frontend",
    completada: false
  }
];

// Ruta de prueba inicial
app.get('/', (req, res) => {
  res.send('Servidor backend funcionando correctamente');
});

// Obtener todas las tareas
app.get('/api/tasks', (req, res) => {
  res.status(200).json(tareas);
});

// Obtener una tarea por ID
app.get('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  res.status(200).json(tarea);
});

// Crear nueva tarea
app.post('/api/tasks', (req, res) => {
  const { titulo, completada } = req.body;

  if (!titulo) {
    return res.status(400).json({ error: "El campo 'titulo' es obligatorio." });
  }

  const nuevaTarea = {
    id: tareas.length > 0 ? tareas[tareas.length - 1].id + 1 : 1,
    titulo,
    completada: completada ?? false
  };

  tareas.push(nuevaTarea);
  res.status(201).json(nuevaTarea);
});

// Actualizar tarea existente
app.put('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, completada } = req.body;

  const tarea = tareas.find(t => t.id === id);

  if (!tarea) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  if (titulo !== undefined) tarea.titulo = titulo;
  if (completada !== undefined) tarea.completada = completada;

  res.status(200).json(tarea);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

app.delete('/api/tasks/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = tareas.findIndex(t => t.id === id);

  if (index === -1) {
    return res.status(404).json({ error: "Tarea no encontrada" });
  }

  const tareaEliminada = tareas.splice(index, 1)[0];
  res.status(200).json(tareaEliminada);
});
