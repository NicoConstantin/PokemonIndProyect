const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  let pokemon = sequelize.define('pokemon', {
    id:{
      type:DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      validate:{
        isUUID: 4
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    img:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    hp:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min: 0
      }
    },
    str:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min: 0
      }
    },
    def:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min: 0
      }
    },
    agi:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min: 0
      }
    },
    height:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min: 0
      }
    },
    weight:{
      type:DataTypes.INTEGER,
      allowNull: false,
      validate:{
        min: 0
      }
    },

  });
  return pokemon;
};
