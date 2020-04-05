module.exports = function(sequelize, DataTypes) {
  const ListItem = sequelize.define("ListItem", {
    listItemID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: true,
    }, 
    obtained: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    isDefault: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    nextTime: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  ListItem.associate = function(models) {
    ListItem.belongsTo(models.Item, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return ListItem;
};
