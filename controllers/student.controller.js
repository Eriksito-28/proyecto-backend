const { Alumno } = require('../models');

exports.getAll = async (req, res) => {
  const alumnos = await Alumno.findAll();
  res.json(alumnos);
};

exports.getById = async (req, res) => {
  const alumno = await Alumno.findByPk(req.params.id);
  if (!alumno) return res.status(404).json({ error: 'No encontrado' });
  res.json(alumno);
};

exports.create = async (req, res) => {
  console.log('BODY RECIBIDO:', req.body);
  try {
    const alumno = await Alumno.create(req.body);
    console.log('Alumno creado:', alumno.toJSON());
    res.status(201).json(alumno);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear alumno' });
  }
};

exports.update = async (req, res) => {
  const alumno = await Alumno.findByPk(req.params.id);
  if (!alumno) return res.status(404).json({ error: 'No encontrado' });
  await alumno.update(req.body);
  res.json(alumno);
};

exports.delete = async (req, res) => {
  const alumno = await Alumno.findByPk(req.params.id);
  if (!alumno) return res.status(404).json({ error: 'No encontrado' });
  await alumno.destroy();
  res.json({ mensaje: 'Alumno eliminado' });
};
