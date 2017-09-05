'use strict';
module.exports = function(sequelize, DataTypes) {
  var Chart = sequelize.define('Chart', {
    title: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Chart;
};