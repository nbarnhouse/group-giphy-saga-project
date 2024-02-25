import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Favorites.css';

export default function Favorites() {
  const dispatch = useDispatch();
  const currentFavorites = useSelector((store) => store.favorites);

  //Initial load of component
  useEffect(() => {
  // body of effect
  console.log('Testing initial load of component');
  // api call
  dispatch({ type: 'GET_FAVORITES' });
  }, []);

  return (
  <>  
    <div className="favorites-view-div">
      <h1>Our Favorite Gifs!</h1>
    </div>
    <div className="favorites-container">
    {currentFavorites.map((image) => (
      <div className="favorites-item" key={image.id}>
        <img
          className="favorites-display"
          src={image.url}
          alt={image.title}
        />
      </div>
    ))}
    </div>
  </>
  );
}
