const express = require('express')
const router = express.Router()

const jwt = require('jwt-simple')

//bring in the passport and JWT built out in config.
const passport = require('../config/passport')
const config = require('../config/config')

//In order to query the database for users and create new users, 
//we'll need to require the User schema built out in the models folder.
const mongoose = require('../models/User')
const User = mongoose.model('User')

const bodyParser = require("body-parser")
router.use(bodyParser.json())

/* build out functionality for a post request to /users/signup. The logic involved is:
Receive sign-up form input (email and password) from the browser
Query the database to see if another user has used that email
If not, create an instance in the database with new user email and password
Generate a JWT holding the user id
Send the JWT back to the browser */

router.post('/signup', (req, res) => {
    if (req.body.email && req.body.password) {
       
      let newUser = {
        email: req.body.email,
        password: req.body.password
      }
   
      User.findOne({ email: req.body.email })
        .then((user) => {
          if (!user) {
            User.create(newUser)
              .then(user => {
                if (user) {
                  var payload = {
                    id: newUser.id
                  }
                  var token = jwt.encode(payload, config.jwtSecret)
                  res.json({
                    token: token
                  })
                } else {
                  res.sendStatus(401) 
                }
              })
          } else {
            console.log("Email already exists")
            res.status(401).json({
              message: 'Email already exists'
            }); 
          }
        })
    } else {
      res.sendStatus(401)  
    }

})

/* create a method to handle post requests to create a token when a user logs in. It will:
Receive sign-up form input (email and password) from the browser
Query the database for that user
Verify the password sent from the browser matches the password in the database
Generate a JWT holding the user id
Send the JWT back to the browser
*/

router.post('/login', (req, res) => {
    if (req.body.email && req.body.password) {
      User.findOne({ email: req.body.email }).then(user => {
        if (user) {
          if (user.password === req.body.password) {
            var payload = {
              id: user.id
            }
            var token = jwt.encode(payload, config.jwtSecret)
            res.json({
              token: token
            })
          } else {
            res.sendStatus(401)
          }
        } else {
          res.sendStatus(401)
          
        }
      })
    } else {
      res.sendStatus(401)
      
    }
  })



module.exports = router