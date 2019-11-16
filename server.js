const express = require('express');
const mongoose = require('mongoose');
var cors = require('cors');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useFindAndModify: false, useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }
);

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
// const authRouter = require('./routes/auth');
const bookmarksRouter = require('./routes/bookmarks');
const restaurantsRouter = require('./routes/restaurants');

app.use('/users', usersRouter);
// app.use('/auth', authRouter);
app.use('/bookmarks', bookmarksRouter);
app.use('/restaurants', restaurantsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
