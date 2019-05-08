import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Banner from './components/Banner';
import MainText from './components/MainText';
import StateFinder from './components/StateFinder';
import LearnMore from './components/LearnMore/LearnMore';


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
          <Col className="col-lg-8">
            <MainText />
          </Col>
          <Col className="col-lg-4">
            <StateFinder />
          </Col>
        </Row>
        <Row>
          <Col>
            <LearnMore />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
