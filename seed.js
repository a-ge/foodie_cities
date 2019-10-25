'use strict';

require('dotenv').config();

const API_KEY = process.env.YELP_API_KEY;
const yelp = require('yelp-fusion');
const client = yelp.client(API_KEY);

client.search({
  term: 'restaurants',
  location: 'san francisco, ca',
  limit: 10,
  sort_by: 'review_count'
}).then(response => {
  console.log(response.jsonBody.businesses);
}).catch(e => {
  console.log(e);
});
