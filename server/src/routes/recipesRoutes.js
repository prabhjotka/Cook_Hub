const express = require('express');
const router = express.Router();

const routes = function(pool) {
  const {getrecipes, addrecipes, deleterecipes,getrecipesBycategory,getrecipesByname} = require('../database/recipes')(pool);

  router.get("/", (req, res) => {
    getrecipes().then(data => {
      res.json(data);
    })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({error: err.message});
      });
  });
  router.get("/search_recipe", (req, res) => {
    const name= req.query;
    getrecipesByname(name).then(data => {
      res.json(data);
    })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({error: err.message});
      });
  });

  router.get("/:id", (req, res) => {
    const id = req.params.id;
    getrecipesBycategory(id).then(data => {
      res.json(data);
    })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({error: err.message});
      });
  });

  router.post("/", (req, res) => {
    console.log(req.body);
    const { name,description,instructions,calories,protein,carbs,image_url,ingredients_list,category_id} = req.body;
    addrecipes({ name,description,instructions,calories,protein,carbs,image_url,ingredients_list,category_id})
    .then(data => {
      res.json(data);
    })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({error: err.message});
      });
  });

  router.delete("/:id", (req, res) => {
    const id = req.params.id;
    deleterecipes(id).then(data => {
      res.json(data);
    })
      .catch(err => {
        console.log(err.message);
        res.status(500).json({error: err.message});
      });
  });

  return router;
};

module.exports = routes;