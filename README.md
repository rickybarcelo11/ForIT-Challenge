# Gestor de Tareas – Challenge Técnico ForIT

Aplicación desarrollada como parte del challenge técnico de la academia **ForIT**. El sistema permite crear, editar, eliminar y visualizar tareas de manera simple y eficiente, con una interfaz clara y adaptable a distintos dispositivos.

## Funcionalidades principales

- Listado completo de tareas
- Edición de tareas
- Eliminación con confirmación
- Creación de nuevas tareas
- Navegación fluida y botón de volver
- Diseño centrado, claro y en modo oscuro suave

## Tecnologías utilizadas

### Frontend
- React (con Vite)
- React Router DOM para navegación entre vistas
- CSS nativo (sin frameworks como Tailwind)
- Componentes reutilizables (como `FormularioTarea` y `BotonVolver`)

### Backend
- Node.js con Express.js
- API REST simulada con una base de datos en memoria (sin persistencia)


## Estructura del proyecto

ForIT-Challenge/
├── backend/
│   ├── index.js
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   └── ...
├── README.md
└── ...


### Cómo ejecutar el proyecto
### Backend
- cd backend
- npm install
- npm start
- Accede a: http://localhost:3000

### Frontend
- cd frontend
- npm install
- npm run dev
- Accede a: http://localhost:5173

### Observaciones
- El proyecto fue construido desde cero, sin librerías de UI ni generadores automáticos.
- Todo el sistema funciona de manera local, ideal para pruebas o ampliaciones futuras.
- El backend no incluye persistencia en base de datos, por lo tanto los datos se reinician al reiniciar el servidor.


### Autor
Ricardo Barceló
Esperanza, Santa Fe – Argentina
rickybarcelo11@gmail.com
GitHub: rickybarcelo11

