import React from 'react';
import { Card, UncontrolledCollapse } from 'reactstrap';

const ProductCard = (props) => {
  return (
    <Card className="p-3">
      <h3>{props.title}</h3>
      <p>Starting at {props.price}</p>
      <p>{props.paragraph}</p>
      <a href="#" id='toggler'>{props.image}Learn More ></a>
      <UncontrolledCollapse toggler="#toggler">
        Hello World!
      </UncontrolledCollapse>
    </Card>
  );
};

export default ProductCard;