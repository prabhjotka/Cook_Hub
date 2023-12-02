const { Pool } = require("pg");

module.exports = function(pool) {

  const getrecipes = function() {
    const sql = "select * from Recipes order by id  desc";

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

  const addrecipes = function({ name, description, instructions, nutritional_information, image_url, category_id, user_id }) {
    const sql = `insert into Recipes
     ({ name, description, instructions, nutritional_information, image_url, category_id, user_id }) 
    values ($1,$2,$3,$4,$5,$6,$7) returning *`;

    const values = [name, description, instructions, nutritional_information, image_url, category_id, user_id];
    return pool.query(sql, values)
      .then(res => {
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