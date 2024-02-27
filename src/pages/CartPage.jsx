import { Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrashCan, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"

import { Link } from "react-router-dom"

const CartPage = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    setQuantity(Math.max(quantity - 1, 1));
  };

  return (
    <div className="wrapper d-flex justify-content-center w-100 min-vh-100">
      <div className="cart">
        <div className="cart-head">
          <h1>SHOPPING CART</h1>
          <p>✔️ The expected delivery date may be delayed due to product and logistics issues.<br />
            ✔️ If your order contains both in-stock items and pre-order items, the shipment will be processed and dispatched once all the items are in stock.</p>
        </div>
        <div className="cart-body">
          <Row>
            <Col className="sm-12">
              <form action="" method="post" nonvalidate>
                <table className="cart-items  no-borders w-100">
                  <thead>
                    <tr>
                      <th></th>
                      <th className="product-name">PRODUCT</th>
                      <th className="product-subtotal">UNIT PRICE</th>
                      <th className="product-quantity">QUANTITY</th>
                      <th className="product-total">TOTAL</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th className="cart-item-check"><input type="checkbox" /></th>
                      <th className="cart-item-product">
                        <img style={{ width: 100 }} src="https://smglobalshop.com/cdn/shop/files/pre-order-nct-official-fanlight-lightstick-757056_db54e36d-8797-481c-bc74-75e9a263e1ac_960x_crop_center.jpg?v=1688144236" />
                        <span>NCT LIGHTSTICK(OFFICIAL LIGHTSTICK)</span>
                      </th>
                      <th className="cart-item-subtotal">SUBTOTAL</th>
                      <th className="cart-item-quantity">
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <button className="btn btn-dark btn-sm" onClick={handleDecrement}>
                                <FontAwesomeIcon icon={faMinus} />
                              </button>
                            </div>
                            <input
                              type="number"
                              id="qty_input"
                              className="form-control form-control-sm"
                              value={quantity}
                              min="1"
                              readOnly
                            />
                            <div className="input-group-prepend">
                              <button className="btn btn-dark btn-sm" onClick={handleIncrement}>
                                <FontAwesomeIcon icon={faPlus} />
                              </button>
                            </div>
                          </div>
                      </th>
                      <th className="cart-item-total">TOTAL</th>
                      <th className="cart-item-delete"><Link><FontAwesomeIcon icon={faTrashCan} /></Link></th>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th colSpan={2}><Link>Continue Shopping</Link></th>
                      <th className="checkout-btn" colSpan={4}>
                        <button>CHECKOUT - $56.62</button>
                        <p>Taxes and shipping calculated at checkout</p>
                      </th>
                    </tr>
                  </tfoot>
                </table>
              </form>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  )
}

export default CartPage