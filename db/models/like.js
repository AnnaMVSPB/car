'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Like extends Model {
 
    static associate({User,Car_card}) {
     this.belongsTo(User,{foreignKey:'user_id'});
     this.belongsTo(Car_card,{foreignKey:'car_id'});
    }
  }
  Like.init({
    user_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model:'Users',
        key:'id'
      }
    },
    car_id: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references:{
        model:'Car_cards',
        key:'id'
      }
    },
  }, {
    sequelize,
    modelName: 'Like',
  });
  return Like;
};
