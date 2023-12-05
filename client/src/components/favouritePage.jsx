import React from 'react';
import Favourite from './favourite';

 
const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('/api/favorites/getFavorites');
        if (!response.ok) {
          throw new Error('Failed to fetch favorites');
        }

        const data = await response.json();
        setFavorites(data.favorites);
      } catch (error) {
        console.error('Error fetching favorites:', error.message);
        // Handle error or display a user-friendly message
      }
    };

    // Call the fetchFavorites function
    fetchFavorites();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      <h2>Your Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>
    </div>
  );
};



const FavouritePage = () => {
  return (
    <div>
      <h1>Welcome to Your Favourites Page</h1>
      <Favourite />
      
    </div>
  );
};

export default FavouritePage;
