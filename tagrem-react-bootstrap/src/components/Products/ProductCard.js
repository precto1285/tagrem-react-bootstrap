import React from 'react';
import { Card } from 'reactstrap';

const ProductCard = (props) => {
  return (
    <Card>
      <h3>{props.title}</h3>
      <p>Starting at {props.price}</p>
      <p>{props.paragraph}</p>
      <a>Learn More ></a>
    </Card>
  );
};

export default ProductCard;