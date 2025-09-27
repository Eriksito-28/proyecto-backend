'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {
      // Un curso tiene muchos alumnos
      Curso.hasMany(models.Alumno, { foreignKey: 'cursoId' });
    }
  }

  Curso.init({
    nombre: { type: DataTypes.STRING, allowNull: false },
    descripcion: { type: DataTypes.TEXT, allowNull: true }
  }, {
    sequelize,
    modelName: 'Curso',
  });

  return Curso;
};
