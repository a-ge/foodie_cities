'use strict';

require('dotenv').config();
const fs = require('fs');

const API_KEY = process.env.YELP_API_KEY;
require('dotenv').config();
const yelp = require('yelp-fusion');
const API_KEY = process.env.YELP_API_KEY;
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
function callYelp(i) {
    const response = client.search({
        term: 'restaurants',
        location: locations[i],
        limit: 1,
        sort_by: 'review_count'
   }).catch(e => {
     console.log(e);
   });
  return response;
}

async function createJSONFile() {
  const restObjArray = []

  for (let i=0; i < locations.length; i++) {
    const resp = await callYelp(i)
    restObjArray.push.apply(restObjArray, resp.jsonBody.businesses)
  }
  console.log(restObjArray);

  let data = JSON.stringify(restObjArray);

  fs.writeFile('restaurants.json', data, (err) => {
      if (err) throw err;
      console.log('Data written to file');
  });
};
}

createJSONFile()
