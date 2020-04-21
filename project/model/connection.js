var mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/project",
  { useUnifiedTopology: true, useNewUrlParser: true },
  (error) => {
    if (!error) {
      console.log("Success connected");
    } else {
      console.log("Error connecting to database");
    }
  }
);
