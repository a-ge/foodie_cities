import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import ashImg from '../../static/ash.jpg';
import jessImg from '../../static/jess.jpg';
import github from '../../static/github-logo.png';
import linkedin from '../../static/linkedIn_logo_initials.png';

const About = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col xs={2} />
          <Col xs={8}>
            <div>
              Foodie Cities is a full stack MongoDB, Express, React/Redux, and NodeJS
              web application that allows users to view the most popular restaurants in
              a specific city. The application utilizes the Yelp API to retrieve restaurant
              data. Popular restaurants are those with the highest number of 'review counts'.
              Users can also bookmark restaurants if they are logged in their account. &nbsp;
              <a href='https://github.com/a-ge/foodie_cities' target="_blank" rel="noopener noreferrer">
                <img src={github} style={{width:20, height:20}} alt='Unavailable'/>
              </a>
              <br/>
            </div>
          </Col>
          <Col xs={2} />
        </Row>
      </Container>
      <br/>
      <Row>
        <Col xs={2} />
        <Col xs={4} md={4}>
          <img src={ashImg} style={{width:345, height:400, padding: '5px'}} alt='Unavailable'/>
          <br/>
          &nbsp; Ashley Gesmundo &nbsp;
          <a href='https://github.com/a-ge' target="_blank" rel="noopener noreferrer">
            <img src={github} style={{width:20, height:20}} alt='Unavailable'/>
          </a>
          &nbsp;
          <a href='https://www.linkedin.com/in/ashleymgesmundo/' target="_blank" rel="noopener noreferrer">
            <img src={linkedin} style={{width:20, height:20}} alt='Unavailable'/>
          </a>
        </Col>
        <Col xs={4} md={4}>
          <img src={jessImg} style={{width:400, height:400, padding: '5px'}} alt='Unavailable'/>
          <br/>
          &nbsp; Jessica Ho &nbsp;
          <a href='https://github.com/jessicahojh' target="_blank" rel="noopener noreferrer">
            <img src={github} style={{width:20, height:20}} alt='Unavailable'/>
          </a>
          &nbsp;
          <a href='https://www.linkedin.com/in/jessicahojh/' target="_blank" rel="noopener noreferrer">
            <img src={linkedin} style={{width:20, height:20}} alt='Unavailable'/>
          </a>
        </Col>
        <Col xs={2} />
      </Row>
    </div>
  );
};

export default About;
