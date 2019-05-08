import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { Row, Col, Card } from 'reactstrap';

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
          <h1>Products</h1>
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
      </div >
    );
  }
}

export default Products;