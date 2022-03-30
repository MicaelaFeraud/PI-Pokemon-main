const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },

    idPokemon: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    //vida
    health: {
      type: DataTypes.INTEGER
    },

    //fuerza
    strength: {
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
