# **Coder Cook-Off API**

##### This is a JSON API with full CRUD functionality that allows users to access a database of recipes as well as search for a recipe by title or cook. This is a group project created by Anthony Maddox, Hema and Naira for the Software Engineering Immersive Program at General Assembly.

## Features:

###### You can either request an array of all recipes or search by title or cook resource.

#### Technologies Used:

###### Express, Mongoose, NodeJS, Mongodb.

#### URL for all recipes:

> ###### https://coders-cookout.herokuapp.com/recipes

## CRUD

### CREATE

#### POST Method _endpoint:_

> ###### /recipes

### READ

#### Search Request _endpoint:_

##### By cook:

> ###### /recipes/cook/

##### Example Requests:

##### By title:

> ###### /recipes/title/

###### /recipes/title/Frozen%20Pizza

###### Example Response:

```
[
  {
    "_id": "5f29a06a7afbf200047df4dd",
    "title": "Frozen Pizza",
    "description": "A pizza you can make at home!",
    "ingredients": [
      {
        "_id": "5f29a06a7afbf200047df4de",
        "ingredient": "Pizza",
        "amount": "1"
      },
      {
        "_id": "5f29a06a7afbf200047df4df",
        "ingredient": "Extra cheese",
        "amount": "Half a bag"
      }
    ],
    "instructions": "Preheat the oven to the designated temperature on the pizza box. Take the pizza out of package, cover it with extra cheese and put in oven. Don't forget to set the timer for the time suggested on the box.",
    "picture": "https://cdn.pixabay.com/photo/2016/03/05/21/45/pizza-1239077_960_720.jpg",
    "cook": "Anthony",
    "__v": 0
  }
]

```

### UPDATE

#### PUT Method _endpoint:_

> ###### /recipes/:id

##### Example Requests:

###### /recipes/5f29a06a7afbf200047df4dd

#### POST New Ingredient Method _endpoint:_

##### Example Requests:

###### /recipes/5f29a06a7afbf200047df4dd/ingredients

### DELETE 

#### DELETE Method _endpoint:_

> ###### /recipe/:id

#### DELETE Ingredient by Recipe ID and ingredient ID Method _endpoint:_

> ###### /recipe/:id/ingredients/:id

##### Link to repo: _https://github.com/AnthonyMaddox/recipes-group-project-backend_

#### Credits:

##### Authors: 
###### Anthony Maddox: https://github.com/AnthonyMaddox
###### Naira Reyes: https://github.com/naireyes
###### Hema Omprakash: https://github.com/hemao
###### All knowledge was gained under the study of Noah Clark and Allison Johnson at General Assembly. 
