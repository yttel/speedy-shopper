const groceryController = require("./controller/groceryController");
const db = require("./models");

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.itemsByCategory(1)
//     .then((things) => { 
//       const jsonThings = things.map((thing) => thing.toJSON());
//       console.log(jsonThings);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.itemsByCategory(1)
//     .then((things) => { 
//       console.log(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.allByHousehold(2)
//     .then((things) => { 
//       console.log(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.allCategory()
//     .then((things) => { 
//       console.log(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.addCategory("sweets")
//     .then((things) => { 
//       console.log(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

// db.sequelize.sync({ force: false }).then(function() {
//   groceryController.gotIt(9)
//     .then((things) => { 
//       console.log(things);
//       return Promise.resolve();
//     }).then(() => db.sequelize.close());
// });

db.sequelize.sync({ force: false }).then(function() {
  groceryController.nextTime(5)
    .then((things) => { 
      console.log(things);
      return Promise.resolve();
    }).then(() => db.sequelize.close());
});
