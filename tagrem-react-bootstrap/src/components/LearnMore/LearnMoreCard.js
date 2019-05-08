import React from 'react';
import { Button } from 'reactstrap';

const LearnMoreCard = (props) => {
  return (
    <div className='p-2 mb-2'>
      <h3>{props.title}</h3>
      <p>{props.paragraph}</p>
      <br />
      <Button>Learn More</Button>
    </div>
  );
};

export default LearnMoreCard;