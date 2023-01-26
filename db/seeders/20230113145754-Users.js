const bcrypt = require('bcrypt');

module.exports = {
  async up (queryInterface) {
     await queryInterface.bulkInsert('Users', [{
       name: 'Иванов Иван',
       password:await bcrypt.hash('123456', 10),
       createdAt: new Date(),
       updatedAt: new Date()
      },
      {
        name: 'Петров Петр',
        password:await bcrypt.hash('654321', 10),
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name: 'Башкатов Анатолий',
        password:await bcrypt.hash('7777777', 10),
        createdAt: new Date(),
        updatedAt: new Date()
       }],{});
    
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete('Users');
    
  },
};
