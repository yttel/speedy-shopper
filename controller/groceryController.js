const db = require("../models");

const resolveToJSON = (sqlzeArr) => {
  return Promise.resolve(sqlzeArr.map(foo=> foo.toJSON()));
};

const groceryController = {

  //get all items for edit screen
  allItems: function () {
    return db.Item.findAll({}).then(dbitems => resolveToJSON(dbitems));
  },

  //get all items for shop screen
  allByHousehold: function (householdID) {
    return db.ListItem.findAll({
      where: {
        HouseholdId: householdID,
      },
      include: [{model:db.Item}]
    }).then(dbitems => resolveToJSON(dbitems));
  },

  //get items by category for edit
  //takes catID
  itemsByCategory:  function (catID) {
    return db.Item.findAll({
      where: {
        CategoryId: catID
      }
    }).then(dbitems => resolveToJSON(dbitems));
  },

  //all categories 
  allCategory: function () {
    return db.Category.findAll({}).then(dbitems => resolveToJSON(dbitems));
  },

  //get items by category for shop?

  //new category
  addCategory: function (catName) {
    return db.Category.create({
      name: catName
    })
      .then(dbitems => console.log(dbitems));
  },

  //new item
  addItem: function (itemName, catID) {
    return db.Category.create({
      name: itemName,
      CategoryId: catID
    })
      .then(dbitems => resolveToJSON(dbitems));
  },

  //item obtained
  gotIt: function (lineID) {
    return db.ListItem.update({
      obtained: true
    },{
      where: {
        listitem: lineID
      }
    })
      .then(dbitems => console.log(dbitems));
  },

  //get it next time
  nextTime: function (lineID) {
    return db.ListItem.update({
      nextTime: true
    },{
      where: {
        listitem: lineID
      }
    })
      .then(dbitems => console.log(dbitems));
  },
  //new household

  //delete item, only if not currently on a list

  //delete category, non cascade (or change to other)

  //rename item

  //rename user

  //rename category

  //add all items in recipe to list
  //takes in userID, recipeID

  //fuzzy search for items that match
};

module.exports = groceryController;