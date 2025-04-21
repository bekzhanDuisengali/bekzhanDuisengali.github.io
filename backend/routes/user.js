const express = require('express');
const router = express.Router();
const {getUserRating, getUserById, updateProfile,changePassword} = require('../controllers/userController');

router.get('/rating/:userId', getUserRating);
router.get('/:userId', getUserById);
router.put('/:userId', updateProfile);
router.put('/:userId/password', changePassword);

module.exports = router;