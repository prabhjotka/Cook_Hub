const { Pool } = require("pg");

const addFavourite = async (userId, itemId) => {
  try {
    const result = await pool.query('INSERT INTO favorites (user_id, item_id) VALUES ($1, $2) RETURNING id', [userId, itemId]);
    return result.rows[0].id; // Return the ID of the newly added favorite
  } catch (error) {
    console.error('Error adding favorite:', error.message);
    throw error;
  }
};

const getFavourites = async () => {
  try {
    const results = await pool.query('SELECT * FROM favorites');
    return results.rows; // Return an array of favorites
  } catch (error) {
    console.error('Error getting favorites:', error.message);
    throw error;
  }
};

const deleteFavourite = async (favoriteId) => {
  try {
    const result = await pool.query('DELETE FROM favorites WHERE id = $1 RETURNING id', [favoriteId]);
    return result.rows.length > 0; // Return true if a row was deleted
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
