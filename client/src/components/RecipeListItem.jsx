
import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useAuth } from './AuthContext';

function RecipeListItem(props) {
  const { user } = useAuth();
  const { id, name, description, image_url } = props.recipe;
  const imageUrl = `/${image_url}`;
  return (

    <div className="col">

      <div className="card border-light mb-3">
        <div style={{ height: "400px", overflow: 'hidden' }}>
          <img src={imageUrl} className="card-img-top" alt={name} />
          {user && (
            <button
              onClick={() => props.handleFavoriteToggle(id)}
              style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                color: props.isFavorite ? 'red' : 'black',
                background: 'transparent',
                border: 'none',
              }}
            >
              {props.isFavorite ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
            </button>
          )}

        </div>

        <div className="card-body">
          <h5 className="card-title"> <Link to={`/recipes/${id}`}>
            {name}
          </Link></h5>

          {description && (<p className="card-text">{description}</p>)}
        </div>
      </div>
      {/* <button onClick={() => props.handleFavoriteToggle(id)}>
         {props.isFavorite ? 'Remove from Favorites' : 'Add to Favorites'} 
      </button> */}
      {/* <button onClick={() => props.handleFavoriteToggle(id)} style={{ color: props.isFavorite ? 'red' : 'black' }}>
  {props.isFavorite ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
</button> */}

    </div>
  );
}

export default RecipeListItem;


