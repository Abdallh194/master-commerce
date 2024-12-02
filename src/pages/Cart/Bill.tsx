import { memo } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const Bill: React.FC<ProductListProps> = ({ products }) => {
  const SubTotal = () => {
    let total = 0;
    products.forEach((product) => (total += product.price * product.Quantity));
    return total;
  };
  return (
    <Row className="mt-4">
      <Col md={12} lg={6} className="coupon-info py-3 ">
        <div className="form d-flex">
          <FormControl placeholder="Coupon Code" />
          <div className="btn g-btn">Apply Coupon</div>
        </div>
        <div className="d-flex mt-4 justify-content-between">
          <div className="bill-head">Product Name</div>
          <div className="bill-head">Price per one </div>
        </div>
        <hr />
        {products.map((e, idx) => (
          <div className="d-flex mt-2 justify-content-between" key={idx}>
            <div className="bill-head">
              {e.title} * {e.Quantity}
            </div>
            <div className="bill-head">{e.price}$ </div>
          </div>
        ))}
      </Col>
      <Col md={12} lg={6} className="total-info py-3">
        <div className="head">Cart Total</div>
        <div className="d-flex mt-4 justify-content-between">
          <div className="bill-head">SubTotal</div>
          <div className="bill-head">0$ </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="bill-head">Shipping</div>
          <div className="bill-head">free</div>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <div className="bill-head">Total</div>
          <div className="bill-head">{SubTotal()}$</div>
        </div>
        <Link to="/checkout" className="checkout-btn g-btn btn mt-5">
          Procees to checkout
        </Link>
      </Col>
    </Row>
  );
};

export default memo(Bill);
