import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Search.css';

export default function Search() {
  const dispatch = useDispatch();
  const currentGiphyResults = useSelector((store) => store.searchResults);
  const [searchInput, setSearchInput] = useState({ name: '' });
  const [favorites, setFavorites] = useState([]);

  const searchBtnClk = (event) => {
    event.preventDefault();
    console.log('Search Button Clicked!');
    dispatch({ type: 'GET_GIPHY', payload: searchInput });
    setSearchInput({ name: '' });
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchBtnClk(event);
    }
  };

  const addFavoriteStatus = (image) => {
    console.log(`Add/remove Favorite: ${image.id}`);
    if (favorites.includes(image.id)) {
      // Remove from favorites
      setFavorites(favorites.filter((id) => id !== image.id));

      //Axios DELETE call here
      axios.delete(`/api/favorites/${image.id}`)
      .then((response) => {
        //Don't think we need anything here, yes?
      })
      .catch((err) => {
          console.error('ERROR in client favorites DELETE:', err);
      });
    } else {
      // Add to favorites
      setFavorites([...favorites, image.id]);

      //Axios POST call here
      axios.post('/api/favorites', image)
      .then((response) => {
        //Do we need anything here?? I don't think so?
      })
      .catch((err) => {
        console.error('ERROR in client favorites POST:', err);
      });
    }
  };
  console.log('Favs:', favorites);
  return (
    <div className="search-view-div">
      {/* <h1> I am a search view placeholder</h1> */}
      <div className="search-div">
        {/* <label htmlFor="searchInput">Giphy Search Criteria:</label> */}
        <input
          type="text"
          id="searchInput"
          placeholder="Giphy Search String..."
          value={searchInput.name}
          onChange={(event) =>
            setSearchInput({ ...searchInput, name: event.target.value })
          }
          onKeyDown={handleKeyDown}
        />
        <button onClick={searchBtnClk}>SEARCH</button>
      </div>
      {/* Test Output - Delete when replaced by (Search View - Display the results on the DOM.) Task */}
      {/* <div className="test-results-div">
        {currentGiphyResults.map((giphyResult) => {
          return <p key={giphyResult.id}>{JSON.stringify(giphyResult)}</p>;
        })}
      </div> */}
      <div className="results-container">
        {currentGiphyResults.map((image) => (
          <div className="results-item" key={image.id}>
            <img
              className="results-display"
              src={image.small_url}
              alt={image.title}
            />
            <button
              className={`like-format ${
                favorites.includes(image.id) ? 'favorited' : ''
              }`}
              onClick={() => addFavoriteStatus(image)}
            >
              {favorites.includes(image.id) ? 'Favorited' : 'Like'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
