const express = require('express');
const app = express();

const authRoutes = require('./routes/auth.routes');
const studentRoutes = require('./routes/student.routes');
const corsMiddleware = require("./cors"); // ✅ ya no busca en routes

app.use(express.json());
app.use(corsMiddleware);

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/alumnos', studentRoutes);

module.exports = app;
