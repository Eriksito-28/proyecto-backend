module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('Alumnos', 'cursoId', {
      type: Sequelize.INTEGER,
      references: {
        model: 'Cursos',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL'
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Alumnos', 'cursoId');
  }
};
