'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    
    static associate({User,Car_card}) {
    this.belongsTo(User,{foreignKey:'user_id'});
    this.belongsTo(Car_card,{foreignKey:'car_id'});
    }
  }
  Comment.init({
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
    body: {
      allowNull: false,
      type: DataTypes.TEXT
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
