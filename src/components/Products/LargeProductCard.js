import React from 'react';
import { Row, Col } from 'reactstrap';
import "./LargeProductCard.css"

const Product1 = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>
      <p className="text-primary">Starting at ${props.price}</p>
      <Row>
        <Col className="col-sm-6"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint incidunt quae iste consequuntur sunt, amet omnis provident molestias perspiciatis labore pariatur voluptatum officia ipsam nihil enim deleniti in. Animi, consequatur.
        <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis, quo cum accusantium illo autem sapiente?
        <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero debitis, ipsa fugiat inventore et modi. Temporibus
          hic culpa, commodi tenetur animi ea. Deserunt illum iure consectetur ipsa ullam! Saepe quasi sunt ad deleniti,
          quibusdam voluptate quis doloribus suscipit velit aliquam magni asperiores illo accusantium neque, nemo porro, voluptatum commodi illum.</p>
          <br />
          <Row>
            <Col className="col-sm-2">
              <span id="oneIcon"></span>
            </Col>
            <Col className="col-sm-10">
              <p>Lorem ipsum dolor sit amet</p>
            </Col>
          </Row>

          <Row>
            <Col className="col-sm-2">
              <span id="twoIcon"></span>
            </Col>
            <Col className="col-sm-10">
              <p> ipsa fugiat inventore et</p>
            </Col>
          </Row>

          <Row>
            <Col className="col-sm-2">
              <span id="threeIcon"></span>
            </Col>
            <Col className="col-sm-10">
              <p> Saepe quasi sunt</p>
            </Col>
          </Row>








        </Col>
        <Col className="col-sm-6"><div className="mb-3">{props.image}</div></Col>
      </Row>


    </div>
  );
};

export default Product1;