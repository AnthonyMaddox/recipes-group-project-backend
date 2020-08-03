const app = require("express")();
const Recipe = require("./models/Recipe");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get("/", (req, res) => {
  Recipe.find({}).then(() => {
    res.redirect("/recipes");
  });
});
app.get("/recipes", (req, res) => {
  Recipe.find({}).then((recipes) => {
    res.json(recipes);
  });
});
app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
