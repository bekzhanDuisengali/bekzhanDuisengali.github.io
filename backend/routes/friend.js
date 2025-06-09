const express = require('express');
const router = express.Router();
const {
    sendFriendRequest,
    getFriends,
    acceptFriendRequest,
    getIncomingRequests,
    rejectFriendRequest,
    removeFriend,
    getFriendshipStatus,
} = require('../controllers/friendController');
router.get('/status', getFriendshipStatus);
router.get('/:userId/friends', getFriends);
router.post('/request', sendFriendRequest);
router.get('/:userId/friends', getFriends);
router.post('/accept', acceptFriendRequest);
router.get('/:userId/requests', getIncomingRequests);
router.post('/reject', rejectFriendRequest);
router.delete('/', removeFriend);
module.exports = router;