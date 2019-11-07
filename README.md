# Foodie Cities

Foodie Cities is a full stack MERN (MongoDB, Express, React/Redux, NodeJS) web application that allows users to view the most popular restaurants in a specific city. The application utilizes the Yelp API to retrieve restaurant data. Popular restaurants are those with the highest number of 'review counts'. Users can also bookmark restaurants if they are logged in their account. 

## Table of Contents
* [Tech Stack](#techstack)<br/>
* [Requirements](#Requirements)<br/>
* [Setup/Installation](#installation)<br/>
* [Demo](#demo)<br/>

<a name="techstack"/></a>
## Tech Stack
**Frontend:** Javascript, React, Redux, HTML, CSS, Bootstrap, Axios</br>
**Backend:** Node, Express, MongoDB Atlas, Mongoose<br/>
**APIs:** Facebook<br/>

<a name="Requirements"/></a>
MongoDB shell version v4.2.1
Node v10.16.0

<a name="installation"/></a>
## Setup/Installation
Get Client ID and Key from [Yelp](https://www.yelp.com/fusion)

On your local machine, go to the directory where you want to work and clone the Foodie Cities repository:
```
$ git clone https://github.com/a-ge/foodie_cities.git
```
In the foodie_cities project directory, install dependencies:
```
$ npm install
$ cd client
$ npm install
$ cd ..
```
Go to [MongoDB](https://www.mongodb.com/), login or create an account.
  - Follow instructions to build a new cluster.
  - Under Security, click 'Database Access' and follow instructions to add new user.
  - Under Atlas, click 'Clusters'. Then under this project cluster, click 'Connect'. Then select 'Connect Your Application'. Copy the "Connection String Only" string provided.

Create a `.env` file in the client folder and save the following in the file:
```
YELP_API_KEY=YOUR KEY
ATLAS_URI=YOUR MONGODB CONNECTION STRING ONLY STRING
```

Run seed.py to create a json file containing the restaurant data from Yelp API:
```
$ node seed.js
```

Run the app:
```
$ npm run dev
```

<a name="demo"/></a>
## Demo
**Homepage:**
<br/><br/>
