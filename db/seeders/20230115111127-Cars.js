/** @type {import('sequelize-cli').Migration} */
const cars = require('../data')
module.exports = {
  async up (queryInterface) {
 
     await queryInterface.bulkInsert('Car_cards', cars);
   
  },

  async down (queryInterface) {
    
      await queryInterface.bulkDelete('Car_cards', null, {});
     
  }
};
