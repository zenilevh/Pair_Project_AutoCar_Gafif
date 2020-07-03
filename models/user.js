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
        get fullName() {
          return `${this.first_name} ${this.last_name}` 
        }
    };
    User.init({
        first_name: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
              notNull: {
                args: true,
                msg: 'First Name is Required!'
              },
              notEmpty:{
                args: true,
                msg: "First Name is Required!"
              }
            }  
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
              notNull: {
                args: true,
                msg: 'Last Name is Required!'
              },
              notEmpty:{
                args: true,
                msg: "Last Name is Required!"
              }
            }  
        },
        age: DataTypes.INTEGER,
        gender: {
            type: DataTypes.STRING,
            validate:{
              notEmpty:{
                args: true,
                msg: "Gender is Required!"
              }
            }  
        },
        email: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
              notNull: {
                args: true,
                msg: 'Email is Required!'
              },
              notEmpty:{
                args: true,
                msg: "Email is Required!"
              }
            }  
        },
        password: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
              notNull: {
                args: true,
                msg: 'Car Name is Required!'
              },
              notEmpty:{
                args: true,
                msg: "Car Name is Required!"
              }
            }  
        },
        role: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'User',
    });

    User.addHook('beforeCreate', function(instance, option){
        if (instance.role == null || instance.role == "") {
            instance.role = "Buyer"
        }
    })

    User.addHook('beforeCreate', function(instance, option){
        const salt = bcrypt.genSaltSync(saltRounds);
        const hash = bcrypt.hashSync(instance.password, salt);
        instance.password = hash
    })

    return User;
};