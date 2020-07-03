'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Car extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            Car.belongsToMany(models.User, { through: 'Invoices' });
        }
        get fullData() {
            return `${this.car_name} ${this.type}`  
        }
        get unitStock() {
          return `${this.stock} units`  
        }
    };
    Car.init({
        car_name: {
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
        type: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
              notNull: {
                args: true,
                msg: 'Type is Required!'
              },
              notEmpty:{
                args: true,
                msg: "Type is Required!"
              }
            }  
        },
        harga: DataTypes.INTEGER,
        stock: DataTypes.INTEGER,
        bodykit: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
              notNull: {
                args: true,
                msg: 'Body Kit is Required!'
              },
              notEmpty:{
                args: true,
                msg: "Body Kit is Required!"
              }
            }  
        },
        imgURL: {
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                isUrl: {
                    args: true,
                    msg: 'Format URL tidak sesuai!'
                },
                notNull: {
                    args: true,
                    msg: 'Image URL is Required!'
                },
                notEmpty:{
                    args: true,
                    msg: "Image URL is Required!"
                }
            }  
        }
    }, 
    {
      sequelize,
      modelName: 'Car',
    });

    // Car.addHook('beforeCreate', function(instance, option){
    //   instance.stock = instance.stock + 'unit'
    // })

    return Car;
};