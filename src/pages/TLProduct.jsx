import { Container, Row, Col, Card } from 'react-bootstrap'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'

import React from 'react'

function TLProduct() {
  return (
    <div className='tlProduct'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center fw-bold'>Shop Official Fanlight</h1>
          </Col>
        </Row>
        <Row className='product grid'>
          {Array.from({ length: 10 }).map((_, idx) => (
            <Col className='sm-6 md-6 lg-3' key={idx}>
              <Card className='shadow'>
                <Link to="/product"><Card.Img variant="top" className='mb-4' src="https://smglobalshop.com/cdn/shop/files/pre-order-nct-official-fanlight-lightstick-757056_db54e36d-8797-481c-bc74-75e9a263e1ac_960x_crop_center.jpg?v=1688144236" /></Link>
                <Card.Body>
                  <Card.Title>NCT</Card.Title>
                  <Link to="/product"><Card.Subtitle>NCT OFFICIAL FANLIGHT (LIGHTSTICK)</Card.Subtitle></Link>
                  <Card.Text>
                    $56.62
                  </Card.Text>
                  <div className="btn-product">
                    <Link className='product-cart-icon'><FontAwesomeIcon icon={faCartPlus} /></Link>
                    <Link className='btn-order' to="/checkout">ORDER NOW</Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default TLProduct