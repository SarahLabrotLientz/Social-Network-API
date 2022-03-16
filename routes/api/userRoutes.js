const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/userController");
const { post } = require("../../models/Reaction");

// /api/user
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/friends
// router.route("/:userId/friends").post(addFriend);

// /api/users/:userId/assignments/:reactionId
router.route("/:userId/friend/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
