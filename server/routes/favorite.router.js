const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  res.sendStatus(200);
});

// add a new favorite
router.post('/', (req, res) => {
  console.log('Posting a new favorite to DB');
  //query text
  let queryText = 'INSERT INTO "favorites" ("image_id", "url", "title", "category_id") VALUES ($1, $2, $3, null);';
  let queryArgs = [req.body.id, req.body.small_url, req.body.alt];
  pool.query(queryText, queryArgs)
  .then((result) => {
    console.log('Gif added to Favorites DB');
    res.sendStatus(201);
  })
  .catch((err) => {
    console.log('ERROR in POST to Favorites DB Query:', err);
    res.sendStatus(500);
  });
});

// update a favorite's associated category
router.put('/:id', (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  res.sendStatus(200);
});

// delete a favorite
router.delete('/:id', (req, res) => {
  console.log('Deleting a favorite from DB');
  //DELETE query text
  let queryText = 'DELETE FROM "favorites" WHERE image_id = $1;';
  let queryArgs = [req.params.id];
  pool.query(queryText, queryArgs)
  .then((result) => {
      console.log('Favorite deleted from DB');
      res.sendStatus(200);
  }).catch((err) => {
      console.log('ERROR in DELETE Favorite DB Query:', err);
      res.sendStatus(500);
  });
});

module.exports = router;
