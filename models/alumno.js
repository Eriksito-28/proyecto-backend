'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Alumno extends Model {}
  Alumno.init({
  nombre: DataTypes.STRING,
    edad: DataTypes.INTEGER,
    email: DataTypes.STRING  
  }, {
    sequelize,
    modelName: 'Alumno',
  });
  return Alumno;
};
