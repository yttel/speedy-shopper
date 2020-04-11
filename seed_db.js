require("dotenv").config();

process.env.NODE_ENV = "seedProduction";

const db = require("./models");

const users = ["letty", "mike", "bobby"];

const items = [{
  name: "milk",
  category: "dairy"
},{
  name: "creamer",
  category: "dairy"
},{  
  name: "cheese",
  category: "dairy"
},{  
  name: "butter",
  category: "dairy"
},{  
  name: "sour cream",
  category: "dairy"
},{  
  name: "cream cheese",
  category: "dairy"
},{
  name: "yogurt",
  category: "dairy"
},{
  name: "apples",
  category: "produce"
},{
  name: "oranges",
  category: "produce"
},{
  name: "lemons",
  category: "produce"
},{
  name: "limes",
  category: "produce"
},{
  name: "lettuce",
  category: "produce"
},{
  name: "avocado",
  category: "produce"
},{
  name: "banana",
  category: "produce"
},{
  name: "celery",
  category: "produce"
},{
  name: "cucumbers",
  category: "produce"
},{
  name: "carrots",
  category: "produce"
},{
  name: "broccoli",
  category: "produce"
},{
  name: "tomatoes",
  category: "produce"
},{
  name: "chicken breast",
  category: "meat"
},{
  name: "ground turkey",
  category: "meat"
},{
  name: "ground beef",
  category: "meat"
},{
  name: "steak",
  category: "meat"
},{
  name: "deli turkey",
  category: "meat"
},{
  name: "deli ham",
  category: "meat"
},{
  name: "salami",
  category: "meat"
},{
  name: "chicken wings",
  category: "meat"
},{
  name: "pork chops",
  category: "meat"
},{
  name: "white bread",
  category: "bakery"
},{
  name: "whole grain bread",
  category: "bakery"
},{
  name: "rye bread",
  category: "bakery"
},{
  name: "tortillas",
  category: "bakery"
},{
  name: "bagels",
  category: "bakery"
},{
  name: "muffins",
  category: "bakery"
},{
  name: "baguette",
  category: "bakery"
},{
  name: "donuts",
  category: "bakery"
},{
  name: "english muffins",
  category: "bakery"
},{
  name: "frozen broccoli",
  category: "frozen"
},{
  name: "frozen carrots",
  category: "frozen"
},{
  name: "frozen corn",
  category: "frozen"
},{
  name: "frozen green beans",
  category: "frozen"
},{
  name: "frozen strawberries",
  category: "frozen"
},{
  name: "frozen blueberries",
  category: "frozen"
},{
  name: "chicken nuggets",
  category: "frozen"
},{
  name: "french fries",
  category: "frozen"
},{
  name: "tater tots",
  category: "frozen"
},{
  name: "waffles",
  category: "frozen"
},{
  name: "cheese pizza",
  category: "frozen"
},{
  name: "ice cream sandwiches",
  category: "frozen"
},{
  name: "flour",
  category: "dry goods"
},{
  name: "sugar",
  category: "dry goods"
},{
  name: "cereal",
  category: "dry goods"
},{
  name: "brown sugar",
  category: "dry goods"
},{
  name: "pasta",
  category: "dry goods"
},{
  name: "rice",
  category: "dry goods"
},{
  name: "baking powder",
  category: "dry goods"
},{
  name: "baking soda",
  category: "dry goods"
},{
  name: "olive oil",
  category: "dry goods"
},{
  name: "crackers",
  category: "dry goods"
},{
  name: "toilet paper",
  category: "other"
},{
  name: "tin foil",
  category: "other"
},{
  name: "paper plates",
  category: "other"
},{
  name: "paper towels",
  category: "other"
},{
  name: "cat food",
  category: "other"
},{
  name: "dog food",
  category: "other"
},{
  name: "cat treats",
  category: "other"
},{
  name: "dog treats",
  category: "other"
}];

const categories = ["dairy", "produce", "meat", "bakery", "frozen", "dry goods", "other"];

const shoppingList = [{
  itemid: 5,
  household: 3
},{
  itemid:4,
  household: 2
},{
  itemid:8,
  household: 2
},{
  itemid:17,
  household: 1
},{
  itemid:9,
  household: 2
},{
  itemid:4,
  household: 1
},{
  itemid:14,
  household: 2
},{
  itemid:12,
  household: 3
},{
  itemid:1,
  household: 3
},{
  itemid:1,
  household: 2
},{
  itemid:6,
  household: 1 
},{
  itemid:15,
  household: 1 
},{
  itemid:18,
  household: 1 
},{
  itemid:20,
  household: 1 
},{
  itemid:29,
  household: 1 
},{
  itemid:33,
  household: 1 
},{
  itemid:36,
  household: 1 
},{
  itemid:42,
  household: 1 
},{
  itemid:47,
  household: 1 
},{
  itemid:45,
  household: 1 
},{
  itemid:48,
  household: 1 
},{
  itemid:52,
  household: 1 
},{
  itemid:56,
  household: 1 
},{
  itemid:59,
  household: 1 
},{
  itemid:61,
  household: 1 
},{
  itemid:64,
  household: 1 
},{
  itemid:62,
  household: 1   
}];

const seedMe = async () => {
  for (const user of users) {
    console.log(user);
    await db.User.create({email : user}).then((dbUser) => {
      //console.log(dbUser);
      db.Household.create({
        name: user, 
        UserId: dbUser.id
      });
    });
  }

  for (const category of categories) {
    await db.Category.create({name: category});
  }

  for (const item of items) {
    await db.Category.findOne({
      where: {
        name: item.category
      }
    }).then(async ({ id })=>{
      await db.Item.create({
        name: item.name,
        CategoryId: id
      });
    });
  }

  for (const {itemid, household} of shoppingList) {
    await db.ListItem.create({
      ItemId: itemid,
      HouseholdId: household
    });
  }

};

db.sequelize.sync({ force: true }).then(async function() {
  await seedMe();
  db.sequelize.close();
});