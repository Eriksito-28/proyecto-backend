const { Alumno, Curso } = require('../models');

// Obtener todos los alumnos con curso incluido
exports.getAll = async (req, res) => {
  try {
    const alumnos = await Alumno.findAll({
      attributes: ['id', 'nombre', 'edad', 'email', 'cargo', 'foto', 'cursoId'],
      include: [{ model: Curso, attributes: ['id', 'nombre'] }],
    });
    res.json(alumnos);
  } catch (error) {
    console.error('Error al obtener alumnos:', error);
    res.status(500).json({ error: 'Error al obtener alumnos' });
  }
};

// Obtener alumno por ID con curso
exports.getById = async (req, res) => {
  try {
    const alumno = await Alumno.findByPk(req.params.id, {
      attributes: ['id', 'nombre', 'edad', 'email', 'cargo', 'foto', 'cursoId'],
      include: [{ model: Curso, attributes: ['id', 'nombre'] }],
    });
    if (!alumno) return res.status(404).json({ error: 'Alumno no encontrado' });
    res.json(alumno);
  } catch (error) {
    console.error('Error al obtener alumno:', error);
    res.status(500).json({ error: 'Error al obtener alumno' });
  }
};

// Función auxiliar para parsear cursoId (puede venir como string o vacío)
function parseCursoId(raw) {
  if (raw === undefined || raw === null || raw === '') return null;
  const n = parseInt(raw, 10);
  return Number.isNaN(n) ? null : n;
}

// Crear alumno
exports.create = async (req, res) => {
  console.log('BODY RECIBIDO:', req.body);
  try {
    const { nombre, edad, email, cargo, foto } = req.body;
    const cursoId = parseCursoId(req.body.cursoId);

    const alumno = await Alumno.create({ nombre, edad, email, cargo, foto, cursoId });

    const alumnoConCurso = await Alumno.findByPk(alumno.id, {
      attributes: ['id', 'nombre', 'edad', 'email', 'cargo', 'foto', 'cursoId'],
      include: [{ model: Curso, attributes: ['id', 'nombre'] }],
    });

    res.status(201).json(alumnoConCurso);
  } catch (error) {
    console.error('Error al crear alumno:', error);
    res.status(500).json({ error: 'Error al crear alumno' });
  }
};

// Actualizar alumno
exports.update = async (req, res) => {
  try {
    const alumno = await Alumno.findByPk(req.params.id);
    if (!alumno) return res.status(404).json({ error: 'Alumno no encontrado' });

    const { nombre, edad, email, cargo, foto } = req.body;
    const cursoId = parseCursoId(req.body.cursoId);

    await alumno.update({ nombre, edad, email, cargo, foto, cursoId });

    const actualizado = await Alumno.findByPk(alumno.id, {
      attributes: ['id', 'nombre', 'edad', 'email', 'cargo', 'foto', 'cursoId'],
      include: [{ model: Curso, attributes: ['id', 'nombre'] }],
    });

    res.json(actualizado);
  } catch (error) {
    console.error('Error al actualizar alumno:', error);
    res.status(500).json({ error: 'Error al actualizar alumno' });
  }
};

// Eliminar alumno
exports.delete = async (req, res) => {
  try {
    const alumno = await Alumno.findByPk(req.params.id);
    if (!alumno) return res.status(404).json({ error: 'Alumno no encontrado' });

    await alumno.destroy();
    res.json({ mensaje: 'Alumno eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar alumno:', error);
    res.status(500).json({ error: 'Error al eliminar alumno' });
  }
};
