
const express = require('express');
const router = express.Router();

const { addFavourite, getFavourites, deleteFavourite } = require('../database/favourites');

// Add a favorite
router.post('/addFavourite/:userId/:itemId', async (req, res) => {
  const userId = req.params.userId;
  const itemId = req.params.itemId;

  try {
    const newFavoriteId = await addFavourite(userId, itemId);
    res.status(201).json({ id: newFavoriteId, message: 'Favorite added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Get all favorites
router.get('/getFavourites', async (req, res) => {
  try {
    const favorites = await getFavourites();
    res.status(200).json({ favorites });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Delete a favorite
router.delete('/deleteFavourite/:favoriteId', async (req, res) => {
  const favoriteId = req.params.favoriteId;

  try {
    const isDeleted = await deleteFavourite(favoriteId);
    if (isDeleted) {
      res.status(200).json({ message: 'Favorite deleted successfully' });
    } else {
      res.status(404).json({ error: 'Favorite not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;