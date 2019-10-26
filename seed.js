'use strict';

require('dotenv').config();

const API_KEY = process.env.YELP_API_KEY;
const yelp = require('yelp-fusion');
const client = yelp.client(API_KEY);

const locations = ['san francisco, ca', 'oakland, ca', 'berkeley, ca']

for (let i=0; i < locations.length; i++){
  client.search({
    term: 'restaurants',
    location: locations[i],
    limit: 3,
    sort_by: 'review_count'
  }).then(response => {
    console.log(response.jsonBody.businesses);
  }).catch(e => {
    console.log(e);
  });
};
