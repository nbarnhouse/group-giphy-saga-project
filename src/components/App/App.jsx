import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import Manage from '../Manage/Manage';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Route
          path="/"
          exact>
          <Search />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
        <Route path="/manage">
          <Manage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
