const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Order = sequelize.define('order', {
  orderId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalPrice: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
}, {
  timestamps: true, // Enables createdAt and updatedAt
  // Additional options can be added here
});

// If you want to set up associations, you can do so after defining the model
// Order.associate = (models) => {
//   Order.belongsTo(models.User, {
//     foreignKey: 'userId',
//     as: 'user',
//   });
// };

module.exports = Order;
