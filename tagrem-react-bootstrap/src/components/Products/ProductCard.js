import React from 'react';
import { Card } from 'reactstrap';

const ProductCard = (props) => {
  return (
    <Card className="p-3">
      <h3>{props.title}</h3>
      <p>Starting at {props.price}</p>
      <p>{props.paragraph}</p>
      <a href="#">Learn More ></a>
    </Card>
  );
};

export default ProductCard;