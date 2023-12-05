import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Favorite = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await fetch('/api/favourites/getFavorites');
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

  const handleFavoriteClick = async (itemId) => {
    try {
      const isFavorite = favorites.some((favorite) => favorite.id === itemId);

      if (isFavorite) {
        // Remove from favorites
        await fetch(`/api/favourites/deleteFavorite/${itemId}`, {
          method: 'DELETE',
        });
      } else {
        // Add to favorites
        await fetch(`/api/favourites/addFavorite/1/${itemId}`, {
          method: 'POST',
        });
      }

      // Refresh the list of favorites after making changes
      const updatedFavorites = await fetch('/api/favourites/getFavorites').then((response) =>
        response.json()
      );
      setFavorites(updatedFavorites.favorites);
    } catch (error) {
      console.error('Error handling favorite click:', error.message);
      // Handle error or display a user-friendly message
    }
  };

  return (
    <div>
      <h2>Your Favorites</h2>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            {favorite.name}{' '}
            <button onClick={() => handlefavoriteClick(favorite.id)}>
  <FontAwesomeIcon icon={faHeart} />
</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorite;
