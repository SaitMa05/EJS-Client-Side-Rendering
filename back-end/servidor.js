const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

// Enable CORS for all routes
app.use(cors());

// Serve static files from the "front-end" folder
app.use(express.static(path.join(__dirname, "../front-end")));

const data = [
   { name: "Alicia", age: 26 },
   { name: "Bruno", age: 30 },
   { name: "Pepe", age: 36 },
];

// Route to send data
app.get("/data", (req, res) => {
   res.json(data);
});

// Start the server
app.listen(3000, () => {
   console.log("Server is up and running on port 3000...");
});