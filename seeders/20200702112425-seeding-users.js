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
        return queryInterface.bulkInsert('Users', [{
                first_name: 'John',
                last_name: 'English',
                age: 54,
                gender: "Male",
                email: "john@gmail.com",
                password: "johnenglishkurangmakan",
                role: "Buyer",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                first_name: 'John',
                last_name: 'Mamaka',
                age: 35,
                gender: "Male",
                email: "johnmamaka@gmail.com",
                password: "kokopokosurapo",
                role: "Buyer",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                first_name: 'Steven',
                last_name: 'Stevan',
                age: 20,
                gender: "Female",
                email: "stevanstevns@gmail.com",
                password: "admin",
                role: "Admin",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                first_name: 'Krieg',
                last_name: 'Murthag',
                age: 57,
                gender: "Male",
                email: "kriegtag@gmail.com",
                password: "BuyerituEnaksekali",
                role: "Buyer",
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
        return queryInterface.bulkDelete('Users', null, {});
    }
};