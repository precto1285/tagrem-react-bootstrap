import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { Row, Col, Card, FormGroup, Input } from 'reactstrap';
import Product1 from '../../images/cereal_b.jpg';
import Product2 from '../../images/flower_b.jpg';
import Product3 from '../../images/machine_b.jpg';
import Product4 from '../../images/candy_b.jpg';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        {
          id: 'toggler1',
          title: 'Product Title 1',
          price: '500',
          paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          image: <img src={Product1} alt="cereal" width="100%" />
        },
        {
          id: 'toggler2',
          title: 'Product Title 2',
          price: '1900',
          paragraph: 'Donec ornare magna sit amet erat molestie sollicitudin ac vitae lectus.',
          image: <img src={Product2} alt='flower' width="100%" />
        },
        {
          id: 'toggler3',
          title: 'Product Title 3',
          price: '2730',
          paragraph: 'Cras non metus sed odio tristique imperdiet.',
          image: <img src={Product3} alt="machine" width="100%" />
        },
        {
          id: 'toggler4',
          title: 'Product Title 4',
          price: '731',
          paragraph: 'Pellentesque mattis tellus ut molestie dapibus.',
          image: <img src={Product4} alt="candy" width="100%" />
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Card className="p-3 m-1 bg-light">
          <Row className="mb-2">
            <Col className="col-md-8">
              <h1>Products</h1>
            </Col>

            <Col className="col=md-4">

              <Row>
                <Col className="text-right pt-2">
                  Filter By
            </Col>
                <Col>
                  <FormGroup>
                    <Input type="select" name="select" id="exampleSelect">
                      <option value=''>All</option>
                      <option value='<500'>$500 or less</option>
                      <option value='1000-2000'>From $1000 to $2000</option>
                      <option value='>2000'>$2000 or more</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>

            </Col>

          </Row>

          <Row>
            <Col>
              <ProductCard id={this.state.product[0].id} title={this.state.product[0].title} price={this.state.product[0].price} paragraph={this.state.product[0].paragraph} image={this.state.product[0].image} />
            </Col>
            <Col>
              <ProductCard id={this.state.product[1].id} title={this.state.product[1].title} price={this.state.product[1].price} paragraph={this.state.product[1].paragraph} image={this.state.product[1].image} />

            </Col>
            <Col>
              <ProductCard id={this.state.product[2].id} title={this.state.product[2].title} price={this.state.product[2].price} paragraph={this.state.product[2].paragraph} image={this.state.product[2].image} />
            </Col>
            <Col>
              <ProductCard id={this.state.product[3].id} title={this.state.product[3].title} price={this.state.product[3].price} paragraph={this.state.product[3].paragraph} image={this.state.product[3].image} />
            </Col>
          </Row>
          <Row>
            <Col>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Products;