import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

const About = () => {
  return (
    <div>
      <Row>
        <div>
          Foodie Cities is a full stack MongoDB, Express, React/Redux, and NodeJS
          web application that allows users to view the most popular restaurants in
          a specific city. The application utilizes the Yelp API to retrieve restaurant
          data. Popular restaurants are those with the highest number of 'review counts'.
          Users can also bookmark restaurants if they are logged in their account.
        </div>
      </Row>
      <Row>
        <Col>
          Ashley G
        </Col>
        <Col>
          Jessica H
        </Col>
      </Row>
    </div>
  );
};

export default About;
