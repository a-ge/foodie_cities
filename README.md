# Foodie Cities
Foodie Cities is a full stack MERN (MongoDB, Express, React/Redux, NodeJS) web application that allows users to view<br/>
 the most popular restaurants in a specific city. The application utilizes the Yelp API to retrieve restaurant data.<br/>
 Popular restaurants are those with the highest number of 'review counts'. Users can also bookmark restaurants if they are logged in.

## Table of Contents
* [Tech Stack](#techstack)<br/>
* [Requirements](#Requirements)<br/>
* [Setup/Installation](#installation)<br/>
* [Demo](#demo)<br/>

<a name="techstack"/></a>
## Tech Stack
**Frontend:** Javascript, React, Redux, React-Bootstrap, HTML, CSS, Node-Fetch</br>
**Backend:** Node, Express, MongoDB Atlas, Mongoose<br/>
**APIs:** Yelp<br/>

<a name="Requirements"/></a>
## Requirements
MongoDB shell version v4.2.1
<br>
Node v10.16.0

<a name="installation"/></a>
## Setup/Installation
Get Client ID and Key from [Yelp](https://www.yelp.com/fusion)

On local machine, clone the Foodie Cities repository:
```
$ git clone https://github.com/a-ge/foodie_cities.git
```
In the foodie_cities root directory, install dependencies:
```
$ npm install
```
Then also install React dependencies in the client folder:
```
$ cd client
$ npm install
$ cd ..
```

Go to [MongoDB](https://www.mongodb.com/), login or create an account.
  - Follow instructions to build a new cluster.
  - Under Security, click 'Database Access' and follow instructions to add new user.
  - Under Atlas, click 'Clusters'. Under this project cluster, click 'Connect'.<br/>
    Then select 'Connect Your Application'. Copy the "Connection String Only" string provided.

Create a `.env` file in the root directory and save the following in the file:
```
YELP_API_KEY=YOUR KEY
ATLAS_URI=YOUR MONGODB CONNECTION STRING ONLY STRING
```

Run seed.py to retrieve restaurant data from Yelp API and load it into MongoDB:
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
