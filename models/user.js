'use strict';

const bcrypt = require('bcrypt')
const saltRounds = 10

const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            User.belongsToMany(models.Car, { through: 'Invoices' });
        }
    };
    User.init({
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });
    
    User.addHook('beforeCreate', function(instance, option){
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(instance.password, salt);
        instance.password = hash
     
    })

    return User;
};