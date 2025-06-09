const express = require('express');
const router = express.Router();
const {getUserRating, getUserById, updateProfile,changePassword,getAverageRating,getUserRatingHistory} = require('../controllers/userController');

router.get('/:userId/average-rating', getAverageRating);
router.get('/rating/:userId', getUserRating);
router.get('/:userId', getUserById);
router.put('/:userId', updateProfile);
router.put('/:userId/password', changePassword);
router.get('/:userId/rating-history', getUserRatingHistory);
module.exports = router;