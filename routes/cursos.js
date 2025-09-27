// routes/cursos.js
const express = require('express');
const router = express.Router();
const cursoController = require('../controllers/curso.controller');

// ✅ obtener todos los cursos
router.get('/', cursoController.getAll);

// ✅ crear curso
router.post('/', cursoController.create);

module.exports = router;
