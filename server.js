const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express(); // Create an Express app. Specifically, it creates an instance of an Express app.

const port = 5000;

// Where we will keep books
let books = []; // This array will be simulating a database

// Middleware

app.use(cors()); // Express's use() method is how we use middleware. The order of middleware is important

// Configuring body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.post("/book", (req, res) => {
  const book = req.body;
  // Output the book to the console for debugging
  console.log(book);
  books.push(book);

  res.send("Book is added to the database");
});

app.listen(port, () =>
  console.log(`Hello world app is listening on port ${port}`)
);
