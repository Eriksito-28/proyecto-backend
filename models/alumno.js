'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {
    static associate(models) {
      // Cada alumno pertenece a un curso
      Alumno.belongsTo(models.Curso, { foreignKey: 'cursoId' });
    }
  }

  Alumno.init({
    nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    email: DataTypes.STRING,
    cargo: DataTypes.STRING,
    foto: DataTypes.STRING,
    cursoId: {
      type: DataTypes.INTEGER,
      allowNull: true, // un alumno puede no tener curso asignado al inicio
      references: {
        model: 'Cursos',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    }
  }, {
    sequelize,
    modelName: 'Alumno',
  });

  return Alumno;
};
