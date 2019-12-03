import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import ashImg from '../../static/ash.jpg'
import jessImg from '../../static/jess.jpg'

const About = () => {
  return (
    <div>
      <Container>
      <Row>
        <div>
          Foodie Cities is a full stack MongoDB, Express, React/Redux, and NodeJS
          web application that allows users to view the most popular restaurants in
          a specific city. The application utilizes the Yelp API to retrieve restaurant
          data. Popular restaurants are those with the highest number of 'review counts'.
          Users can also bookmark restaurants if they are logged in their account.
          <a href='https://github.com/a-ge/foodie_cities'>  Project Github Link</a>
          <br/>
        </div>
      </Row>
      </Container>
      <br/>
      <Row>
        <Col>
          <img src={ashImg} style={{width:345, height:400, padding: '5px'}} alt='Unavailable'/>
          <br/>
          Ashley Gesmundo
          <br/>
          <a href='https://github.com/a-ge'>Github Link</a>
          <br/>
          <a href='https://www.linkedin.com/in/ashleymgesmundo/'>LinkedIn</a>
        </Col>
        <Col>
        <img src={jessImg} style={{width:400, height:400, padding: '5px'}} alt='Unavailable'/>
        <br/>
          Jessica Ho
          <br/>
          <a href='https://github.com/jessicahojh'>Github Link</a>
          <br/>
          <a href='https://www.linkedin.com/in/jessicahojh/'>LinkedIn</a>
        </Col>
      </Row>
    </div>
  );
};

export default About;
