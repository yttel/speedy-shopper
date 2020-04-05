
module.exports = function(sequelize, DataTypes) {
  const Household = sequelize.define("Household", {
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

  Household.associate = function(models){
    Household.hasMany(models.ListItem);

    Household.belongsTo(models.User);
  };

  return Household;
};
