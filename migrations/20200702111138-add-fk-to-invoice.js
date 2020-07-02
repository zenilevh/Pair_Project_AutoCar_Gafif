'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        return queryInterface.addConstraint('Invoices', {
                fields: ['CarId'],
                type: 'foreign key',
                name: 'custom_fkey_CarId',
                references: { //Required field
                    table: 'Cars',
                    field: 'id'
                },
                onDelete: 'cascade',
                onUpdate: 'cascade'
            })
            .then(() => {
                return queryInterface.addConstraint('Invoices', {
                    fields: ['UserId'],
                    type: 'foreign key',
                    name: 'custom_fkey_UserId',
                    references: { //Required field
                        table: 'Users',
                        field: 'id'
                    },
                    onDelete: 'cascade',
                    onUpdate: 'cascade'
                })
            })
    },

    down: (queryInterface, Sequelize) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        return queryInterface.removeConstraint('Invoices', 'custom_fkey_CarId')
            .then(() => {
                return queryInterface.removeConstraint('Invoices', 'custom_fkey_UserId')
            })
    }
};