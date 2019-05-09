import React from 'react';
import { Card } from 'reactstrap';

const ProductCard = (props) => {
  return (
    <div>
      <Card className="p-3">
        <h3>{props.title}</h3>
        <p className="text-primary">Starting at ${props.price}</p>
        <p>{props.paragraph}</p>
        <div className="mb-3">{props.image}</div>
        Learn More >
      </Card>
    </div>
  );
};

export default ProductCard;