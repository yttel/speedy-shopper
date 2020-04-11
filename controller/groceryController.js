const db = require("../models");

const resolveToJSON = (sqlzeArr) => {
  return Promise.resolve(sqlzeArr.map(foo=> foo.toJSON()));
};

const groceryController = {

  //==============
  /*-- CREATE --*/
  //==============

  //new category
  addCategory: function (catName) {
    return db.Category.create({
      name: catName
    })
      .then(dbitems => dbitems.toJSON());
  },

  //new listItem
  addListItem: function (hhID, itemID) {
    return db.ListItem.create({
      HouseholdId: hhID,
      ItemId: itemID
    })
      .then(dbitems => dbitems.toJSON());
  },

  //new item
  addItem: function (itemName, catID) {
    return db.Item.create({
      name: itemName,
      CategoryId: catID
    })
      .then(dbitems => dbitems.toJSON());
  },

  //new household
  addHousehold: function (hhName, userID) {
    return db.Household.create({
      name: hhName,
      UserId: userID
    })
      .then(dbitems => dbitems.toJSON());
  },

  //new recipe

  //============
  /*-- READ --*/
  //============

  //get all items for edit screen
  allItems: function () {
    return db.Item.findAll({}).then(dbitems => resolveToJSON(dbitems));
  },

  //all categories 
  allCategory: function () {
    return db.Category.findAll({}).then(dbitems => resolveToJSON(dbitems));
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
  itemsByCategory:  function (catID) {
    return db.Item.findAll({
      where: {
        CategoryId: catID
      }
    }).then(dbitems => resolveToJSON(dbitems));
  },

  //get items by category for shop?

  //get items in recipe to add to list

  //==============
  /*-- UPDATE --*/
  //==============

  //shopping trip done, clears all obtained ex default, leaves next time
  shopDone: function (hhID) {
    return this.allByHousehold(hhID).then((dbItems) => {
      //console.log(dbItems);
      for (const { listItem, isDefault, obtained, nextTime } of dbItems) {
        if (nextTime) {
          this.nextTimeFlip(false, listItem);
        }
        else if (obtained && isDefault) {
          this.gotItFlip(false, listItem);
        }
        else if (obtained && !isDefault) {
          this.removeListItem(listItem);
        }
      }
    });
  },  

  //edit item
  editItem: function (newVal, lineID) {
    return db.Item.update({
      name: newVal
    },{
      where: {
        id: lineID
      }
    })
      .then(dbitems => console.log(dbitems));
  },

  //edit category
  editCategory: function (newVal, lineID) {
    return db.Category.update({
      name: newVal
    },{
      where: {
        id: lineID
      }
    })
      .then(dbitems => console.log(dbitems));
  },

  //edit household
  editHousehold: function (newVal, lineID) {
    return db.Household.update({
      name: newVal
    },{
      where: {
        id: lineID
      }
    })
      .then(dbitems => console.log(dbitems));
  },

  //edit recipe

  //add all items in recipe to list
  //takes in userID, recipeID

  //========================
  /*-- BOOLEAN FLIPPERS --*/
  //========================

  //item obtained
  gotItFlip: function (newVal, lineID) {
    return db.ListItem.update({
      obtained: newVal
    },{
      where: {
        listitem: lineID
      }
    })
      .then(dbitems => console.log(dbitems));
  },

  //get it next time
  nextTimeFlip: function (newVal, lineID) {
    return db.ListItem.update({
      nextTime: newVal
    },{
      where: {
        listitem: lineID
      }
    })
      .then(dbitems => console.log(dbitems));
  },

  //default list
  defaultListFlip: function (newVal, lineID) {
    return db.ListItem.update({
      isDefault: newVal
    },{
      where: {
        listitem: lineID
      }
    })
      .then(dbitems => console.log(dbitems));
  },

  //===============
  /*-- DESTROY --*/
  //===============

  //delete list item
  removeListItem:  function (lineID) {
    return db.ListItem.destroy({
      where: {
        listitem: lineID
      }
    })
      .then(dbitems => console.log(dbitems));
  },

  //delete item, only if not currently on a list

  //delete category, non cascade (or change to other)

  //fuzzy search for items that match
};

module.exports = groceryController;