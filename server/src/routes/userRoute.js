const express = require('express');
const router = express.Router();


const routes = function(pool) {
  const {getuser,getUserCredentials} = require('../database/user')(pool);

  router.get("/", (req, res) => {
   
    getuser().then(data => {
      res.json(data);
    })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({error: err.message});
      });
  });
  router.post("/", (req, res) => {
    const { username, password } = req.body;
    getUserCredentials(res, username, password);
  });




  return router;
};

module.exports = routes;