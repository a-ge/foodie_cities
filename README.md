# Foodie Cities

Foodie Cities is a full stack MERN web application that allows users to view the most popular restaurants in a specific city. The Yelp API is used to find the most popular restaurants. Popular restaurants are those with the highest number of 'review counts' and 'rating'.

## Table of Contents
* [Tech Stack](#techstack)<br/>
* [Requirements](#Requirements)<br/>
* [Setup/Installation](#installation)<br/>
* [Demo](#demo)<br/>

<a name="techstack"/></a>
## Tech Stack
**Frontend:** Javascript, React, Redux, HTML, CSS, Bootstrap</br>
**Backend:** Node, Express, MongoDB, Mongoose<br/>
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
Create a `.env` file in the client folder and save the following in the file:
```
YELP_API_KEY=YOUR KEY
```
In the foodie_cities project directory, install dependencies:
```
$ npm install
$ cd client
$ npm install
$ cd ..
```

Seed your database by doing the following:
```
$ node seed.js
$ mongoimport --host foodiecities-shard-00-01-a43zh.mongodb.net:27017 --db foodiecities --type json --file FILE_PATH_TO_restaurants.json --jsonArray --authenticationDatabase admin --ssl --username YOUR_USER_ID --password YOUR_PASSWORD
```

Go to [MongoDB](https://www.mongodb.com/), login or create an account.
  - Follow instructions to build a new cluster.
  - Under Security, click 'Database Access' and follow instructions to add new user.
  - Under Atlas, click 'Clusters'. Then under this project cluster, click 'Connect'. Then select 'Connect Your Application'. Copy the "Connection String Only" string provided.
In the config directory of the project on your local computer, create a default.json file and paste the "Connection String Only" string in the file.

Run the app:
```
$ npm run dev
```

<a name="demo"/></a>
## Demo
**Homepage:**
<br/><br/>
