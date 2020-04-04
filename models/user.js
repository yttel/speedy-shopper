
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }
  });

  // User.associate = function(models){
  //   User.hasMany(models.List_Item) 
  // };
  
  return User;
};
