import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Favourite = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      try {
        const response = await fetch('/api/favourites/getFavourites');
        if (!response.ok) {
          throw new Error('Failed to fetch favourites');
        }

        const data = await response.json();
        setFavourites(data.favourites);
      } catch (error) {
        console.error('Error fetching favourites:', error.message);
        // Handle error or display a user-friendly message
      }
    };

    // Call the fetchFavourites function
    fetchFavourites();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  const handleFavouriteClick = async (itemId) => {
    try {
      const isFavourite = favourites.some((favourite) => favourite.id === itemId);

      if (isFavourite) {
        // Remove from favourites
        await fetch(`/api/favourites/deleteFavourite/${itemId}`, {
          method: 'DELETE',
        });
      } else {
        // Add to favourites
        await fetch(`/api/favourites/addFavourite/1/${itemId}`, {
          method: 'POST',
        });
      }

      // Refresh the list of favorites after making changes
      const updatedFavorites = await fetch('/api/favourites/getFavourites').then((response) =>
        response.json()
      );
      setFavourites(updatedFavourites.favourites);
    } catch (error) {
      console.error('Error handling favourite click:', error.message);
      // Handle error or display a user-friendly message
    }
  };

  return (
    <div>
      <h2>Your Favourites</h2>
      <ul>
        {favourites.map((favourite) => (
          <li key={favourite.id}>
            {favourite.name}{' '}
            <button onClick={() => handleFavouriteClick(favourite.id)}>
  <FontAwesomeIcon icon={faHeart} />
</button>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favourite;
