import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Manage.css';

export default function Manage() {
  const dispatch = useDispatch();
  const categoryList = useSelector((store) => store.categories);
  const [createCategoryInput, setCreateCategoryInput] = useState({ name: '' });

  const createCategorySubmitHandler = (event) => {
    event.preventDefault();
    console.log('Creating new category:', createCategoryInput.name);
    dispatch({ type: 'POST_CATEGORY', payload: createCategoryInput });

    setCreateCategoryInput({ ...createCategoryInput, name: '' });
  };

  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  return (
    <div className="manage-view-div">
      <h1>MANAGEMENT MODE</h1>

      <div className="category-contents">
        <h2>Current Categories:</h2>
        <div className="category-list">
          {categoryList.map((item) => {
            return (
              <span key={item.id}>
                <b>{item.name}</b>
              </span>
            );
          })}
        </div>
      </div>

      <div className="create-category-div">
        <h2 className="center-align">Create a new category:</h2>
        <form
          onSubmit={createCategorySubmitHandler}
          name="create-category-form">
          <label htmlFor="new-category-input">Enter New Category Name:</label>
          <input
            id="new-category-input"
            value={createCategoryInput.name}
            placeholder="New Category Name..."
            onChange={(event) =>
              setCreateCategoryInput({
                ...createCategoryInput,
                name: event.target.value,
              })
            }
          />
          <button type="submit">CREATE</button>
        </form>
      </div>
    </div>
  );
}
