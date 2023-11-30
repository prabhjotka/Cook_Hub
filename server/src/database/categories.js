const {Pool} = require("pg");

module.exports = function(pool) {

  const getcategories= function() {
    const sql = "select * from Categories order by id";

    return pool.query(sql)
      .then(res => {
        return res.rows;
      });
  };

  return {getcategories};

};