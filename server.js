const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

var cors = require('cors');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

const usersRouter = require('./routes/users');
const bookmarksRouter = require('./routes/bookmarks');
const restaurantsRouter = require('./routes/restaurants');

app.use('/users', usersRouter);
app.use('/bookmarks', bookmarksRouter);
app.use('/restaurants', restaurantsRouter);

// Server static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
