import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './Manage.css';

export default function Manage() {
  const dispatch = useDispatch();
  const categoryList = useSelector((store) => store.categories);

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
      </div>
    </div>
  );
}
