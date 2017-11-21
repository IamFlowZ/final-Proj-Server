"use strict";
var express = require("express");
var router = express.Router();

const lobbies = [
    {lobbyId: 1, userIds: [1,2,3,4], userScores: [2,1,4,3], prompts: ["cat", "dog", "firetruck"] },
    {lobbyId: 2, userIds: [4,5,6,1], userScores: [4,3,1,2], prompts: ["cat", "dog", "firetruck"] },
    {lobbyId: 3, userIds: [3,5], userScores: [4,2], prompts: ["cat", "dog"] }
]

router.get('/lobbies', function (req, res, next) {
    res.json(lobbies);
});

router.get('/lobbies/:id', function (req, res, next) {
    var id = parseInt(req.params['id']);
    var lobby = findlobby(id);
    if (lobby) {
      res.json(lobby);
    }
    else{
      res.json('lobby not found');
    }    
  });

//is pushing the new thing as its own array rather than adding it to the existing one
router.post('/lobbies', function (req, res, next) {
    const newLobby = req.body;
    console.log(newLobby);
    if(newLobby.lobbyId) {
        var lobby = findLobby(this.newLobby.lobbyId);
        this.lobby.userScores = this.newLobby.userScores;
        this.lobby.userIds = this.newLobby.userIds;
        this.lobby.prompts = this.newLobby.prompts;
    }
    else {
        this.newLobby.lobbyId = ++lobbies.length;
        lobbies.push(newLobby);
    }
    res.sendStatus(200);
});

router.delete('/lobbies', function(req, res, next) {
    var id = parseInt(req.params['id']);
});


  function findlobby(id) {
      var matches = lobbies.filter(function(lobby) {
          return lobby.lobbyId == id;
      })
      return matches.length ? matches[0] : null;
  }


module.exports = router;