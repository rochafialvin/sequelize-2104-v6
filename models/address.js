"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {

    static associate(models) {
      Address.belongsTo(models.User, { foreignKey: "userId", as: "addresses" });
    }
  }
  Address.init(
    {
      addressId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "userId",
        },
      },
      name: {
        type: DataTypes.STRING(200),
      },
    },
    {
      sequelize,
      modelName: "Address",
      tableName: "addresses",
    }
  );
  return Address;
};
