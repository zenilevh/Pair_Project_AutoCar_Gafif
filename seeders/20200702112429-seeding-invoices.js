'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /**
         * Add seed commands here.
         *
         * Example:
         * await queryInterface.bulkInsert('People', [{
         *   name: 'John Doe',
         *   isBetaMember: false
         * }], {});
         */
        return queryInterface.bulkInsert('Invoices', [{
                UserId: 1,
                CarId: 2,
                shiping: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                UserId: 1,
                CarId: 1,
                shiping: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                UserId: 2,
                CarId: 1,
                shiping: new Date(),
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: (queryInterface, Sequelize) => {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
        return queryInterface.bulkDelete('Invoices', null, {});
    }
};