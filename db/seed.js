const recipeData = require("./recipeData.json");
const userData = require("./userData.json");

const Recipe = require("../models/Recipe");
const User = require("../models/User");

// Recipe.deleteMany({}).then(() => {
//   Recipe.create(recipeData)
//     .then((recipes) => {
//       console.log(recipes);
//       process.exit();
//     })
//     .catch((err) => {
//       console.log(err);
//       process.exit();
//     });
// });
User.deleteMany({}).then(() => {
  User.create(userData)
    .then((users) => {
      console.log(users);
      process.exit();
    })
    .catch((err) => {
      console.log(err);
      process.exit();
    });
});
