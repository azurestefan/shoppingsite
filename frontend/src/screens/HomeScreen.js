import React from 'react';
import { Row, Col } from 'react-bootstrap';
import products from '../products';
import Product from '../components/Product';

function HomeScreen() {
  return (
    <div>
      <h1>Products List</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} Lg={4} xL={3}>
            {/* responsive bootstrap grid system */}
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default HomeScreen;
