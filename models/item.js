module.exports = function(sequelize, DataTypes) {
  const Item = sequelize.define("Item", {
    id: {
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

  Item.associate = function(models) {

    Item.hasMany(models.ListItem,);
    
    Item.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });
    
    Item.belongsToMany(models.Recipe, {
      through: "ItemRecipe"
    });
  };

  return Item;
};
