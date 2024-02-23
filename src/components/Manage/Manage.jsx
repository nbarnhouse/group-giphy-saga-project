import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function Manage() {
  const dispatch = useDispatch();
  const categoryList = useSelector((store) => store.categories);

  useEffect(() => {
    dispatch({ type: 'GET_CATEGORIES' });
  }, []);

  return (
    <div className="manage-view-div">
      <h1>I am a manage view placeholder</h1>
      <h2>I may or may not be used for stretch goals</h2>
      <div className="categorie-contents">
        {categoryList.map((item) => {
          return <p key={item.id}>{JSON.stringify(item)}</p>;
        })}
      </div>
    </div>
  );
}
