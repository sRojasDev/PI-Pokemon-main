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
      
    },
    fuerza: {
      type: DataTypes.INTEGER,
      
    },
    defensa: {
      type: DataTypes.INTEGER,
      
    },
    velocidad: {
      type: DataTypes.INTEGER,
      
    },
    altura: {
      type: DataTypes.INTEGER,
      
    },
    peso: {
      type: DataTypes.INTEGER,
      
    },
  }, { 
    timestamps:false,
  });
};
