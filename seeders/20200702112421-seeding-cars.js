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
        return queryInterface.bulkInsert('Cars', [{
                car_name: 'MAZDA',
                type: 'RX-8',
                harga: 100000000,
                stock: 10,
                bodykit: "lowerUpgrade",
                imgURL: "https://s3.amazonaws.com/carmudi-blogs/carmudi-id/wp-content/uploads/2019/12/30163152/Mazda_RX-8_on_freeway-750x375.jpg",

                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                car_name: 'MAZDA',
                type: 'RX-7 ver. 2',
                harga: 500000000,
                stock: 50,
                bodykit: "HighUpgrade",
                imgURL: "https://s3.amazonaws.com/carmudi-blogs/carmudi-id/wp-content/uploads/2019/12/30163152/Mazda_RX-8_on_freeway-750x375.jpg",

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
         * await queryInterface.bulkDelete('Cars', null, {});
         */
        return queryInterface.bulkDelete('Cars', null, {});
    }
};