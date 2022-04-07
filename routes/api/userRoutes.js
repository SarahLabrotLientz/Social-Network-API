const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addFriend,
  removeFriend,
  updateUser
} = require("../../controllers/userController");

// /api/user
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser).put(updateUser);

// /api/users/:userId/friends
// router.route("/:userId/friends").post(addFriend);

// /api/users/:userId/assignments/:reactionId
router.route("/:userId/friend/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;
