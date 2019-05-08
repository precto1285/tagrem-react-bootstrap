import React from 'react';
import { Card, UncontrolledCollapse } from 'reactstrap';

const ProductCard = (props) => {
  return (
    <div>
      <Card className="p-3">
        <h3>{props.title}</h3>
        <p className="text-primary">Starting at ${props.price}</p>
        <p>{props.paragraph}</p>
        {props.image}
        <a href="#" className="mt-3" id={props.id}>Learn More ></a>
      </Card>
      <UncontrolledCollapse toggler={props.id}>
        <Card>
          Hello World!
      </Card>
      </UncontrolledCollapse>
    </div>
  );
};

export default ProductCard;