import React from 'react';
import { Button } from 'reactstrap';

const LearnMoreCard = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      <Button>Learn More</Button>
    </div>
  );
};

export default LearnMoreCard;