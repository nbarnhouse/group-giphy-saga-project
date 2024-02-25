import {useState, useEffect} from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';

export default function Favorites() {
  const dispatch = useDispatch();

  let refreshFavoritesList = () => {
    axios.get('/api/favorites')
    .then((response) => {
      console.log(response.data);
      dispatch({ type: 'GET_GIPHY', payload: searchInput });//FINISH THIS++++++++++++++++++++
    })
    .catch((err) => {
      console.error('ERROR in client GET:', err);
    });
  };


  // //Initial load of component
  // useEffect(() => {
  // // body of effect
  // console.log('Testing initial load of component');
  // // api call
  // refreshFavoritesList();
  // }, []);

  return (
    <div className="favorites-view-div">
      <h1>Our Favorite Gifs!</h1>
    </div>



  );
}
