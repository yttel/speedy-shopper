
module.exports = function(sequelize, DataTypes) {
  const Category = sequelize.define("User", {
    categoryID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    catName: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  Category.associate = function(models){
    Category.hasMany(models.Item);
  };

  return Category;
};
