import { Row, Col, Accordion } from "react-bootstrap";

const ProductPage = () => {
  return (
    <div className="wrapper d-flex justify-content-center w-100 min-vh-100">
      <Row className="products w-100">
        <Col>
          <div className="product-grid-container">
            <div className="product-img">
              <img src="https://smglobalshop.com/cdn/shop/files/SM_Official_NCTCCOMAZGROCERY_MD_Figure_00-1_960x_crop_center.jpg?v=1683673236" alt="" />
            </div>
            <div className="product-information">
              <p className="product-artist">NCT</p>
              <div className="product-title">
                <h1>NCT POPUP STORE [CCOMAZ GROCERY STORE] NCT RANDOM FIGURE + PHOTO CARD</h1>
                <div className="product-price">Rp 615.000,00</div>

                <div className="product-pickup">
                
                </div>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default ProductPage