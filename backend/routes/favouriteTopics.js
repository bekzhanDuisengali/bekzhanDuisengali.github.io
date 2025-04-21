const express = require('express');
const router = express.Router();
const { addFavouriteTopic, getFavouriteTopics, removeFavouriteTopic } = require('../controllers/favouriteTopicsController');

router.post('/', addFavouriteTopic);

router.get('/:userId', getFavouriteTopics);

router.delete('/', removeFavouriteTopic);

module.exports = router;
