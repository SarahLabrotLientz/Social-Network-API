const router = require("express").Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  deleteUser,
  addReaction,
  removeReaction,
} = require("../../controllers/userController");

// /api/user
router.route("/").get(getUsers).post(createUser);

// /api/users/:userId
router.route("/:userId").get(getSingleUser).delete(deleteUser);

// /api/users/:userId/reactions
router.route("/:userId/Reactions").post(addReaction);

// /api/users/:userId/assignments/:reactionId
router.route("/:userId/reactions/:reactionId").delete(removeReaction);

module.exports = router;
