'use strict';
module.exports = {
  async up (queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.addColumn(
        'users',
        'last_name', 
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),{transaction};
      await transaction.commit();
    } catch(e) {
      await transaction.rollback();
      throw e;
    }
  },

  async down (queryInterface) {
    try {
    const transaction = await queryInterface.sequelize.transaction();
    await queryInterface.removeColumn('users', 'last_name', {transaction})
    await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  }
};