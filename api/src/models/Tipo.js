const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {  //la función recibe una instancia de sequelize
    return sequelize.define('tipo', {

    name: {
        type: DataTypes.ENUM,
        values: [
            'normal', 'fighting', 'flying','poison', 
            'ground', 'rock','bug', 'ghost',  'steel', 'fire', 
            'water', 'grass', 'electric', 'psychic',  'ice',
            'dragon',  'dark',   'fairy', 'unknown',  'shadow',
        ],
        allowNull: false,
        unique: true,
        },
        id: {
            type: DataTypes.UUID,
            allowNull: false,
            unique: true,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV1, 
        },  
    });
};