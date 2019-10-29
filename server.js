const express = require('express');
const connectDB = require('./config/db');

const app = express();


// Connect Database
connectDB();

app.get('/', (req, res) =>
    res.json({ msg: "Welcome to the Popular Events API..." })
);

// Define Routes
// app.use('api/events', require('./routes/events'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
