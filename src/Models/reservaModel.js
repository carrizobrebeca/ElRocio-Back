const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Reserva', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    dateStart: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    dateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    bookingPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM('success', 'pending', 'failure'),
      allowNull: false,
      defaultValue: 'pending', // Valor por defecto para 'status'
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 0, // Asegura que el stock sea mayor o igual a 0
      },
    },
    
  }, {
   
    timestamps: false, // Habilita los timestamps (createdAt y updatedAt)
  });
};
