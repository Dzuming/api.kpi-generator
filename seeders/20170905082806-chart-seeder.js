'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Charts', [{
      title: 'test',
      createdAt: '22-04-3222',
      updatedAt: '22-04-3222',
    },
    {
      title: 'test2',
      createdAt: '22-04-3222',
      updatedAt: '22-04-3222',
    }], {});

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Charts', null, {});
  }
};
