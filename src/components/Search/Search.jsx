import axios from 'axios';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import './Search.css';

export default function Search() {
  const dispatch = useDispatch();
  const history = useHistory();
  const currentGiphyResults = useSelector((store) => store.searchResults);
  const globalFavorites = useSelector((store) => store.favorites);
  const [searchInput, setSearchInput] = useState({ name: '' });
  const [favorites, setFavorites] = useState(globalFavorites);
  const [limit, setLimit] = useState(12);

  const searchBtnClk = (event) => {
    event.preventDefault();
    console.log('Search Button Clicked!');
    dispatch({
      type: 'GET_GIPHY',
      payload: { name: searchInput, limit: limit },
    });
    dispatch({ type: 'SET_CURRENT_SEARCH', payload: searchInput.name });
    dispatch({ type: 'GET_FAVORITES' });
    setSearchInput({ name: '' });
    history.push('/page/1');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchBtnClk(event);
    }
  };

  const addFavoriteStatus = (image) => {
    console.log(`Add/remove Favorite: ${image.id}`);
    if (
      favorites.filter((item) => {
        return item.image_id === image.id;
      }).length > 0
    ) {
      //Axios DELETE call here
      dispatch({ type: 'DELETE_FAVORITE', payload: image });
      // Remove from favorites
      setFavorites(globalFavorites);
    } else {
      //Axios POST call here
      dispatch({ type: 'POST_FAVORITE', payload: image });
      // Add to favorites
      setFavorites(globalFavorites);
    }
  };
  console.log('Favs:', favorites, '\ngiphyResults', currentGiphyResults);
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
        <label htmlFor="result-limit-input">
          Result Limit: (
          <input
            id="result-limit-input"
            value={limit}
            onChange={(event) => {
              setLimit(event.target.value);
            }}
          />
          )
        </label>
      </div>
      {/* Test Output - Delete when replaced by (Search View - Display the results on the DOM.) Task */}
      {/* <div className="test-results-div">
        {currentGiphyResults.map((giphyResult) => {
          return <p key={giphyResult.id}>{JSON.stringify(giphyResult)}</p>;
        })}
      </div> */}
      <div className="results-container">
        {currentGiphyResults.map((image) => (
          <div
            className="results-item"
            key={image.id}>
            <img
              className="results-display"
              src={image.small_url}
              alt={image.title}
            />
            <button
              className={`like-format ${
                favorites.filter((item) => {
                  return item.image_id === image.id;
                }).length > 0
                  ? 'favorited'
                  : ''
              }`}
              onClick={() => addFavoriteStatus(image)}>
              {favorites.filter((item) => {
                return item.image_id === image.id;
              }).length > 0
                ? 'Favorited'
                : 'Like'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
