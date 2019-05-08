import React from 'react';
import { Card, UncontrolledCollapse } from 'reactstrap';

const ProductCollapse = (props) => {
  return (
    <div>
      <UncontrolledCollapse toggler={props.id}>
        <Card>
          Hello World!
      </Card>
      </UncontrolledCollapse>
    </div>
  );
};

export default ProductCollapse;