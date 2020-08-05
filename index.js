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

//query string /search?<key>=<value>

app.get("/recipes/search", (req, res) => {
  if (req.query.City) {
    Recipe.find({ title: req.query.title }).then((city) => {
      res.json(city);
    });
  } else if (req.query.State) {
    Recipe.find({ cook: req.query.cook }).then((recipe) => {
      res.json(recipe);
    });
  } else {
    Recipe.find({}).then((recipe) => {
      res.json(recipe);
    });
  }
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
