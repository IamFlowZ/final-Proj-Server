"use strict";
var express = require("express");
var router = express.Router();


const users = [
  { userId: 1, lobbyId: [1,2], lobbyScore: [1,4] },
  { userId: 2, lobbyId: [1], lobbyScore: [2] },  
  { userId: 3, lobbyId: [1,3], lobbyScore: [3,4] }, 
  { userId: 4, lobbyId: [1,2], lobbyScore: [4,1] }, 
  { userId: 5, lobbyId: [2,3], lobbyScore: [2,2] },
  { userId: 6, lobbyId: [2], lobbyScore: [3] }
];    
   
router.get('/users', function (req, res, next) {
    res.json(users);
});

router.get('/users/:id', function (req, res, next) {
  console.log("recieved request");
    var id = parseInt(req.params['id']);
    var user = findUser(id);
    if (user) {
      res.json(user);
    }
    else {
      res.sendStatus(404);
      res.json('user not found');
    }    
});

//is pushing the new thing as its own array rather than adding it to the existing one
router.post('/users', function(req, res, next) {
  const newUser = req.body;
  console.log(newUser);
  if (newUser.userId != null) {
    var user = findUser(newUser.userId);
    user.lobbyId = body.lobbyId;
    user.lobbyScore = body.lobbyScore;
  }
  else {
    console.log("user search unsucessful");
    newUser.userId = ++users.length;
    users.push(newUser);
  }
  res.sendStatus(200);
}); 

router.delete('/users/:id', function(req, res, next) {
  var id = parseInt(req.params['id']);
  if(!findUser(id)) {
    res.sendStatus(404);
  }
  else {
    var user = findUser(id);
    users.splice(users[user],1);
  }
  res.sendStatus(200);
}); 

function findUser(id) {
  var matches = users.filter(function(user) {
    return user.userId == id;
  })
  return matches.length ? matches[0] : null; 
};



module.exports = router;