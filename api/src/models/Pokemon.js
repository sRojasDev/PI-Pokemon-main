const { DataTypes } = require('sequelize');
const { options } = require('superagent');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
 return sequelize.define('pokemon', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: true,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV1, 
    },
    vida: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuerza: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defensa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    velocidad: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    altura: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    peso: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};
