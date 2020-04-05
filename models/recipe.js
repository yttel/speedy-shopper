
module.exports = function(sequelize, DataTypes) {
  const Recipe = sequelize.define("User", {
    recipeID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  Recipe.associate = function(models){
    Recipe.hasMany(models.List_Item);
  };

  return Recipe;
};
