import Breadcrumbs from "@components/Breadcrumb";
import ProductsLoop from "@components/ProductCard/ProductsLoop";
import { useAppSelector } from "@redux/hooks";
import Lottie from "lottie-react";
import { Container, Row } from "react-bootstrap";
import empty from "@assets/LottieFiles/empty.json";
const WishList = () => {
  const { FavItem } = useAppSelector((s) => s.cart);
  return (
    <div className="Wishlist">
      <Container>
        <Breadcrumbs />
        {FavItem.length > 0 ? (
          <Row>
            <ProductsLoop products={FavItem} isfav={true} />
          </Row>
        ) : (
          <div className="empty-cart">
            <Lottie animationData={empty} />
            <p>Wishlist is empty</p>
          </div>
        )}
      </Container>
    </div>
  );
};

export default WishList;
