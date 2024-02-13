const mongoose = require("mongoose");
// for database connection
// MongoDB connection URL
const url = "mongodb://localhost:27017/mydatabase";

// Connect to MongoDB
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
