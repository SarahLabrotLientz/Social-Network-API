const connection = require("../config/connection");
const { Thought, User } = require("../models");
const { getRandomName, getRandomAssignments } = require("./data"); //should i delete this?

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Course.deleteMany({});

  // Drop existing users
  await Student.deleteMany({});\
  
  // Add users to the collection and await the results
  await Student.collection.insertMany(students);

  // Add thoughts to the collection and await the results
  await Course.collection.insertOne();

  // Log out the seed data to indicate what should appear in the database

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
