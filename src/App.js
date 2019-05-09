import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Banner from './components/Banner';
import MainText from './components/MainText';
import StateFinder from './components/StateFinder';
import LearnMore from './components/LearnMore/LearnMore';
import Product from './components/Products/Products';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Banner />
          </Col>
        </Row>
        <Row>
          <Col className="col-md-8">
            <MainText />
          </Col>
          <Col className="col-md-4">
            <StateFinder />
          </Col>
        </Row>
        <Row>
          <Col>
            <LearnMore />
          </Col>
        </Row>
        <Row className="mb-5">
          <Col>
            <Product />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
