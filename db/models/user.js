'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
 
    static associate({Comment,Like,Car_card}) {
      this.hasMany(Comment,{foreignKey:'user_id'});
      this.hasMany(Like,{foreignKey:'user_id'});
      this.hasMany(Car_card,{foreignKey:'user_id'});
    }
  }
  User.init({
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
