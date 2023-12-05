
const { addFavourite, getFavourites, deleteFavourite } = require('./favourites');

async function test() {
  try {
    // Add a favorite
    const newFavoriteId = await addFavourite(1, 101);
    console.log('New Favorite ID:', newFavoriteId);

    // Get all favorites
    const allFavorites = await getFavourites();
    console.log('All Favorites:', allFavorites);

    // Delete a favorite
    const isDeleted = await deleteFavourite(newFavoriteId);
    console.log('Is Deleted:', isDeleted);

    // Get all favorites again after deletion
    const remainingFavorites = await getFavourites();
    console.log('Remaining Favorites:', remainingFavorites);
  } catch (error) {
    console.error('Test failed:', error.message);
  }
}

test();

