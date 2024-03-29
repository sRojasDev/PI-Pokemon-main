const { DataTypes } = require('sequelize');
const { options } = require('superagent');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
 return sequelize.define('pokemon', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: true,
      //defaultValue:"https://i.pinimg.com/originals/8f/89/24/8f89244bd8cea5358fe8484bceb34332.jpg",
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
    ofDB:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    peso: {
      type: DataTypes.INTEGER,
      
    },
  }, { 
    timestamps:false,
  });
};
