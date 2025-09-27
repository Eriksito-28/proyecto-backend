const { Curso } = require('../models');

exports.getAll = async (req, res) => {
  const cursos = await Curso.findAll();
  res.json(cursos);
};

exports.create = async (req, res) => {
  try {
    const curso = await Curso.create(req.body);
    res.status(201).json(curso);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear curso' });
  }
};
