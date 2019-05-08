import React, { Component } from 'react';
import { Card, Row, Col } from 'reactstrap';
import LearnMoreCard from './LearnMoreCard';


class LearnMore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      learnMoreCard: [{ title: 'Cras ac mauris', paragraph: 'nteger dictum hendrerit pharetra. Cras fermentum posuere egestas.' }, { title: 'Curabitur elementum', paragraph: 'Cras vel imperdiet mauris. Pellentesque libero mauris, interdum a felis et, condimentum mattis erat.' }, { title: 'Awards and Recognitions', paragraph: 'Aliquam eget ligula mauris. Etiam viverra non turpis eu auctor. Nullam pretium est libero, et condimentum massa egestas id.' }, { title: 'Morbi placerat', paragraph: 'Nam feugiat ultrices ligula eget faucibus. Mauris convallis ipsum est.' }, { title: 'Suspendisse eu', paragraph: 'Duis pretium elementum dui, id feugiat neque facilisis vel.' }, { title: 'Integer faucibus', paragraph: 'Vivamus at rutrum est, eu pellentesque lacus. Curabitur imperdiet tortor sit amet enim ullamcorper, a aliquet odio rutrum.' }]
    }
  }
  render() {
    return (
      <div>
        <Card className="p-3 m-1 bg-light">
          <h1 className="p-2">In Gravida</h1>
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