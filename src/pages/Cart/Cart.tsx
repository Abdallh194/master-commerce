import Breadcrumbs from "@components/Breadcrumb";
import { CartHeaders } from "@constants/constants";
import { Col, Container, Row } from "react-bootstrap";
import CartProduct from "./CartProduct";
import { useAppSelector } from "@redux/hooks";
import Lottie from "lottie-react";
import empty from "@assets/LottieFiles/empty.json";
const Cart = () => {
  const { CartItem } = useAppSelector((s) => s.cart);
  return (
    <div className="cart">
      <Container>
        <Breadcrumbs />
        {CartItem.length > 0 ? (
          <>
            <Row className="row-container cart-header">
              {CartHeaders.map((e, idx) => (
                <Col xs={2} key={idx} className={e.class}>
                  {e.title}
                </Col>
              ))}
            </Row>
            <CartProduct products={CartItem} isfav={false} />
          </>
        ) : (
          <div className="empty-cart">
            <Lottie animationData={empty} />
            <p>Your Cart is empty</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default Cart;
