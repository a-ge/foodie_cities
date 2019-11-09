'use strict';

const fs = require('fs');

require('dotenv').config();
const yelp = require('yelp-fusion');
const API_KEY = process.env.YELP_API_KEY;
const client = yelp.client(API_KEY);

const locations = ['San Francisco, CA', 'New York, NY', 'Atlanta, GA']

function callYelp(i) {
    const response = client.search({
        term: 'restaurants',
        location: locations[i],
        limit: 10,
        sort_by: 'review_count'
   }).catch(e => {
     console.log(e);
   });
  return response;
}

async function createJSONFile() {
  const restObjArray = []

  for (let i=0; i < locations.length; i++) {
    const dict = {}
    const resp = await callYelp(i)
    dict[locations[i]] = resp.jsonBody.businesses
    restObjArray.push(dict)
  }

  let data = JSON.stringify(restObjArray);

  fs.writeFile('./client/src/restaurants_data.json', data, (err) => {
      if (err) throw err;
      console.log('Data written to file');
  });
};

createJSONFile()
