import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import LearnMoreCard from './LearnMoreCard';


class LearnMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learnMoreCard: [{ title: '1', paragraph: 'a' }, { title: '2', paragraph: 'b' }, { title: '3', paragraph: 'c' }, { title: '4', paragraph: 'd' }, { title: '5', paragraph: 'e' }, { title: '6', paragraph: 'f' }]
    }
  }
  render() {
    return (
      <div>
        <Card>
          <h1>In Gravida</h1>
          <Row>
            <Col><LearnMoreCard title={this.state.learnMoreCard[0].title} paragraph={this.state.learnMoreCard[0].paragraph} /></Col>
            <Col><LearnMoreCard title={this.state.learnMoreCard[1].title} paragraph={this.state.learnMoreCard[1].paragraph} /></Col>
            <Col><LearnMoreCard title={this.state.learnMoreCard[2].title} paragraph={this.state.learnMoreCard[2].paragraph} /></Col>
          </Row>
          <Row>
            <Col><LearnMoreCard title={this.state.learnMoreCard[3].title} paragraph={this.state.learnMoreCard[3].paragraph} /></Col>
            <Col><LearnMoreCard title={this.state.learnMoreCard[4].title} paragraph={this.state.learnMoreCard[4].paragraph} /></Col>
            <Col><LearnMoreCard title={this.state.learnMoreCard[5].title} paragraph={this.state.learnMoreCard[5].paragraph} /></Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default LearnMore;