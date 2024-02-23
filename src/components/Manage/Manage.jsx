import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Manage.css';

export default function Manage() {
  const dispatch = useDispatch();
  const categoryList = useSelector((store) => store.categories);
  const [createCategoryInput, setCreateCategoryInput] = useState({ name: '' });
  const [updatedCategoryInput, setUpdatedCategoryInput] = useState({
    name: '',
  });
  const [deleteCategoryInput, setDeleteCategoryInput] = useState({
    id: '',
    name: '',
  });
  const [editCategoryInput, setEditCategoryInput] = useState({
    id: '',
    name: '',
  });

  const createCategorySubmitHandler = (event) => {
    event.preventDefault();
    console.log('Creating new category:', createCategoryInput.name);
    dispatch({ type: 'POST_CATEGORY', payload: createCategoryInput });

    setCreateCategoryInput({ ...createCategoryInput, name: '' });
  };

  const deleteSelectChange = (event) => {
    event.preventDefault();
    event.target.value
      ? setDeleteCategoryInput({
          ...deleteCategoryInput,
          id: event.target.value,
          name: categoryList.filter((catItem) => {
            return catItem.id === +event.target.value;
          })[0].name,
        })
      : setDeleteCategoryInput({ ...deleteCategoryInput, id: '', name: '' });
  };

  const editSelectChange = (event) => {
    event.preventDefault();
    event.target.value
      ? setEditCategoryInput({
          ...editCategoryInput,
          id: event.target.value,
          name: categoryList.filter((catItem) => {
            return catItem.id === +event.target.value;
          })[0].name,
        })
      : setEditCategoryInput({ ...editCategoryInput, id: '', name: '' });
  };

  const deleteBtnClk = (event) => {
    event.preventDefault();
    console.log('Deleting category:', deleteCategoryInput.name);
    dispatch({ type: 'DELETE_CATEGORY', payload: deleteCategoryInput });

    setDeleteCategoryInput({ ...deleteCategoryInput, id: '', name: '' });
  };

  const updateBtnClk = (event) => {
    event.preventDefault();
    console.log(
      'Updating category:',
      editCategoryInput.name,
      '->',
      updatedCategoryInput.name
    );
    dispatch({
      type: 'PUT_CATEGORY',
      payload: { id: editCategoryInput.id, name: updatedCategoryInput.name },
    });

    setEditCategoryInput({ ...editCategoryInput, id: '', name: '' });
    setUpdatedCategoryInput({ ...updatedCategoryInput, name: '' });
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
        <h2 className="center-align">Create a New Category:</h2>
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
      <div className="delete-category-div">
        <h2 className="center-align">Delete an Existing Category:</h2>
        <div className="delete-dialogue">
          <label htmlFor="category-delete-select">
            Choose a Category to Delete:
          </label>
          <select
            name="delete-categories"
            id="category-delete-select"
            onChange={deleteSelectChange}>
            <option value={''}> --- Choose An Object to Delete ---</option>
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
          {deleteCategoryInput.name && (
            <button
              type="button"
              onClick={deleteBtnClk}>
              DELETE "{deleteCategoryInput.name}"
            </button>
          )}
        </div>
      </div>
      <div className="edit-category-div">
        <h2 className="center-align">Edit an Existing Category:</h2>
        <div className="edit-body">
          <div className="edit-dialogue">
            <label htmlFor="category-edit-select">
              Choose a Category to Edit:
            </label>
            <select
              name="edit-categories"
              id="category-edit-select"
              onChange={editSelectChange}>
              <option value={''}> --- Choose An Object to Edit ---</option>
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
          {editCategoryInput.name && (
            <div className="new-cat-name-select">
              <label htmlFor="new-cat-name-input">New Category Name:</label>
              <input
                id="new-cat-name-input"
                value={updatedCategoryInput.name}
                placeholder="New Category Name..."
                onChange={(event) => {
                  setUpdatedCategoryInput({
                    ...updatedCategoryInput,
                    name: event.target.value,
                  });
                }}
              />
              <button
                type="button"
                onClick={updateBtnClk}>
                UPDATE "{editCategoryInput.name}"
              </button>
            </div>
          )}
        </div>
      </div>
      {/* editCat ID: {editCategoryInput.id}
      <br />
      editCat Name: {editCategoryInput.name} */}
    </div>
  );
}
