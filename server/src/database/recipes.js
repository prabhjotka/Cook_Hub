const { Pool } = require("pg");

module.exports = function(pool) {

  const getrecipes = function() {
    const sql = "select * from Recipes  order by id  desc";

    return pool.query(sql)
      .then(res => {
        return res.rows;
      });
  };


  const getrecipesBycategory = function(id) {
    const sql = "select * from Recipes where category_id=($1)";
    return pool.query(sql, [id])
      .then(res => {
        return res.rows;
      });
  };

  const getrecipesByname = function(name) {
    const searchName = name.search;
    const cleanSearch = `%${searchName.replace(/\s/g, '')}%`;
    const sql = `SELECT * FROM Recipes WHERE REPLACE(name, ' ', '') ILIKE $1`
    return pool.query(sql, [cleanSearch])
      .then(res => {
        return res.rows;
      });
  };

  const addrecipes = function({ name, description, instructions, calories, protein, carbs, image_url, ingredients_list, category_id }) {
    const caloriesInt = parseInt(calories);
    const proteinInt = parseInt(protein);
    const carbsInt = parseInt(carbs);
    const sql = `
      INSERT INTO Recipes
      (name,description,instructions,calories,protein,carbs,image_url,ingredients_list,category_id,user_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8,$9,$10)
      RETURNING *`;

    const values = [name, description, instructions, caloriesInt, proteinInt, carbsInt, image_url, ingredients_list, category_id, 1];

    return pool.query(sql, values)
      .then(res => {
        console.log('Query executed successfully:', res.rows[0]);
        return res.rows[0];
      });
  };


  const deleterecipes = function(id) {
    const sql = 'delete from Recipes where id=($1) returning *';

    return pool.query(sql, [id])
      .then(res => {
        return res.rows[0];
      });
  };

  return { getrecipes, addrecipes, deleterecipes, getrecipesBycategory, getrecipesByname };

};