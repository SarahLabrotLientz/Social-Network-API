const connection = require("../config/connection");
const { Course, Student } = require("../models");
const { getRandomName, getRandomAssignments } = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing courses
  await Course.deleteMany({});

  // Drop existing students
  await Student.deleteMany({});\
  
  // Add students to the collection and await the results
  await Student.collection.insertMany(students);

  // Add courses to the collection and await the results
  await Course.collection.insertOne();

  // Log out the seed data to indicate what should appear in the database

  console.info("Seeding complete! 🌱");
  process.exit(0);
});
