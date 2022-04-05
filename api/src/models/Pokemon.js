const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  return sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    url: {
      type: DataTypes.TEXT,
    },

    //vida
    hp: {
      type: DataTypes.INTEGER
    },

    //ataque
    attack: {
      type: DataTypes.INTEGER
    },

    //defensa 
    defense: {
      type: DataTypes.INTEGER
    },

    //altura
    height: {
      type: DataTypes.DECIMAL
    },

    //peso
    weight: {
      type: DataTypes.DECIMAL
    },

    //velocidad
    speed: {
      type: DataTypes.INTEGER
    }
  });
};
