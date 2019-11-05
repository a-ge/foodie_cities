const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const restaurantsRouter = require('./routes/restaurants');
const usersRouter = require('./routes/users');
const favoritesRouter = require('./routes/favorites');

app.use('/restaurants', restaurantsRouter);
app.use('/users', usersRouter);
app.use('/favorites', favoritesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
