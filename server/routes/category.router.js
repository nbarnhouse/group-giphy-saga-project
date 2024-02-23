const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

router.get('/', (req, res) => {
  const queryText = `
    SELECT * FROM "categories"
      ORDER BY "name" ASC;
  `;
  pool
    .query(queryText)
    .then((result) => {
      res.send(result.rows);
    })
    .catch((error) => {
      console.log(`Error on query ${error}`);
      res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
  const queryText = `INSERT INTO "categories" ("name")
  VALUES ($1);`;
  const queryArgs = [req.body.name];
  console.log('REQ.BODY', req.body);

  pool
    .query(queryText, queryArgs)
    .then((dbresp) => {
      console.log(`"${queryArgs[0]}" added to DB Categories Table`);
      res.sendStatus(201);
    })
    .catch((err) => {
      console.error('ERROR in server categories/ POST route');
      res.sendStatus(500);
    });
});

module.exports = router;
