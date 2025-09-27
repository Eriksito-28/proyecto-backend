const express = require('express');
const app = express();

const authRoutes = require('./routes/auth.routes');
const studentRoutes = require('./routes/student.routes');
const corsMiddleware = require("./cors"); // ✅ ya no busca en routes
const cursoRoutes = require('./routes/cursos');


app.use(express.json());
app.use(corsMiddleware);

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/alumnos', studentRoutes);
app.use('/api/cursos', cursoRoutes);

module.exports = app;
