const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

// return all favorite images
router.get('/', (req, res) => {
  console.log('Getting favorites from DB');
  //query text
  let queryText = 'SELECT * from "favorites" ORDER BY "id" ASC;';
  pool.query(queryText)
  .then((result) => {
    console.log('Favorites fetched from DB');
    res.send(result.rows);
  })
  .catch((err) => {
    console.log('ERROR in GET from Favorites DB Query:', err);
    res.sendStatus(500);
  });
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

// update a favorite's associated category, req.body should contain a category_id to add to this favorite image
router.put('/:id', (req, res) => {
  console.log('Updating favorite with new category');
  //query text
  let queryText = 'UPDATE "favorites" SET "category_id" = $1 WHERE "image_id" = $2;';
  let queryArgs = [req.body.categoryId, req.params.id]
  pool.query(queryText, queryArgs)
  .then((result) => {
    console.log('Gif has been categorized');
    res.sendStatus(200);
  })
  .catch((err) => {
    console.log('ERROR in PUT to Favorites DB Query:', err);
    res.sendStatus(500);
  });
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
