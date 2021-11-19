var express = require('express');
var router = express.Router();
const query = require( '../services/db' );
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

router.get('/', async function(req, res) {
  
    const user = await query(`SELECT * FROM UserData;`)
    res.json(user);
    // res.send(user);
});

router.post("/", async(req, res) => {
  let {UserID, Name, Age}= req.body;

    await query(`INSERT INTO UserData VALUES ( ?, ?, ? );`,[UserID,Name,Age]);
    res.send({
      message: "Post Successfull",
      newUser : req.body
    });
});

router.put("/", async(req, res) => {
  let {UserID, Name, Age} = req.body;

    await query(`UPDATE UserData SET Name=?, Age=? where UserID=?; `,[Name,Age,UserID] )
    res.send({
      message: "Update Successfull",
      updatedUser : req.body
    });
});

router.delete("/", async(req, res) => {
  let {UserID} = req.body;

    await query(`DELETE FROM UserData where UserID = ?`, [UserID])
    res.send({
      message: "Delete success",
    });
});

module.exports = router;
