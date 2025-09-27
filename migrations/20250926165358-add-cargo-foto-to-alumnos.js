'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Alumnos', 'cargo', {
      type: Sequelize.STRING,
      allowNull: true,
    });
    await queryInterface.addColumn('Alumnos', 'foto', {
      type: Sequelize.STRING, // Guardaremos la URL de la foto
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Alumnos', 'cargo');
    await queryInterface.removeColumn('Alumnos', 'foto');
  },
};
