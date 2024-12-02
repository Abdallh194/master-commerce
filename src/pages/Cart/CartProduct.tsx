import { memo, useState } from "react";
import { Col, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router-dom";
import Bill from "./Bill";
import Qty from "./Qty";
import DeleteFromCard from "./DeleteFromCard";

const CartProduct: React.FC<ProductListProps> = ({ products }) => {
  const [loading, setLoading] = useState(false);
  return (
    <>
      {products.map((e, idx) => (
        <Row key={idx} className="cart-items row-container">
          {loading && (
            <div className="loading">
              <Spinner animation="border" />
            </div>
          )}

          <Col xs={2} className="headers">
            <img src={e.images} alt={e.title} className="img-fluid" />
          </Col>
          <Col xs={2} className="headers">
            <div className="product-title item">{e.title}</div>
          </Col>
          <Col xs={2} className="d-none-mobileView ">
            <div className="product-cat item">{e.category}</div>
          </Col>
          <Col xs={2} className="headers">
            <Qty setLoading={setLoading} Product={e} />
          </Col>
          <Col xs={2} className="headers">
            <div className="product-price item">{e.price * e.Quantity}$</div>
          </Col>
          <Col xs={2} className="headers">
            <DeleteFromCard id={e.id} setLoading={setLoading} />
          </Col>
        </Row>
      ))}
      <Link to="/shopping" className="back-shop btn ">
        Return to shop
      </Link>
      <Bill products={products} isfav={false} />
    </>
  );
};

export default memo(CartProduct);
