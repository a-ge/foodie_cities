'use strict';

const fs= require('fs');

require('dotenv').config();
const yelp = require('yelp-fusion');
const API_KEY = process.env.YELP_API_KEY;
const client = yelp.client(API_KEY);

const locations = ['san francisco, ca', 'oakland, ca', 'berkeley, ca']

function callYelp(i) {
    const response = client.search({
        term: 'restaurants',
        location: locations[i],
        limit: 2,
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
    // resp = JSON.parse(resp)
    restObjArray.push(resp.jsonBody.businesses)
  }

  let data = JSON.stringify(restObjArray);

  fs.writeFile('./client/src/restaurants_data.json', data, (err) => {
      if (err) throw err;
      console.log('Data written to file');
  });
}

createJSONFile()
