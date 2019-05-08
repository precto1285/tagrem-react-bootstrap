import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { Row, Col, Card, FormGroup, Label, Input } from 'reactstrap';

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: [
        { title: 'Product Title 1', price: '$500', paragraph: '', image: '' },
        { title: 'Product Title 2', price: '$1900', paragraph: '', image: '' },
        { title: 'Product Title 3', price: '$2730', paragraph: '', image: '' }, { title: 'Product Title 4', price: '$731', paragraph: '', image: '' }
      ]
    }
  }
  render() {
    return (
      <div>
        <Card className="p-3 m-1">
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
              <ProductCard title={this.state.product[0].title} price={this.state.product[0].price} paragraph={this.state.product[0].paragraph} image={this.state.product[0].image} />
            </Col>
            <Col>
              <ProductCard title={this.state.product[1].title} price={this.state.product[1].price} paragraph={this.state.product[1].paragraph} image={this.state.product[1].image} />

            </Col>
            <Col>
              <ProductCard title={this.state.product[2].title} price={this.state.product[2].price} paragraph={this.state.product[2].paragraph} image={this.state.product[2].image} />
            </Col>
            <Col>
              <ProductCard title={this.state.product[3].title} price={this.state.product[3].price} paragraph={this.state.product[3].paragraph} image={this.state.product[3].image} />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Products;