'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Invoice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Invoice.belongsTo(models.User)
      Invoice.belongsTo(models.Car)
    }
  };
  Invoice.init({
    UserId: DataTypes.INTEGER,
    CarId: DataTypes.INTEGER,
    shiping: DataTypes.DATE
    // { 
    //   type: DataTypes.DATE, 
    //   validate: { 
    //     isAfter: new Date() 
    //   } 
    // } 
  }, {
    sequelize,
    modelName: 'Invoice',
  });
  return Invoice;
};