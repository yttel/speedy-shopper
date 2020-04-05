module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", {
    itemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  // Item.associate = function(models) {
  //   Item.belongsTo(models.Category, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  //   Item.belongsToMany(models.Recipe, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  //   Item.belongsToMany(models.ListItem, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };

  return Item;
};
