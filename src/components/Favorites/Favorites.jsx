import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Favorites.css';

export default function Favorites() {
  const dispatch = useDispatch();
  const currentFavorites = useSelector((store) => store.favorites);
  const categoryList = useSelector((store) => store.categories);
  //let [category, setCategory] = useState('')

  //Initial load of component
  useEffect(() => {
  // body of effect
  console.log('Testing initial load of component');
  // api call
  dispatch({ type: 'GET_FAVORITES' });
  dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  console.log('CATEGORY LIST!!!', categoryList);
  console.log('CURRENT FAVS!!!', currentFavorites);

  const categorizeGif = (event) => {
    event.preventDefault();
    let cat_id = event.target.value;
    let image_id = event.target.parentElement.parentElement.id
    dispatch({ type: 'PUT_FAVORITE', payload: {id: image_id, categoryId: cat_id} });
    //setCategory(event.target.value)
  }

  return (
  <>  
    <div className="favorites-view-div">
      <h1>Our Favorite Gifs!</h1>
    </div>
    <div className="favorites-container">
    {currentFavorites.map((image) => {
      const categorymatch = categoryList.find((category) => category.id === image.category_id);
      return (
      <div className="favorites-item" key={image.id} id={image.image_id}>
        <img
          className="favorites-display"
          src={image.url}
          alt={image.title}
        />
      {/* ------------------------------------------------------------------------------ */}
      <div className="catigorize-dialogue">
          <label htmlFor="category-select">
            Choose a Category:
          </label>&nbsp;
          <select
            name="category-select"
            id="category-select"
            value={categorymatch ? categorymatch.id : ''}
            onChange={categorizeGif}>
            <option value={''}>Choose a Category</option>
            {categoryList.map((item) => {
              return (
                <option
                  key={item.id}
                  value={item.id}>
                  {item.name}
                </option>
              );
            })}
          </select>
        </div>
      {/* ------------------------------------------------------------------------------ */}
      </div>
    )})}
    </div>
  </>
  );
}
