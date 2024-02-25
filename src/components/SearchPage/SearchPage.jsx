import { useParams, useHistory } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './SearchPage.css';

export default function SearchPage() {
  const { pageId } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const currentSearchTerm = useSelector((store) => store.currentSearch);
  const currentGiphyResults = useSelector((store) => store.searchResults);
  const [searchInput, setSearchInput] = useState({ name: '' });
  const [favorites, setFavorites] = useState([]);
  const [limit, setLimit] = useState(12);
  const pageResults = currentGiphyResults.slice((pageId - 1) * 12, pageId * 12);

  const searchBtnClk = (event) => {
    event.preventDefault();
    console.log('Search Button Clicked!');
    dispatch({
      type: 'GET_GIPHY',
      payload: { name: searchInput, limit: limit },
    });
    dispatch({ type: 'SET_CURRENT_SEARCH', payload: searchInput.name });
    setSearchInput({ name: '' });
    history.push('/page/1');
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      searchBtnClk(event);
    }
  };

  const addFavoriteStatus = (imageId) => {
    console.log(`Add Favorite: ${imageId}`);
    if (favorites.includes(imageId)) {
      // Remove from favorites
      setFavorites(favorites.filter((id) => id !== imageId));
    } else {
      // Add to favorites
      setFavorites([...favorites, imageId]);

      //Axios call here
    }
  };

  const switchPage = (newPage) => {
    console.log('Moving to page:', newPage);
    history.push(`/page/${newPage}`);
  };

  return (
    <div className="search-view-div">
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
      <div className="page-nav-div">
        <h2>Search results for "{currentSearchTerm}":</h2>
        <ul>
          {pageId > 1 && (
            <li
              onClick={() => {
                switchPage(+pageId - 1);
              }}>
              {'<<'}
            </li>
          )}
          {(() => {
            const pageOptions = [];
            for (
              let pageIndex = 1;
              pageIndex <= Math.ceil(currentGiphyResults.length / 12);
              pageIndex++
            ) {
              pageOptions.push(
                +pageId !== pageIndex ? (
                  <li
                    key={pageIndex}
                    onClick={() => switchPage(pageIndex)}>
                    {pageIndex}
                  </li>
                ) : (
                  <li
                    key={pageIndex}
                    className="bigger bold"
                    onClick={() => switchPage(pageIndex)}>
                    {pageIndex}
                  </li>
                )
              );
            }
            return pageOptions;
          })()}
          {pageId < Math.ceil(currentGiphyResults.length / 12) && (
            <li
              onClick={() => {
                switchPage(+pageId + 1);
              }}>
              {'>>'}
            </li>
          )}
        </ul>
      </div>
      <div className="results-container">
        {pageResults.map((image) => (
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
                favorites.includes(image.id) ? 'favorited' : ''
              }`}
              onClick={() => addFavoriteStatus(image.id)}>
              {favorites.includes(image.id) ? 'Favorited' : 'Like'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
