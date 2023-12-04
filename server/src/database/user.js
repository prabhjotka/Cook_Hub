const {Pool} = require("pg");
const jwt = require('jsonwebtoken');
module.exports = function(pool) {

  const getuser= function() {
    const sql = "select username,password from users";

    return pool.query(sql)
      .then(res => {
        return res.rows;
      });
  };


  const getUserCredentials = function (res, username, password) {
    const sql = 'SELECT * FROM users WHERE username = $1 AND password = $2';
  
    pool.query(sql, [username, password])
      .then(result => {
        if (result.rows.length === 1) {
          // If authentication is successful, generate a JWT token
          const token = jwt.sign({ username }, 'yourSecretKey', { expiresIn: '1h' });
  
          // Respond to the client with the token
          res.json({ token });
        } else {
          // Authentication failed
          res.status(401).json({ error: 'Invalid username or password' });
        }
      })
      .catch(err => {
        console.error(err.message);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  };
  
  return { getUserCredentials, getuser };


};