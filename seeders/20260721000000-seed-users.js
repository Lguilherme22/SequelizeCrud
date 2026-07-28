'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const now = new Date();

    await queryInterface.bulkInsert('Users', [
      {
        firstName: 'Ana',
        lastName: 'Silva',
        age: 28,
        email: 'ana.silva@example.com',
        createdAt: now,
        updatedAt: now,
      },
      {
        firstName: 'Bruno',
        lastName: 'Santos',
        age: 34,
        email: 'bruno.santos@example.com',
        createdAt: now,
        updatedAt: now,
      },
      {
        firstName: 'Carla',
        lastName: 'Oliveira',
        age: 25,
        email: 'carla.oliveira@example.com',
        createdAt: now,
        updatedAt: now,
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      email: [
        'ana.silva@example.com',
        'bruno.santos@example.com',
        'carla.oliveira@example.com',
      ],
    });
  },
};
