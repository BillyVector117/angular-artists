const express = require('express');
const connectDB = require('./config/database');
const cors = require('cors');
const app = express()
// This app is deployed at Heroku (billyrodriguezm@outlook.com)
const PORT = process.env.PORT || 4000;

// Database connection
connectDB()
app.use(cors())
// Middleware
app.use(express.json());

// Routes
app.use("/api/artists", require("./routes/artist"));

// Listen server
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
