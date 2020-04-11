const groceryController = require("./controller/groceryController");
const db = require("./models");

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.itemsByCategory(1)
//     .then((things) => { 
//       const jsonThings = things.map((thing) => thing.toJSON());
//       console.table(jsonThings);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.itemsByCategory(1)
//     .then((things) => { 
//       console.table(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.allByHousehold(2)
//     .then((things) => { 
//       console.table(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.allCategory()
//     .then((things) => { 
//       console.table(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.addCategory("sweets")
//     .then((things) => { 
//       console.table(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.gotIt(9)
//     .then((things) => { 
//       console.table(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.nextTime(5)
//     .then((things) => { 
//       console.table(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.addItem("coffee", 6)
//     .then((things) => { 
//       console.table(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.addHousehold("wren", 1)
//     .then((things) => { 
//       console.table(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.shopDone(2)
//     .then((things) => { 
//       console.table(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

db.sequelize.sync({ force: false }).then(function() {
  groceryController.addListItem(1, 9)
    .then((things) => { 
      console.table(things);
      return Promise.resolve();
    }).then(() => db.sequelize.close());
});