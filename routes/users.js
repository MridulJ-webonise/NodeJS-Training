var express = require('express');
var router = express.Router();

let users = [
  {
    id : 1,
    name : "A"
  },
  {
    id : 2,
    name : "B"
  },
  {
    id : 3,
    name : "C"
  },
  {
    id : 4,
    name : "D"
  },
]

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(users);
});

router.post("/", (req, res) => {
  let newUser = req.body;
  users.push(newUser);
  res.send({
    message: "Post Successfull",
    users,
  });
});

router.put("/", (req, res) => {
  let updatedUser = req.body;

  let newUsers = users.map((userObj) => {
    if (userObj.id == updatedUser.id) return updatedUser;
    else return userObj;
  });

  res.send({
    message: "Updated success",
    newUsers,
  });
});

router.delete("/ ", (req, res) => {
  let deletedUser = req.body;

  let newUsers = users.filter((userObj) => {
    return userObj.id != deletedUser.id;
  });

  res.send({
    message: "Delete success",
    newUsers,
  });
});

module.exports = router;
