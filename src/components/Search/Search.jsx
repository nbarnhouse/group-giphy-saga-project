import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Search.css';

export default function Search() {
  const dispatch = useDispatch();
  const currentGiphyResults = useSelector((store) => store.searchResults);
  const [searchInput, setSearchInput] = useState({ name: '' });

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

  const addFavoriteStatus = (imageId) => {
    console.log(`Add Favorite: ${imageId}`);
  };

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
              src={image.url}
              alt={image.title}
            />
            <button
              className="like-format"
              onClick={() => addFavoriteStatus(image.id)}
            >
              Like
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
