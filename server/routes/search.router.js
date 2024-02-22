const express = require('express');
const pool = require('../modules/pool');
const axios = require('axios');
require('dotenv').config();

const router = express.Router();

const API_KEY = process.env.API_KEY;
const GIPHY_BASE_URL = 'api.giphy.com/v1/gifs/search';
console.log('API Key:', API_KEY);

router.get('/', (req, res) => {
  const { searchTerm } = req.body;
  const endpointURL = `https://${GIPHY_BASE_URL}/?api_key=${API_KEY}&q=${searchTerm}&limit=10`;
  console.log('Endpoint URL:', endpointURL);
  axios
    .get(endpointURL)
    .then((response) => {
      // package response
      const searchResponse = response.data.data.map((item) => {
        return {
          id: item.id,
          url: item.images.original.url,
          small_url: item.images.downsized.url,
          alt: item.title,
        };
      });
      res.send(searchResponse);
    })
    .catch((err) => {
      console.log('ERROR in server /search/ GET ROUTE:', err);
      res.sendStatus(500);
    });
});

module.exports = router;
