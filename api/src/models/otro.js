const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {  //la función recibe una instancia de sequelize
    sequelize.define('otro', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        },
    });
};