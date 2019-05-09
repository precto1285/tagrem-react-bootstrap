import React from 'react';

const Product1 = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p className="text-primary">Starting at ${props.price}</p>
      <div className="mb-3">{props.image}</div>
    </div>
  );
};

export default Product1;