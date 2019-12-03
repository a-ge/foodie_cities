'use strict';

const fs = require('fs');
const fetch = require("node-fetch");

require('dotenv').config();
const yelp = require('yelp-fusion');
const API_KEY = process.env.YELP_API_KEY;
const client = yelp.client(API_KEY);

const locations = ['San Francisco, CA', 'New York, NY', 'Atlanta, GA'];

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
};

class EasyHTTP {
  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify(data)
    });

    const resData = await response.json();
    return resData;
  }
}

const http = new EasyHTTP;

async function loadDBRestaurants() {
  for (let i=0; i < locations.length; i++) {
    const resp = await callYelp(i)
    const response = resp.jsonBody.businesses

    const cityRestaurants = {
      cityName: locations[i],
      restaurants: response
    };

    http.post('http://localhost:5000/restaurants/add', cityRestaurants)
    .then(data => console.log("data", data))
    .catch(err => console.log(err))
  }
};

loadDBRestaurants();
