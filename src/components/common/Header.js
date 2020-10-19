import React from 'react';
import logo from './files/InfoTrack_logo.png';
import { Container, Row, Col } from 'react-bootstrap';

// import { Image } from 'react-bootstrap';

const Header = () => {
  return (
    <Container fluid>
      <Row>
        <Col lg={1}>
          <img src={logo} alt=''></img>
        </Col>
        <Col lg={{ span: 3, offset: 3 }}>
          {/* <h2>info track</h2> */}
        </Col>
        <Col lg={1}></Col>
      </Row>
    </Container>
  );
};

export default Header;
