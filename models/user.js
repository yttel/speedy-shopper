
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: { //stores an href string to image
      type: DataTypes.STRING
    }
  });

  User.associate = function(models){
    User.hasMany(models.Household);
  };

  return User;
};
