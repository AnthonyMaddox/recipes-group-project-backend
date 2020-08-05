const app = require("express")();
const Recipe = require("./models/Recipe");
const bodyParser = require("body-parser");
app.use(bodyParser.json());

//create

app.post("/recipes", (req, res) => {
  console.log("req.body: ", req.body);
  Recipe.create(req.body).then((recipe) => {
    console.log(recipe);
    res.json(recipe);
  });
});

//read

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

app.get("/recipes/cook/:cook", (request, response) => {
  Recipe.find({ cook: request.params.cook }).then((recipes) => {
    response.json(recipes);
  });
});
app.get("/recipes/title/:title", (request, response) => {
  Recipe.find({ title: request.params.title }).then((recipes) => {
    response.json(recipes);
  });
});

//query string /search?<key>=<value>

app.get("/recipes/search", (req, res) => {
  if (req.query.title) {
    Recipe.find({ title: req.query.title }).then((city) => {
      res.json(city);
    });
  } else if (req.query.cook) {
    Recipe.find({ cook: req.query.cook }).then((recipe) => {
      res.json(recipe);
    });
  } else {
    Recipe.find({}).then((recipe) => {
      res.json(recipe);
    });
  }
});

// delete

app.delete("/recipes/:id", (req, res) => {
  Recipe.findOneAndRemove({ _id: req.params.id }).then((recipe) => {
    res.json(recipe);
  });
});

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
