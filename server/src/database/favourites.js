
const { pool } = require('./db'); // Assuming you have a database connection pool in db.js

const addFavourite = async (userId, itemId) => {
  try {
    const result = await pool.query('INSERT INTO favorites (user_id, item_id) VALUES (?, ?)', [userId, itemId]);
    return result.insertId; // Return the ID of the newly added favorite
  } catch (error) {
    console.error('Error adding favorite:', error.message);
    throw error;
  }
};

const getFavourites = async () => {
  try {
    const results = await pool.query('SELECT * FROM favorites');
    return results[0]; // Return an array of favorites
  } catch (error) {
    console.error('Error getting favorites:', error.message);
    throw error;
  }
};

const deleteFavourite = async (favoriteId) => {
  try {
    const result = await pool.query('DELETE FROM favorites WHERE id = ?', [favoriteId]);
    return result.affectedRows > 0; // Return true if a row was deleted
  } catch (error) {
    console.error('Error deleting favorite:', error.message);
    throw error;
  }
};

module.exports = {
  addFavourite,
  getFavourites,
  deleteFavourite,
};