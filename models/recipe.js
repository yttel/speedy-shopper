
module.exports = function(sequelize, DataTypes) {
  const Recipe = sequelize.define("Recipe", {
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

  Recipe.associate = function(models){
    Recipe.belongsToMany(models.ListItem, {
      through: "ItemRecipe"
    });
  };

  return Recipe;
};
