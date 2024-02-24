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
  //POST query text
  let queryText = 'INSERT INTO "favorites" ("image_id", "url", "title", "category_id") VALUES ($1, $2, $3, null);';
  let queryArgs = [req.body.id, req.body.small_url, req.body.title];
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
  res.sendStatus(200);
});

module.exports = router;
