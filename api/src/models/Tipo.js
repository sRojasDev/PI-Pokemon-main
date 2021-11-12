const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {  //la función recibe una instancia de sequelize
    return sequelize.define('Tipo', {

    name: {
        type: DataTypes.ENUM,
        values: [/*arreglo de posibles valores que admite */'agua','tierra','fuego'],
        allowNull: false,
        unique: true,
        },
    id: { 
        type: DataTypes.UUID,
        allowNull: false,
        unique: true,
        primaryKey: true,
        },  
    });
};